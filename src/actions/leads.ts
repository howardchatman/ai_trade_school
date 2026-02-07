'use server';

import { createClient } from '@/lib/supabase/server';

export async function captureEmail(
  email: string,
  source: string
): Promise<{ success: boolean; error?: string }> {
  if (!email || !email.includes('@')) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from('leads')
    .upsert({ email: email.toLowerCase().trim(), source }, { onConflict: 'email' });

  if (error) {
    console.error('Error capturing lead:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }

  return { success: true };
}
