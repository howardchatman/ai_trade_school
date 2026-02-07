'use client';

import { useEffect, useState } from 'react';
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

export function LeadCapturePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, '1');
  }

  return (
    <Dialog open={open} onOpenChange={(value) => { if (!value) dismiss(); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get free AI tips and course updates</DialogTitle>
          <DialogDescription>
            Join our list. No spam. Unsubscribe anytime.
          </DialogDescription>
        </DialogHeader>
        <LeadCaptureForm
          source="popup"
          buttonText="Join"
          placeholder="you@example.com"
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
