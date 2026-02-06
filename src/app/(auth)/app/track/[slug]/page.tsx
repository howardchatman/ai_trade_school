import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUser } from '@/actions/auth';
import { getTrackBySlug } from '@/actions/tracks';
import { getUserPurchasedTrackIds } from '@/actions/purchases';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/lib/constants';
import { canAccessCourse, formatPrice } from '@/lib/utils';
import { createClient } from '@/lib/supabase/server';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Lock,
  Play,
  Clock,
  ShoppingCart,
} from 'lucide-react';
import type { Lesson, Module } from '@/types';

interface TrackPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TrackPageProps) {
  const { slug } = await params;
  const track = await getTrackBySlug(slug);
  return {
    title: track ? `${track.title} | AI Trade School` : 'Track Not Found',
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { slug } = await params;
  const userData = await getUser();
  if (!userData?.profile) return null;

  const track = await getTrackBySlug(slug);
  if (!track) notFound();

  const supabase = await createClient();
  const { data: progress } = await supabase
    .from('progress')
    .select('lesson_id, status')
    .eq('user_id', userData.profile.id);

  const progressMap = new Map(
    (progress || []).map((p) => [p.lesson_id, p.status])
  );

  const purchasedTrackIds = await getUserPurchasedTrackIds(userData.profile.id);
  const hasAccess = canAccessCourse(track.price_cents, purchasedTrackIds, track.id);

  return (
    <div className="p-6 lg:p-8">
      {/* Back Navigation */}
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href={ROUTES.APP}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>

      {/* Track Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-lg bg-secondary">
            <BookOpen className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{track.title}</h1>
            <p className="text-muted-foreground mt-1">{track.description}</p>
          </div>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{track.modules?.length || 0} modules</span>
          <span>
            {track.modules?.reduce((acc: number, m: { lessons?: unknown[] }) => acc + (m.lessons?.length || 0), 0) || 0} lessons
          </span>
          <Badge variant="secondary">{formatPrice(track.price_cents)}</Badge>
        </div>
      </div>

      {/* Purchase CTA for unpurchased paid courses */}
      {!hasAccess && track.price_cents > 0 && (
        <Card className="mb-8 border-primary">
          <CardContent className="py-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-lg">Unlock this course</p>
              <p className="text-muted-foreground">
                One-time purchase — full lifetime access
              </p>
            </div>
            <form action="/api/stripe/checkout" method="POST">
              <input type="hidden" name="trackId" value={track.id} />
              <Button size="lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Buy Course — {formatPrice(track.price_cents)}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Modules List */}
      <div className="space-y-6">
        {track.modules
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((module: Module & { lessons: Lesson[] }, moduleIndex) => (
            <Card key={module.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Module {moduleIndex + 1}</Badge>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </div>
                {module.description && (
                  <CardDescription>{module.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.lessons
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map((lesson, lessonIndex) => {
                      const status = progressMap.get(lesson.id);
                      const isCompleted = status === 'completed';
                      const isInProgress = status === 'in_progress';

                      return (
                        <li key={lesson.id}>
                          <Link
                            href={
                              hasAccess
                                ? ROUTES.APP_LESSON(lesson.slug)
                                : '#'
                            }
                            className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
                              hasAccess
                                ? 'hover:bg-secondary/50 border-border'
                                : 'border-border/50 opacity-60 cursor-not-allowed'
                            }`}
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                              {isCompleted ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : !hasAccess ? (
                                <Lock className="h-4 w-4" />
                              ) : isInProgress ? (
                                <Play className="h-4 w-4" />
                              ) : (
                                <span className="text-sm text-muted-foreground">
                                  {lessonIndex + 1}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">{lesson.title}</p>
                              {lesson.summary && (
                                <p className="text-sm text-muted-foreground truncate">
                                  {lesson.summary}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              {lesson.duration_minutes && (
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {lesson.duration_minutes}m
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
