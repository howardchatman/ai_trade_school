import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { ROUTES } from '@/lib/constants';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirectTo = requestUrl.searchParams.get('redirectTo') || ROUTES.APP;

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL(redirectTo, requestUrl.origin));
}
