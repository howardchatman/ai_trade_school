'use client';

import { useState } from 'react';
import { signIn, signInWithMagicLink } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMagicLink, setShowMagicLink] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const result = await signIn(formData);
    if (result?.error) {
      toast.error(result.error);
    }
    setIsLoading(false);
  }

  async function handleMagicLink(formData: FormData) {
    setIsLoading(true);
    const result = await signInWithMagicLink(formData);
    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success(result.message);
    }
    setIsLoading(false);
  }

  if (showMagicLink) {
    return (
      <div className="space-y-6">
        <form action={handleMagicLink} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Magic Link'}
          </Button>
        </form>
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowMagicLink(false)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Sign in with password instead
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form action={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            disabled={isLoading}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <div className="relative">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
          or
        </span>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => setShowMagicLink(true)}
      >
        Sign in with Magic Link
      </Button>
    </div>
  );
}
