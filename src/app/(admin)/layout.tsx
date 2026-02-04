import { redirect } from 'next/navigation';
import { getUser } from '@/actions/auth';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { ROUTES } from '@/lib/constants';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUser();

  if (!userData?.user || !userData?.profile) {
    redirect(ROUTES.LOGIN);
  }

  if (userData.profile.role !== 'admin') {
    redirect(ROUTES.APP);
  }

  return (
    <div className="min-h-screen">
      <AdminSidebar profile={userData.profile} />
      <main className="ml-64 min-h-screen">{children}</main>
    </div>
  );
}
