import { redirect } from 'next/navigation';
import { getUser } from '@/actions/auth';
import { Sidebar } from '@/components/layout/sidebar';
import { MobileNav } from '@/components/layout/mobile-nav';
import { ROUTES } from '@/lib/constants';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUser();

  if (!userData?.user || !userData?.profile) {
    redirect(ROUTES.LOGIN);
  }

  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar profile={userData.profile} />
      </div>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}
