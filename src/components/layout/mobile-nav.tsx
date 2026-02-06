'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import { LayoutDashboard, BookOpen, Award, ShoppingCart } from 'lucide-react';

const NAV_ITEMS = [
  { href: ROUTES.APP, label: 'Home', icon: LayoutDashboard },
  { href: ROUTES.APP + '/tracks', label: 'Tracks', icon: BookOpen },
  { href: ROUTES.APP_CERTIFICATIONS, label: 'Certs', icon: Award },
  { href: ROUTES.APP_COURSES, label: 'Courses', icon: ShoppingCart },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
      <div className="flex items-center justify-around h-16">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 transition-colors',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
