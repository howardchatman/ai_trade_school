import Link from 'next/link';
import { getUser } from '@/actions/auth';
import { getUserPurchasedTrackIds } from '@/actions/purchases';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';
import { createClient } from '@/lib/supabase/server';
import { BookOpen, CheckCircle, ShoppingCart, ArrowRight } from 'lucide-react';
import type { Track } from '@/types';

export const metadata = {
  title: 'Courses | AI Trade School',
};

export default async function CoursesPage() {
  const userData = await getUser();
  if (!userData?.profile) return null;

  const supabase = await createClient();
  const { data: tracks } = await supabase
    .from('tracks')
    .select(`
      *,
      modules (
        id,
        lessons (id)
      )
    `)
    .eq('is_published', true)
    .order('sort_order');

  const purchasedTrackIds = await getUserPurchasedTrackIds(userData.profile.id);

  const allTracks = (tracks || []) as (Track & { modules: { id: string; lessons: { id: string }[] }[] })[];
  const ownedTracks = allTracks.filter(t => t.price_cents === 0 || purchasedTrackIds.includes(t.id));
  const availableTracks = allTracks.filter(t => t.price_cents > 0 && !purchasedTrackIds.includes(t.id));

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Course Catalog
        </h1>
        <p className="text-muted-foreground">
          Browse and purchase courses. All purchases are one-time with lifetime access.
        </p>
      </div>

      {/* Your Courses */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
        <div className="grid gap-4">
          {ownedTracks.map((track) => {
            const lessonCount = track.modules?.reduce(
              (acc, m) => acc + (m.lessons?.length || 0), 0
            ) || 0;

            return (
              <Card key={track.id}>
                <CardContent className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{track.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {lessonCount} lessons
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">
                      {track.price_cents === 0 ? 'Free' : 'Owned'}
                    </Badge>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={ROUTES.APP_TRACK(track.slug)}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          {ownedTracks.length === 0 && (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No courses yet. Browse available courses below.
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Available Courses */}
      {availableTracks.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
          <div className="grid gap-6">
            {availableTracks.map((track) => {
              const lessonCount = track.modules?.reduce(
                (acc, m) => acc + (m.lessons?.length || 0), 0
              ) || 0;

              return (
                <Card key={track.id} className="border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{track.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {track.description}
                        </CardDescription>
                      </div>
                      <Badge className="text-lg px-3 py-1">
                        {formatPrice(track.price_cents)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {lessonCount} lessons &middot; Lifetime access
                      </span>
                      <form action="/api/stripe/checkout" method="POST">
                        <input type="hidden" name="trackId" value={track.id} />
                        <Button>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Buy Course
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
