'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import type { Certification, UserCertification } from '@/types';

export async function getCertifications() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('certifications')
    .select('*')
    .order('created_at');

  if (error) {
    console.error('Error fetching certifications:', error);
    return [];
  }

  return data as Certification[];
}

export async function getUserCertifications(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('user_certifications')
    .select(`
      *,
      certification:certifications (*)
    `)
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching user certifications:', error);
    return [];
  }

  return data as (UserCertification & { certification: Certification })[];
}

export async function getCertificationsWithProgress(userId: string) {
  const supabase = await createClient();

  // Get all certifications
  const { data: certifications, error: certError } = await supabase
    .from('certifications')
    .select('*')
    .order('created_at');

  if (certError) {
    console.error('Error fetching certifications:', certError);
    return [];
  }

  // Get user's certification progress
  const { data: userCerts, error: userCertError } = await supabase
    .from('user_certifications')
    .select('*')
    .eq('user_id', userId);

  if (userCertError) {
    console.error('Error fetching user certifications:', userCertError);
  }

  // Get user's lesson progress for requirement checking
  const { data: progress } = await supabase
    .from('progress')
    .select('lesson_id, status')
    .eq('user_id', userId)
    .eq('status', 'completed');

  const completedLessons = new Set(
    (progress || []).map((p) => p.lesson_id)
  );

  const userCertMap = new Map(
    (userCerts || []).map((uc) => [uc.certification_id, uc])
  );

  // Merge and calculate progress
  return certifications.map((cert) => {
    const userCert = userCertMap.get(cert.id);
    const requirements = cert.requirements_json as { required_lesson_ids: string[] } | null;
    const requiredLessons = requirements?.required_lesson_ids || [];
    const completedCount = requiredLessons.filter((id) =>
      completedLessons.has(id)
    ).length;

    return {
      ...cert,
      userCertification: userCert || null,
      progress: {
        total: requiredLessons.length,
        completed: completedCount,
        percentage:
          requiredLessons.length > 0
            ? Math.round((completedCount / requiredLessons.length) * 100)
            : 0,
      },
    };
  });
}

export async function checkAndUpdateCertification(
  userId: string,
  certificationId: string
) {
  const supabase = await createClient();

  // Get certification requirements
  const { data: cert, error: certError } = await supabase
    .from('certifications')
    .select('requirements_json')
    .eq('id', certificationId)
    .single();

  if (certError || !cert) {
    return { error: 'Certification not found' };
  }

  const requirements = cert.requirements_json as { required_lesson_ids: string[] } | null;
  const requiredLessons = requirements?.required_lesson_ids || [];

  if (requiredLessons.length === 0) {
    return { error: 'No requirements defined' };
  }

  // Check if user has completed all required lessons
  const { data: progress } = await supabase
    .from('progress')
    .select('lesson_id')
    .eq('user_id', userId)
    .eq('status', 'completed')
    .in('lesson_id', requiredLessons);

  const completedCount = progress?.length || 0;
  const allCompleted = completedCount === requiredLessons.length;

  if (allCompleted) {
    // Award the certification
    const { error: upsertError } = await supabase
      .from('user_certifications')
      .upsert(
        {
          user_id: userId,
          certification_id: certificationId,
          status: 'earned',
          earned_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id,certification_id',
        }
      );

    if (upsertError) {
      return { error: upsertError.message };
    }

    revalidatePath('/app/certifications');
    return { success: true, earned: true };
  }

  // Update to in_progress if not already
  const { error: upsertError } = await supabase
    .from('user_certifications')
    .upsert(
      {
        user_id: userId,
        certification_id: certificationId,
        status: 'in_progress',
      },
      {
        onConflict: 'user_id,certification_id',
      }
    );

  if (upsertError) {
    return { error: upsertError.message };
  }

  revalidatePath('/app/certifications');
  return { success: true, earned: false };
}
