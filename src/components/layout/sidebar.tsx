'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import {
  LayoutDashboard,
  BookOpen,
  Award,
  ShoppingBag,
  LogOut,
} from 'lucide-react';
import { signOut } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import type { Profile } from '@/types';

const SIDEBAR_LINKS = [
  { href: ROUTES.APP, label: 'Dashboard', icon: LayoutDashboard },
  { href: ROUTES.APP + '/tracks', label: 'My Tracks', icon: BookOpen },
  { href: ROUTES.APP_CERTIFICATIONS, label: 'Certifications', icon: Award },
  { href: ROUTES.APP_COURSES, label: 'Courses', icon: ShoppingBag },
];

interface SidebarProps {
  profile: Profile | null;
}

export function Sidebar({ profile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-3 text-sidebar-foreground"
        >
          <Image
            src="/logo-white.png"
            alt="AI Trade School"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-wide uppercase font-[family-name:var(--font-playfair)]">
            AI Trade School
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-sidebar-border">
        {profile && (
          <div className="mb-4 px-3">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {profile.full_name || profile.email}
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              {profile.email}
            </p>
          </div>
        )}
        <form action={signOut}>
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Sign Out
          </Button>
        </form>
      </div>
    </aside>
  );
}
