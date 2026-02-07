import type { Role, ProgressStatus, CertificationStatus } from '@/lib/constants';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: Role;
  stripe_customer_id: string | null;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Track {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  sort_order: number;
  is_published: boolean;
  price_cents: number;
  stripe_price_id: string | null;
  price_label: string | null;
  created_at: string;
  updated_at: string;
  modules?: Module[];
}

export interface Module {
  id: string;
  track_id: string;
  title: string;
  description: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  track?: Track;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  module_id: string;
  slug: string;
  title: string;
  summary: string | null;
  content_md: string | null;
  video_url: string | null;
  duration_minutes: number | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  module?: Module;
  progress?: Progress;
}

export interface Progress {
  id: string;
  user_id: string;
  lesson_id: string;
  status: ProgressStatus;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  requirements_json: {
    required_lesson_ids: string[];
  } | null;
  created_at: string;
  updated_at: string;
}

export interface UserCertification {
  id: string;
  user_id: string;
  certification_id: string;
  status: CertificationStatus;
  earned_at: string | null;
  created_at: string;
  certification?: Certification;
}

export interface Purchase {
  id: string;
  user_id: string;
  track_id: string;
  stripe_payment_intent_id: string | null;
  stripe_checkout_session_id: string | null;
  amount_cents: number;
  status: 'pending' | 'completed' | 'refunded';
  purchased_at: string;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  email: string;
  source: string;
  created_at: string;
}

export interface UserWithProfile {
  id: string;
  email: string;
  profile: Profile;
}
