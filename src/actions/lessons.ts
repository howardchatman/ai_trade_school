'use server';

import { createClient } from '@/lib/supabase/server';
import type { Lesson, Module, Track, Progress } from '@/types';

export async function getLessonBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('lessons')
    .select(`
      *,
      module:modules (
        *,
        track:tracks (*)
      )
    `)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('Error fetching lesson:', error);
    return null;
  }

  return data as Lesson & { module: Module & { track: Track } };
}

export async function getLessonWithProgress(slug: string, userId: string) {
  const supabase = await createClient();

  // Get lesson with module and track info
  const { data: lesson, error: lessonError } = await supabase
    .from('lessons')
    .select(`
      *,
      module:modules (
        *,
        track:tracks (*),
        lessons (id, slug, title, sort_order)
      )
    `)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (lessonError || !lesson) {
    console.error('Error fetching lesson:', lessonError);
    return null;
  }

  // Get user's progress for this lesson
  const { data: progress } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', userId)
    .eq('lesson_id', lesson.id)
    .single();

  return {
    ...lesson,
    progress: progress || null,
  } as Lesson & {
    module: Module & {
      track: Track;
      lessons: Pick<Lesson, 'id' | 'slug' | 'title' | 'sort_order'>[]
    };
    progress: Progress | null;
  };
}

export async function getAdjacentLessons(
  moduleId: string,
  currentSortOrder: number
) {
  const supabase = await createClient();

  // Get previous lesson
  const { data: prevLessons } = await supabase
    .from('lessons')
    .select('slug, title')
    .eq('module_id', moduleId)
    .eq('is_published', true)
    .lt('sort_order', currentSortOrder)
    .order('sort_order', { ascending: false })
    .limit(1);

  // Get next lesson
  const { data: nextLessons } = await supabase
    .from('lessons')
    .select('slug, title')
    .eq('module_id', moduleId)
    .eq('is_published', true)
    .gt('sort_order', currentSortOrder)
    .order('sort_order')
    .limit(1);

  return {
    previous: prevLessons?.[0] || null,
    next: nextLessons?.[0] || null,
  };
}
