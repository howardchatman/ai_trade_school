export const TIERS = {
  FREE: 'free',
  OPERATOR: 'operator',
  BUILDER: 'builder',
  ALL_ACCESS: 'all_access',
} as const;

export type Tier = typeof TIERS[keyof typeof TIERS];

export const TIER_LABELS: Record<Tier, string> = {
  free: 'Free',
  operator: 'Operator',
  builder: 'Builder',
  all_access: 'All Access',
};

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

export const STRIPE_PRICES = {
  OPERATOR: process.env.NEXT_PUBLIC_STRIPE_PRICE_OPERATOR!,
  BUILDER: process.env.NEXT_PUBLIC_STRIPE_PRICE_BUILDER!,
  ALL_ACCESS: process.env.NEXT_PUBLIC_STRIPE_PRICE_ALL_ACCESS!,
};

export const PRICE_TO_TIER: Record<string, Tier> = {
  [STRIPE_PRICES.OPERATOR]: 'operator',
  [STRIPE_PRICES.BUILDER]: 'builder',
  [STRIPE_PRICES.ALL_ACCESS]: 'all_access',
};

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
  APP_BILLING: '/app/settings/billing',
  ADMIN: '/admin',
  ADMIN_TRACKS: '/admin/tracks',
  ADMIN_MODULES: '/admin/modules',
  ADMIN_LESSONS: '/admin/lessons',
  ADMIN_USERS: '/admin/users',
} as const;
