'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';
import {
  LayoutDashboard,
  Layers,
  FolderOpen,
  FileText,
  Users,
  ArrowLeft,
  LogOut,
} from 'lucide-react';
import { signOut } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import type { Profile } from '@/types';

const ADMIN_LINKS = [
  { href: ROUTES.ADMIN, label: 'Overview', icon: LayoutDashboard },
  { href: ROUTES.ADMIN_TRACKS, label: 'Tracks', icon: Layers },
  { href: ROUTES.ADMIN_MODULES, label: 'Modules', icon: FolderOpen },
  { href: ROUTES.ADMIN_LESSONS, label: 'Lessons', icon: FileText },
  { href: ROUTES.ADMIN_USERS, label: 'Users', icon: Users },
];

interface AdminSidebarProps {
  profile: Profile | null;
}

export function AdminSidebar({ profile }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link
          href={ROUTES.ADMIN}
          className="flex items-center gap-3 text-sidebar-foreground"
        >
          <Image
            src="/logo-white.png"
            alt="AI Trade School"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <span className="text-xl font-semibold tracking-tight block">
              Admin Panel
            </span>
            <span className="text-xs text-sidebar-foreground/60">
              AI Trade School
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {ADMIN_LINKS.map((link) => {
            const isActive =
              link.href === ROUTES.ADMIN
                ? pathname === link.href
                : pathname.startsWith(link.href);
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

        {/* Back to App */}
        <div className="mt-8 pt-4 border-t border-sidebar-border">
          <Link
            href={ROUTES.APP}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to App
          </Link>
        </div>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-sidebar-border">
        {profile && (
          <div className="mb-4 px-3">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {profile.full_name || profile.email}
            </p>
            <p className="text-xs text-sidebar-foreground/60">Admin</p>
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
