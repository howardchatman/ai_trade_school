'use server';

import { createClient } from '@/lib/supabase/server';
import type { Purchase } from '@/types';

export async function getUserPurchases(userId: string): Promise<Purchase[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('purchases')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'completed');

  if (error) {
    console.error('Error fetching purchases:', error);
    return [];
  }
  return data as Purchase[];
}

export async function getUserPurchasedTrackIds(userId: string): Promise<string[]> {
  const purchases = await getUserPurchases(userId);
  return purchases.map(p => p.track_id);
}

export async function hasUserPurchasedTrack(userId: string, trackId: string): Promise<boolean> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('track_id', trackId)
    .eq('status', 'completed')
    .single();

  return !!data;
}
