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
    <div className="min-h-screen flex">
      {/* Left: Image (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/signin_image.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col justify-end p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">
            AI is the new skilled trade.
          </h2>
          <p className="text-slate-300 max-w-sm leading-relaxed">
            Learn practical AI skills you can use right now — no fluff, no prerequisites.
          </p>
        </div>
      </div>

      {/* Right: Signup form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Image
              src="/logo-black.png"
              alt="AI Trade School"
              width={64}
              height={64}
              className="mx-auto mb-4 rounded-full"
            />
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
  );
}
