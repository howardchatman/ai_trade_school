'use client';

import { useEffect, useState } from 'react';
import { getAdminUsers, updateUserRole, updateUserTier } from '@/actions/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Users } from 'lucide-react';
import { TIER_LABELS } from '@/lib/constants';
import type { Profile } from '@/types';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setIsLoading(true);
    const data = await getAdminUsers();
    setUsers(data);
    setIsLoading(false);
  }

  async function handleRoleChange(userId: string, role: 'student' | 'admin') {
    const result = await updateUserRole(userId, role);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Role updated');
      loadUsers();
    }
  }

  async function handleTierChange(userId: string, tier: string) {
    const result = await updateUserTier(userId, tier);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Tier updated');
      loadUsers();
    }
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Users</h1>
        <p className="text-muted-foreground">
          Manage user roles and subscription tiers
        </p>
      </div>

      {/* Users List */}
      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : users.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No users yet</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Users ({users.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">User</th>
                    <th className="text-left py-3 px-4 font-medium">Role</th>
                    <th className="text-left py-3 px-4 font-medium">Tier</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border last:border-0">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">
                            {user.full_name || 'No name'}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Select
                          value={user.role}
                          onValueChange={(value) =>
                            handleRoleChange(user.id, value as 'student' | 'admin')
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="py-3 px-4">
                        <Select
                          value={user.tier}
                          onValueChange={(value) => handleTierChange(user.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="free">Free</SelectItem>
                            <SelectItem value="operator">Operator</SelectItem>
                            <SelectItem value="builder">Builder</SelectItem>
                            <SelectItem value="all_access">All Access</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="py-3 px-4">
                        {user.stripe_subscription_status ? (
                          <Badge
                            variant={
                              user.stripe_subscription_status === 'active'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {user.stripe_subscription_status}
                          </Badge>
                        ) : (
                          <Badge variant="outline">No subscription</Badge>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
