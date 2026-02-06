'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { revalidatePath } from 'next/cache';
import type { Profile, Track, Module, Lesson, Purchase } from '@/types';

// =====================
// TRACKS
// =====================

export async function getAdminTracks() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('tracks')
    .select(`
      *,
      modules (
        id,
        lessons (id)
      )
    `)
    .order('sort_order');

  if (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }

  return data;
}

export async function createTrack(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const description = formData.get('description') as string;
  const sort_order = parseInt(formData.get('sort_order') as string) || 0;
  const is_published = formData.get('is_published') === 'true';
  const price_cents = parseInt(formData.get('price_cents') as string) || 0;
  const stripe_price_id = (formData.get('stripe_price_id') as string) || null;
  const price_label = (formData.get('price_label') as string) || (price_cents === 0 ? 'Free' : `$${price_cents / 100}`);

  const { error } = await supabase.from('tracks').insert({
    title,
    slug,
    description,
    sort_order,
    is_published,
    price_cents,
    stripe_price_id,
    price_label,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/tracks');
  return { success: true };
}

export async function updateTrack(id: string, formData: FormData) {
  const supabase = await createClient();

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const description = formData.get('description') as string;
  const sort_order = parseInt(formData.get('sort_order') as string) || 0;
  const is_published = formData.get('is_published') === 'true';
  const price_cents = parseInt(formData.get('price_cents') as string) || 0;
  const stripe_price_id = (formData.get('stripe_price_id') as string) || null;
  const price_label = (formData.get('price_label') as string) || (price_cents === 0 ? 'Free' : `$${price_cents / 100}`);

  const { error } = await supabase
    .from('tracks')
    .update({
      title,
      slug,
      description,
      sort_order,
      is_published,
      price_cents,
      stripe_price_id,
      price_label,
    })
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/tracks');
  return { success: true };
}

export async function deleteTrack(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from('tracks').delete().eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/tracks');
  return { success: true };
}

// =====================
// MODULES
// =====================

export async function getAdminModules() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('modules')
    .select(`
      *,
      track:tracks (id, title),
      lessons (id)
    `)
    .order('sort_order');

  if (error) {
    console.error('Error fetching modules:', error);
    return [];
  }

  return data;
}

export async function createModule(formData: FormData) {
  const supabase = await createClient();

  const track_id = formData.get('track_id') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const sort_order = parseInt(formData.get('sort_order') as string) || 0;
  const is_published = formData.get('is_published') === 'true';

  const { error } = await supabase.from('modules').insert({
    track_id,
    title,
    description,
    sort_order,
    is_published,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/modules');
  return { success: true };
}

export async function updateModule(id: string, formData: FormData) {
  const supabase = await createClient();

  const track_id = formData.get('track_id') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const sort_order = parseInt(formData.get('sort_order') as string) || 0;
  const is_published = formData.get('is_published') === 'true';

  const { error } = await supabase
    .from('modules')
    .update({
      track_id,
      title,
      description,
      sort_order,
      is_published,
    })
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/modules');
  return { success: true };
}

export async function deleteModule(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from('modules').delete().eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/modules');
  return { success: true };
}

// =====================
// LESSONS
// =====================

export async function getAdminLessons() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('lessons')
    .select(`
      *,
      module:modules (
        id,
        title,
        track:tracks (id, title)
      )
    `)
    .order('sort_order');

  if (error) {
    console.error('Error fetching lessons:', error);
    return [];
  }

  return data;
}

export async function createLesson(formData: FormData) {
  const supabase = await createClient();

  const module_id = formData.get('module_id') as string;
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const summary = formData.get('summary') as string;
  const content_md = formData.get('content_md') as string;
  const video_url = formData.get('video_url') as string;
  const duration_minutes = parseInt(formData.get('duration_minutes') as string) || null;
  const sort_order = parseInt(formData.get('sort_order') as string) || 0;
  const is_published = formData.get('is_published') === 'true';

  const { error } = await supabase.from('lessons').insert({
    module_id,
    title,
    slug,
    summary,
    content_md,
    video_url: video_url || null,
    duration_minutes,
    sort_order,
    is_published,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/lessons');
  return { success: true };
}

export async function updateLesson(id: string, formData: FormData) {
  const supabase = await createClient();

  const module_id = formData.get('module_id') as string;
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const summary = formData.get('summary') as string;
  const content_md = formData.get('content_md') as string;
  const video_url = formData.get('video_url') as string;
  const duration_minutes = parseInt(formData.get('duration_minutes') as string) || null;
  const sort_order = parseInt(formData.get('sort_order') as string) || 0;
  const is_published = formData.get('is_published') === 'true';

  const { error } = await supabase
    .from('lessons')
    .update({
      module_id,
      title,
      slug,
      summary,
      content_md,
      video_url: video_url || null,
      duration_minutes,
      sort_order,
      is_published,
    })
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/lessons');
  return { success: true };
}

export async function deleteLesson(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from('lessons').delete().eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/lessons');
  return { success: true };
}

// =====================
// USERS
// =====================

export async function getAdminUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }

  return data as Profile[];
}

export async function updateUserRole(userId: string, role: 'student' | 'admin') {
  const supabase = await createClient();

  const { error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('id', userId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/users');
  return { success: true };
}

export async function grantCourseAccess(userId: string, trackId: string) {
  const supabase = await createClient();

  const { error } = await supabase.from('purchases').upsert(
    {
      user_id: userId,
      track_id: trackId,
      amount_cents: 0,
      status: 'completed',
    },
    { onConflict: 'user_id,track_id' }
  );

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/users');
  return { success: true };
}

export async function revokeCourseAccess(userId: string, trackId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('purchases')
    .delete()
    .eq('user_id', userId)
    .eq('track_id', trackId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/users');
  return { success: true };
}

export async function getAdminTracks_Simple() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('tracks')
    .select('id, title, price_cents')
    .order('sort_order');
  return data || [];
}

export async function getUserPurchases_Admin(userId: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('purchases')
    .select('track_id')
    .eq('user_id', userId)
    .eq('status', 'completed');
  return (data || []).map((p) => p.track_id);
}

// =====================
// STATS
// =====================

export async function getAdminStats() {
  const supabase = await createClient();

  const [
    { count: usersCount },
    { count: tracksCount },
    { count: lessonsCount },
    { count: purchasesCount },
    { data: recentUsers },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('tracks').select('*', { count: 'exact', head: true }),
    supabase.from('lessons').select('*', { count: 'exact', head: true }),
    supabase.from('purchases').select('*', { count: 'exact', head: true }),
    supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5),
  ]);

  return {
    usersCount: usersCount || 0,
    tracksCount: tracksCount || 0,
    lessonsCount: lessonsCount || 0,
    purchasesCount: purchasesCount || 0,
    recentUsers: recentUsers || [],
  };
}
