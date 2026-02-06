'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { ROUTES } from '@/lib/constants';

export async function completeOnboarding() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(ROUTES.LOGIN);
  }

  await supabase
    .from('profiles')
    .update({ onboarding_completed: true })
    .eq('id', user.id);

  revalidatePath('/', 'layout');
  redirect(ROUTES.APP);
}

export async function getOnboardingTracks() {
  const supabase = await createClient();

  // Get the $497 flagship course
  const { data: flagship } = await supabase
    .from('tracks')
    .select('id, slug, title, description, price_cents, modules(id, lessons(id))')
    .eq('is_published', true)
    .eq('price_cents', 49700)
    .single();

  // Get the $99 workshop courses
  const { data: workshops } = await supabase
    .from('tracks')
    .select('id, slug, title, description, price_cents, modules(id, lessons(id))')
    .eq('is_published', true)
    .eq('price_cents', 9900)
    .order('sort_order');

  return { flagship, workshops: workshops || [] };
}
