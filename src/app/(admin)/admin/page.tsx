import Link from 'next/link';
import { getAdminStats } from '@/actions/admin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants';
import { Users, Layers, FileText, ShoppingCart, ArrowRight } from 'lucide-react';
import type { Profile } from '@/types';

export const metadata = {
  title: 'Admin Dashboard | AI Trade School',
};

export default async function AdminPage() {
  const stats = await getAdminStats();

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your content, users, and settings.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Users</CardDescription>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-3xl">{stats.usersCount}</CardTitle>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Courses</CardDescription>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-3xl">{stats.tracksCount}</CardTitle>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Lessons</CardDescription>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-3xl">{stats.lessonsCount}</CardTitle>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Purchases</CardDescription>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-3xl">{stats.purchasesCount}</CardTitle>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link
          href={ROUTES.ADMIN_TRACKS}
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">Manage Tracks</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
        <Link
          href={ROUTES.ADMIN_MODULES}
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">Manage Modules</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
        <Link
          href={ROUTES.ADMIN_LESSONS}
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">Manage Lessons</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
        <Link
          href={ROUTES.ADMIN_USERS}
          className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">Manage Users</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>

      {/* Recent Users */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
          <CardDescription>Latest signups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.recentUsers.map((user: Profile) => (
              <div
                key={user.id}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-medium">
                    {user.full_name || 'No name'}
                  </p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm capitalize">{user.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {stats.recentUsers.length === 0 && (
              <p className="text-muted-foreground text-center py-4">
                No users yet
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
