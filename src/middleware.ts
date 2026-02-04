import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';
import { ROUTES } from '@/lib/constants';

// Routes that require authentication
const PROTECTED_ROUTES = ['/app'];

// Routes that require admin role
const ADMIN_ROUTES = ['/admin'];

// Routes that should redirect to /app if authenticated
const AUTH_ROUTES = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const { supabaseResponse, user, supabase } = await updateSession(request);

  const pathname = request.nextUrl.pathname;

  // Check if the route is protected
  const isProtectedRoute = PROTECTED_ROUTES.some(route =>
    pathname.startsWith(route)
  );

  // Check if the route is admin-only
  const isAdminRoute = ADMIN_ROUTES.some(route =>
    pathname.startsWith(route)
  );

  // Check if it's an auth route (login/signup)
  const isAuthRoute = AUTH_ROUTES.some(route =>
    pathname.startsWith(route)
  );

  // Redirect unauthenticated users from protected routes to login
  if ((isProtectedRoute || isAdminRoute) && !user) {
    const redirectUrl = new URL(ROUTES.LOGIN, request.url);
    redirectUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect authenticated users from auth routes to app
  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL(ROUTES.APP, request.url));
  }

  // Check admin access for admin routes
  if (isAdminRoute && user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.redirect(new URL(ROUTES.APP, request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
