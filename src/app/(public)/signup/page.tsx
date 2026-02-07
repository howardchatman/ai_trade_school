import Link from 'next/link';
import Image from 'next/image';
import { SignupForm } from '@/components/auth/signup-form';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Sign Up | AI Trade School',
  description: 'Create your AI Trade School account and start learning.',
};

export default function SignupPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-24 px-4">
      {/* Full background image */}
      <Image
        src="/signin_image.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Form card */}
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
            Create an account
          </h1>
          <p className="text-slate-300">
            Get started with a free account
          </p>
        </div>

        <div className="p-8 rounded-lg border border-white/10 bg-white/95 backdrop-blur-sm">
          <SignupForm />
        </div>

        <p className="text-center text-sm text-slate-300 mt-6">
          Already have an account?{' '}
          <Link
            href={ROUTES.LOGIN}
            className="text-white hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
