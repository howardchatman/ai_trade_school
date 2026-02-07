'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { LeadCaptureForm } from '@/components/lead-capture-form';

const STORAGE_KEY = 'ats_popup_dismissed';
const DISMISS_DAYS = 7;

function isDismissed(): boolean {
  if (typeof window === 'undefined') return true;
  const dismissed = localStorage.getItem(STORAGE_KEY);
  if (!dismissed) return false;
  const dismissedAt = parseInt(dismissed, 10);
  if (isNaN(dismissedAt)) return false;
  const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
  return daysSince < DISMISS_DAYS;
}

export function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const trigger = useCallback(() => {
    if (triggered) return;
    setTriggered(true);
    setOpen(true);
  }, [triggered]);

  function dismiss() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isDismissed()) return;

    // Trigger 1: 30 seconds on page
    const timer = setTimeout(trigger, 30000);

    // Trigger 2: 50% scroll depth
    function handleScroll() {
      const scrollPercent =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.5) {
        trigger();
      }
    }

    // Trigger 3: Exit intent (mouse leaves viewport at the top)
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        trigger();
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [trigger]);

  return (
    <Dialog open={open} onOpenChange={(value) => { if (!value) dismiss(); }}>
      <DialogContent className="sm:max-w-md" aria-label="Email signup">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Get Practical AI Skills — Free
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground pt-1 leading-relaxed">
            Short lessons, tools, and walkthroughs showing how AI is actually
            used in real work.
            <br />
            No hype. No spam. Just useful skills.
          </DialogDescription>
        </DialogHeader>
        <LeadCaptureForm
          source="popup"
          buttonText="Get Free Lessons"
          placeholder="you@email.com"
          variant="popup"
          onSuccess={dismiss}
        />
        <DialogClose asChild>
          <button
            type="button"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors mx-auto"
            onClick={dismiss}
          >
            No thanks
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
