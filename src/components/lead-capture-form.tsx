'use client';

import { useState } from 'react';
import { captureEmail } from '@/actions/leads';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface LeadCaptureFormProps {
  source: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  variant?: 'default' | 'dark';
  onSuccess?: () => void;
}

export function LeadCaptureForm({
  source,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  className = '',
  variant = 'default',
  onSuccess,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const result = await captureEmail(email, source);

    if (result.success) {
      setStatus('success');
      setEmail('');
      onSuccess?.();
    } else {
      setStatus('error');
      setErrorMsg(result.error || 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 ${variant === 'dark' ? 'text-slate-300' : 'text-muted-foreground'} ${className}`}>
        <CheckCircle className="h-4 w-4 text-emerald-500" />
        <span className="text-sm">You&apos;re in! We&apos;ll be in touch.</span>
      </div>
    );
  }

  const isDark = variant === 'dark';

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={isDark ? 'bg-white/10 border-slate-600 text-white placeholder:text-slate-400' : ''}
      />
      <Button
        type="submit"
        disabled={status === 'loading'}
        className={isDark ? 'bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold shrink-0' : 'shrink-0'}
      >
        {status === 'loading' ? '...' : buttonText}
      </Button>
      {status === 'error' && (
        <p className="text-xs text-red-500 absolute -bottom-5">{errorMsg}</p>
      )}
    </form>
  );
}
