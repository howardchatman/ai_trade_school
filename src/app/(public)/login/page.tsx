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
    <div className="relative min-h-screen flex items-center justify-center py-24 px-4">
      <Image
        src="/login_image.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/logo-white.png"
            alt="AI Trade School"
            width={64}
            height={64}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-3xl font-semibold tracking-tight mb-2 text-white">
            Welcome back
          </h1>
          <p className="text-slate-300">
            Sign in to continue your learning journey
          </p>
        </div>

        <div className="p-8 rounded-lg border border-white/10 bg-white/95 backdrop-blur-sm">
          <LoginForm />
        </div>

        <p className="text-center text-sm text-slate-300 mt-6">
          Don&apos;t have an account?{' '}
          <Link
            href={ROUTES.SIGNUP}
            className="text-white hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
