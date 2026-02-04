import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getUser } from '@/actions/auth';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUser();
  const isAuthenticated = !!userData?.user;

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
