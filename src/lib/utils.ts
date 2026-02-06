import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function canAccessCourse(trackPriceCents: number, purchasedTrackIds: string[], trackId: string): boolean {
  // Free courses are accessible to all logged-in users
  if (trackPriceCents === 0) return true;

  // Paid courses require a purchase
  return purchasedTrackIds.includes(trackId);
}

export function formatPrice(priceCents: number): string {
  if (priceCents === 0) return 'Free';
  return `$${(priceCents / 100).toFixed(0)}`;
}
