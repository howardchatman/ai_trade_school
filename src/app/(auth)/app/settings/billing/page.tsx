import { getUser } from '@/actions/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TIER_LABELS, ROUTES } from '@/lib/constants';
import { PLAN_DETAILS } from '@/lib/stripe/config';
import { CheckCircle, CreditCard, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Billing | AI Trade School',
};

export default async function BillingPage() {
  const userData = await getUser();
  if (!userData?.profile) return null;

  const profile = userData.profile;
  const currentTier = profile.tier;
  const hasActiveSubscription =
    profile.stripe_subscription_status === 'active' ||
    profile.stripe_subscription_status === 'trialing';

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Billing & Subscription
        </h1>
        <p className="text-muted-foreground">
          Manage your subscription and payment details.
        </p>
      </div>

      {/* Current Plan */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-semibold">{TIER_LABELS[currentTier]}</p>
              <p className="text-sm text-muted-foreground">
                {hasActiveSubscription
                  ? 'Your subscription is active'
                  : currentTier === 'free'
                  ? 'Upgrade to unlock more content'
                  : 'No active subscription'}
              </p>
            </div>
            {hasActiveSubscription && (
              <form action="/api/stripe/portal" method="POST">
                <Button variant="outline">
                  Manage Billing
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(PLAN_DETAILS).map(([tier, plan]) => {
            const isCurrentPlan = currentTier === tier;
            return (
              <Card
                key={tier}
                className={isCurrentPlan ? 'border-foreground' : ''}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                    {isCurrentPlan && (
                      <Badge>Current</Badge>
                    )}
                  </div>
                  <p className="text-2xl font-semibold">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {!isCurrentPlan && (
                    <form action="/api/stripe/checkout" method="POST">
                      <input type="hidden" name="priceId" value={plan.priceId} />
                      <Button className="w-full">
                        {currentTier === 'free' ? 'Subscribe' : 'Switch Plan'}
                      </Button>
                    </form>
                  )}
                  {isCurrentPlan && hasActiveSubscription && (
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Billing History Link */}
      {hasActiveSubscription && (
        <Card>
          <CardContent className="py-6">
            <p className="text-muted-foreground mb-4">
              Need to view your invoices or update your payment method?
            </p>
            <form action="/api/stripe/portal" method="POST">
              <Button variant="outline">
                Open Billing Portal
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
