'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import type { ProgressStatus } from '@/lib/constants';

export async function updateProgress(
  lessonId: string,
  status: ProgressStatus
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated' };
  }

  const { error } = await supabase
    .from('progress')
    .upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        status,
        completed_at: status === 'completed' ? new Date().toISOString() : null,
      },
      {
        onConflict: 'user_id,lesson_id',
      }
    );

  if (error) {
    console.error('Error updating progress:', error);
    return { error: error.message };
  }

  revalidatePath('/app');
  return { success: true };
}

export async function markLessonComplete(lessonId: string) {
  return updateProgress(lessonId, 'completed');
}

export async function markLessonInProgress(lessonId: string) {
  return updateProgress(lessonId, 'in_progress');
}

export async function getUserProgress(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('progress')
    .select(`
      *,
      lesson:lessons (
        id,
        title,
        slug,
        module:modules (
          title,
          track:tracks (title, slug)
        )
      )
    `)
    .eq('user_id', userId)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error fetching progress:', error);
    return [];
  }

  return data;
}

export async function getProgressStats(userId: string) {
  const supabase = await createClient();

  const { data: progress, error } = await supabase
    .from('progress')
    .select('status')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching progress stats:', error);
    return { total: 0, completed: 0, inProgress: 0 };
  }

  const stats = {
    total: progress.length,
    completed: progress.filter((p) => p.status === 'completed').length,
    inProgress: progress.filter((p) => p.status === 'in_progress').length,
  };

  return stats;
}
