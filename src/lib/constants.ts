export const ROLES = {
  STUDENT: 'student',
  ADMIN: 'admin',
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const PROGRESS_STATUS = {
  NOT_STARTED: 'not_started',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
} as const;

export type ProgressStatus = typeof PROGRESS_STATUS[keyof typeof PROGRESS_STATUS];

export const CERTIFICATION_STATUS = {
  NOT_STARTED: 'not_started',
  IN_PROGRESS: 'in_progress',
  EARNED: 'earned',
} as const;

export type CertificationStatus = typeof CERTIFICATION_STATUS[keyof typeof CERTIFICATION_STATUS];

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  TRACKS: '/tracks',
  CERTIFICATIONS: '/certifications',
  FOUNDERS: '/founders',
  APP: '/app',
  APP_TRACK: (slug: string) => `/app/track/${slug}`,
  APP_LESSON: (slug: string) => `/app/lesson/${slug}`,
  APP_CERTIFICATIONS: '/app/certifications',
  APP_COURSES: '/app/courses',
  APP_ONBOARDING: '/app/onboarding',
  ADMIN: '/admin',
  ADMIN_TRACKS: '/admin/tracks',
  ADMIN_MODULES: '/admin/modules',
  ADMIN_LESSONS: '/admin/lessons',
  ADMIN_USERS: '/admin/users',
} as const;
