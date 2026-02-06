import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Courses | AI Trade School',
};

export default function BillingPage() {
  redirect(ROUTES.APP_COURSES);
}
