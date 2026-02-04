'use server';

import { createClient } from '@/lib/supabase/server';
import type { Track, Module, Lesson } from '@/types';

export async function getTracks() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('tracks')
    .select(`
      *,
      modules (
        *,
        lessons (*)
      )
    `)
    .eq('is_published', true)
    .order('sort_order')
    .order('sort_order', { referencedTable: 'modules' })
    .order('sort_order', { referencedTable: 'modules.lessons' });

  if (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }

  return data as (Track & { modules: (Module & { lessons: Lesson[] })[] })[];
}

export async function getTrackBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('tracks')
    .select(`
      *,
      modules (
        *,
        lessons (*)
      )
    `)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('Error fetching track:', error);
    return null;
  }

  return data as Track & { modules: (Module & { lessons: Lesson[] })[] };
}

export async function getTracksWithProgress(userId: string) {
  const supabase = await createClient();

  // Get tracks with modules and lessons
  const { data: tracks, error: tracksError } = await supabase
    .from('tracks')
    .select(`
      *,
      modules (
        *,
        lessons (*)
      )
    `)
    .eq('is_published', true)
    .order('sort_order')
    .order('sort_order', { referencedTable: 'modules' })
    .order('sort_order', { referencedTable: 'modules.lessons' });

  if (tracksError) {
    console.error('Error fetching tracks:', tracksError);
    return [];
  }

  // Get user's progress
  const { data: progress, error: progressError } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId);

  if (progressError) {
    console.error('Error fetching progress:', progressError);
  }

  const progressMap = new Map(
    (progress || []).map((p) => [p.lesson_id, p])
  );

  // Merge progress into tracks
  return tracks.map((track) => ({
    ...track,
    modules: track.modules.map((module: Module & { lessons: Lesson[] }) => ({
      ...module,
      lessons: module.lessons.map((lesson: Lesson) => ({
        ...lesson,
        progress: progressMap.get(lesson.id) || null,
      })),
    })),
  }));
}
