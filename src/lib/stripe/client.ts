import Stripe from 'stripe';

// Only initialize Stripe if the secret key is available
// This prevents build errors when env vars are not set
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2026-01-28.clover',
      typescript: true,
    })
  : (null as unknown as Stripe);
