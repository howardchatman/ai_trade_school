import Link from 'next/link';
import Image from 'next/image';
import { LoginForm } from '@/components/auth/login-form';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Sign In | AI Trade School',
  description: 'Sign in to your AI Trade School account.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <Image
            src="/logo-white.png"
            alt="AI Trade School"
            width={64}
            height={64}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Welcome back
          </h1>
          <p className="text-muted-foreground">
            Sign in to continue your learning journey
          </p>
        </div>

        <div className="p-8 rounded-lg border border-border bg-card">
          <LoginForm />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{' '}
          <Link
            href={ROUTES.SIGNUP}
            className="text-foreground hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
