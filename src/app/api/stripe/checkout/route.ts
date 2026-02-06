import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { stripe } from '@/lib/stripe/client';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const trackId = formData.get('trackId') as string;

    if (!trackId) {
      return NextResponse.json(
        { error: 'Track ID is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.redirect(
        new URL('/login', process.env.NEXT_PUBLIC_APP_URL)
      );
    }

    // Look up the track to get its Stripe price ID
    const { data: track } = await supabase
      .from('tracks')
      .select('id, slug, stripe_price_id, price_cents')
      .eq('id', trackId)
      .single();

    if (!track || !track.stripe_price_id || track.price_cents === 0) {
      return NextResponse.json(
        { error: 'Invalid course or course is free' },
        { status: 400 }
      );
    }

    // Check if user already purchased this course
    const { data: existingPurchase } = await supabase
      .from('purchases')
      .select('id')
      .eq('user_id', user.id)
      .eq('track_id', trackId)
      .eq('status', 'completed')
      .single();

    if (existingPurchase) {
      return NextResponse.redirect(
        new URL(`/app/track/${track.slug}`, process.env.NEXT_PUBLIC_APP_URL),
        { status: 303 }
      );
    }

    // Get user's profile to check for existing Stripe customer
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    let customerId = profile?.stripe_customer_id;

    // Create a new Stripe customer if none exists
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user.id,
        },
      });
      customerId = customer.id;

      // Save customer ID to profile
      await supabase
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id);
    }

    // Create one-time payment Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: track.stripe_price_id,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/track/${track.slug}?purchased=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/courses?canceled=true`,
      metadata: {
        supabase_user_id: user.id,
        track_id: track.id,
      },
    });

    // Redirect to Checkout
    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
