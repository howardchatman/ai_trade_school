import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe/client';
import { createAdminClient } from '@/lib/supabase/admin';
import Stripe from 'stripe';
import { sendPurchaseConfirmation } from '@/lib/resend';

export async function POST(request: Request) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.supabase_user_id;
        const trackId = session.metadata?.track_id;
        const customerId = session.customer as string;

        if (userId) {
          // Save customer ID to profile
          await supabase
            .from('profiles')
            .update({ stripe_customer_id: customerId })
            .eq('id', userId);
        }

        if (userId && trackId) {
          // Record the course purchase
          await supabase
            .from('purchases')
            .upsert({
              user_id: userId,
              track_id: trackId,
              stripe_checkout_session_id: session.id,
              stripe_payment_intent_id: session.payment_intent as string,
              amount_cents: session.amount_total || 0,
              status: 'completed',
              purchased_at: new Date().toISOString(),
            }, {
              onConflict: 'user_id,track_id',
            });

          // Send purchase confirmation email
          const { data: profile } = await supabase
            .from('profiles')
            .select('email, full_name')
            .eq('id', userId)
            .single();

          const { data: track } = await supabase
            .from('tracks')
            .select('title')
            .eq('id', trackId)
            .single();

          if (profile?.email && track?.title) {
            const firstName = profile.full_name?.split(' ')[0] || 'there';
            sendPurchaseConfirmation(
              profile.email,
              firstName,
              track.title,
              session.amount_total || 0
            ).catch(console.error);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
