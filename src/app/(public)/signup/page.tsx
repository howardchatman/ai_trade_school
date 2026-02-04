import Link from 'next/link';
import { SignupForm } from '@/components/auth/signup-form';
import { ROUTES } from '@/lib/constants';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Sign Up | AI Trade School',
  description: 'Create your AI Trade School account and start learning.',
};

const BENEFITS = [
  'Access free preview content',
  'Track your learning progress',
  'Earn certifications',
  'Join the community',
];

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="w-full max-w-4xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Start your AI journey today
            </h2>
            <ul className="space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">
                Create an account
              </h1>
              <p className="text-muted-foreground">
                Get started with a free account
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <SignupForm />
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{' '}
              <Link
                href={ROUTES.LOGIN}
                className="text-foreground hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
