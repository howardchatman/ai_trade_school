'use server';

import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { revalidatePath } from 'next/cache';
import type { Profile, Track, Module, Lesson } from '@/types';

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

  const { error } = await supabase.from('tracks').insert({
    title,
    slug,
    description,
    sort_order,
    is_published,
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

  const { error } = await supabase
    .from('tracks')
    .update({
      title,
      slug,
      description,
      sort_order,
      is_published,
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
  const required_tier = formData.get('required_tier') as string || 'free';

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
    required_tier,
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
  const required_tier = formData.get('required_tier') as string || 'free';

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
      required_tier,
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

export async function updateUserTier(userId: string, tier: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('profiles')
    .update({ tier })
    .eq('id', userId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/users');
  return { success: true };
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
    { data: recentUsers },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('tracks').select('*', { count: 'exact', head: true }),
    supabase.from('lessons').select('*', { count: 'exact', head: true }),
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
    recentUsers: recentUsers || [],
  };
}
