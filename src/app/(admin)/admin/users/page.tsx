'use client';

import { useEffect, useState } from 'react';
import { getAdminUsers, updateUserRole, grantCourseAccess, revokeCourseAccess, getAdminTracks_Simple, getUserPurchases_Admin } from '@/actions/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Users, Plus, X } from 'lucide-react';
import type { Profile } from '@/types';

interface SimpleTrack {
  id: string;
  title: string;
  price_cents: number;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [tracks, setTracks] = useState<SimpleTrack[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [grantingUser, setGrantingUser] = useState<string | null>(null);
  const [userPurchases, setUserPurchases] = useState<Record<string, string[]>>({});

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    const [usersData, tracksData] = await Promise.all([
      getAdminUsers(),
      getAdminTracks_Simple(),
    ]);
    setUsers(usersData);
    setTracks(tracksData);
    setIsLoading(false);
  }

  async function handleRoleChange(userId: string, role: 'student' | 'admin') {
    const result = await updateUserRole(userId, role);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Role updated');
      loadData();
    }
  }

  async function loadUserPurchases(userId: string) {
    const purchasedTrackIds = await getUserPurchases_Admin(userId);
    setUserPurchases((prev) => ({ ...prev, [userId]: purchasedTrackIds }));
    setGrantingUser(userId);
  }

  async function handleGrantAccess(userId: string, trackId: string) {
    const result = await grantCourseAccess(userId, trackId);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Course access granted');
      loadUserPurchases(userId);
    }
  }

  async function handleRevokeAccess(userId: string, trackId: string) {
    const result = await revokeCourseAccess(userId, trackId);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Course access revoked');
      loadUserPurchases(userId);
    }
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Users</h1>
        <p className="text-muted-foreground">
          Manage user roles and course access
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
                    <th className="text-left py-3 px-4 font-medium">Courses</th>
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
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => loadUserPurchases(user.id)}
                            >
                              <Plus className="mr-1 h-3 w-3" />
                              Manage Access
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Course Access — {user.full_name || user.email}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-3">
                              {tracks.filter((t) => t.price_cents > 0).map((track) => {
                                const hasAccess = userPurchases[user.id]?.includes(track.id);
                                return (
                                  <div
                                    key={track.id}
                                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                                  >
                                    <div>
                                      <p className="font-medium">{track.title}</p>
                                      <p className="text-sm text-muted-foreground">
                                        ${track.price_cents / 100}
                                      </p>
                                    </div>
                                    {hasAccess ? (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleRevokeAccess(user.id, track.id)}
                                      >
                                        <X className="mr-1 h-3 w-3" />
                                        Revoke
                                      </Button>
                                    ) : (
                                      <Button
                                        size="sm"
                                        onClick={() => handleGrantAccess(user.id, track.id)}
                                      >
                                        <Plus className="mr-1 h-3 w-3" />
                                        Grant
                                      </Button>
                                    )}
                                  </div>
                                );
                              })}
                              {tracks.filter((t) => t.price_cents > 0).length === 0 && (
                                <p className="text-muted-foreground text-center py-4">
                                  No paid courses to manage
                                </p>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
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
