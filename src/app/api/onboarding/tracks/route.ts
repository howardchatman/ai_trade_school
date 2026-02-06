import { NextResponse } from 'next/server';
import { getOnboardingTracks } from '@/actions/onboarding';

export async function GET() {
  const data = await getOnboardingTracks();
  return NextResponse.json(data);
}
