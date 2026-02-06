import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getUser } from '@/actions/auth';
import { getLessonWithProgress, getAdjacentLessons } from '@/actions/lessons';
import { getUserPurchasedTrackIds } from '@/actions/purchases';
import { canAccessCourse } from '@/lib/utils';
import { markLessonComplete, markLessonInProgress } from '@/actions/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Play,
} from 'lucide-react';

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { slug } = await params;
  const supabase = await (await import('@/lib/supabase/server')).createClient();
  const { data: lesson } = await supabase
    .from('lessons')
    .select('title')
    .eq('slug', slug)
    .single();

  return {
    title: lesson ? `${lesson.title} | AI Trade School` : 'Lesson Not Found',
  };
}

// Mark lesson as in progress when viewing
async function markAsViewing(lessonId: string, currentStatus: string | undefined) {
  'use server';
  if (!currentStatus || currentStatus === 'not_started') {
    await markLessonInProgress(lessonId);
  }
}

// Complete lesson action
async function completeLesson(lessonId: string) {
  'use server';
  await markLessonComplete(lessonId);
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const userData = await getUser();
  if (!userData?.profile) return null;

  const lesson = await getLessonWithProgress(slug, userData.profile.id);
  if (!lesson) notFound();

  const track = lesson.module?.track;
  const trackId = track?.id;
  const trackPriceCents = track?.price_cents ?? 0;

  // Check access based on course purchase
  const purchasedTrackIds = await getUserPurchasedTrackIds(userData.profile.id);
  const hasAccess = trackId
    ? canAccessCourse(trackPriceCents, purchasedTrackIds, trackId)
    : true;

  // Redirect to track page if no access (shows purchase CTA)
  if (!hasAccess && track) {
    redirect(ROUTES.APP_TRACK(track.slug));
  }

  // Mark as viewing
  await markAsViewing(lesson.id, lesson.progress?.status);

  const adjacent = await getAdjacentLessons(lesson.module_id, lesson.sort_order);
  const isCompleted = lesson.progress?.status === 'completed';

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Back Navigation */}
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href={ROUTES.APP_TRACK(lesson.module.track.slug)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {lesson.module.track.title}
        </Link>
      </Button>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{lesson.module.track.title}</span>
          <span>/</span>
          <span>{lesson.module.title}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          {lesson.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {lesson.duration_minutes && (
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {lesson.duration_minutes} minutes
            </span>
          )}
          {isCompleted && (
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <CheckCircle className="mr-1 h-3 w-3" />
              Completed
            </Badge>
          )}
        </div>
      </div>

      {/* Video (if available) */}
      {lesson.video_url && (
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-secondary flex items-center justify-center">
              <iframe
                src={lesson.video_url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lesson Content */}
      <div className="prose prose-invert max-w-none mb-8">
        {lesson.summary && (
          <p className="text-lg text-muted-foreground mb-6">{lesson.summary}</p>
        )}
        {lesson.content_md ? (
          <div
            className="space-y-4"
            dangerouslySetInnerHTML={{
              __html: lesson.content_md
                .split('\n\n')
                .map((p) => `<p>${p}</p>`)
                .join(''),
            }}
          />
        ) : (
          <div className="py-12 text-center text-muted-foreground">
            <Play className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Lesson content coming soon...</p>
          </div>
        )}
      </div>

      {/* Complete Button */}
      {!isCompleted && (
        <form action={completeLesson.bind(null, lesson.id)}>
          <Button size="lg" className="w-full mb-8">
            <CheckCircle className="mr-2 h-5 w-5" />
            Mark as Complete
          </Button>
        </form>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-border">
        {adjacent.previous ? (
          <Button variant="outline" asChild>
            <Link href={ROUTES.APP_LESSON(adjacent.previous.slug)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: {adjacent.previous.title}
            </Link>
          </Button>
        ) : (
          <div />
        )}
        {adjacent.next ? (
          <Button asChild>
            <Link href={ROUTES.APP_LESSON(adjacent.next.slug)}>
              Next: {adjacent.next.title}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link href={ROUTES.APP_TRACK(lesson.module.track.slug)}>
              Back to Track
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
