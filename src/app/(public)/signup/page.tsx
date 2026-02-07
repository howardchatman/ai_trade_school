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
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15" />
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
