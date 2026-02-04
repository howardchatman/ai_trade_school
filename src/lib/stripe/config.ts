import { STRIPE_PRICES, PRICE_TO_TIER, type Tier } from '@/lib/constants';

export function getPriceIdForTier(tier: Tier): string | null {
  switch (tier) {
    case 'operator':
      return STRIPE_PRICES.OPERATOR;
    case 'builder':
      return STRIPE_PRICES.BUILDER;
    case 'all_access':
      return STRIPE_PRICES.ALL_ACCESS;
    default:
      return null;
  }
}

export function getTierFromPriceId(priceId: string): Tier | null {
  return PRICE_TO_TIER[priceId] || null;
}

export const PLAN_DETAILS = {
  operator: {
    name: 'Operator',
    description: 'Learn to operate AI tools effectively',
    features: [
      'Full access to Operator track',
      'Hands-on AI tool training',
      'Operator certification',
      'Community access',
    ],
    price: '$49/month',
    priceId: STRIPE_PRICES.OPERATOR,
  },
  builder: {
    name: 'Builder',
    description: 'Build custom AI solutions',
    features: [
      'Full access to Builder track',
      'Technical AI development training',
      'Builder certification',
      'Community access',
    ],
    price: '$99/month',
    priceId: STRIPE_PRICES.BUILDER,
  },
  all_access: {
    name: 'All Access',
    description: 'Complete access to everything',
    features: [
      'Access to all tracks',
      'All certifications',
      'Priority support',
      'Early access to new content',
      'Community leadership',
    ],
    price: '$149/month',
    priceId: STRIPE_PRICES.ALL_ACCESS,
  },
} as const;
