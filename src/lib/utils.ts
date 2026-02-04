import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Tier } from '@/lib/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function canAccessLesson(userTier: Tier, lessonTier: Tier): boolean {
  // Free lessons are always accessible
  if (lessonTier === 'free') return true;

  // All access can view everything
  if (userTier === 'all_access') return true;

  // Exact tier match required
  return userTier === lessonTier;
}
