import Link from 'next/link';
import { getUser } from '@/actions/auth';
import { getTracksWithProgress } from '@/actions/tracks';
import { getProgressStats } from '@/actions/progress';
import { getCertificationsWithProgress } from '@/actions/certifications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ROUTES, TIER_LABELS } from '@/lib/constants';
import { canAccessLesson } from '@/lib/utils';
import { BookOpen, Award, ArrowRight, Lock, CheckCircle, Play } from 'lucide-react';
import type { Lesson, Module, Track } from '@/types';

// Custom Progress component since shadcn might not have it
function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={`h-2 w-full bg-secondary rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-foreground transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export default async function DashboardPage() {
  const userData = await getUser();
  if (!userData?.profile) return null;

  const [tracks, stats, certifications] = await Promise.all([
    getTracksWithProgress(userData.profile.id),
    getProgressStats(userData.profile.id),
    getCertificationsWithProgress(userData.profile.id),
  ]);

  const tier = userData.profile.tier;

  return (
    <div className="p-6 lg:p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Welcome back{userData.profile.full_name ? `, ${userData.profile.full_name.split(' ')[0]}` : ''}
        </h1>
        <p className="text-muted-foreground">
          Continue your learning journey. You're making great progress.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Lessons Started</CardDescription>
            <CardTitle className="text-3xl">{stats.total}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-3xl">{stats.completed}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Your Plan</CardDescription>
            <CardTitle className="text-3xl">{TIER_LABELS[tier]}</CardTitle>
          </CardHeader>
          <CardContent>
            {tier === 'free' && (
              <Button size="sm" variant="outline" asChild>
                <Link href={ROUTES.APP_BILLING}>Upgrade</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Active Tracks */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Tracks</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.TRACKS}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {tracks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {tracks.map((track) => {
              const modules = track.modules || [];
              const totalLessons = modules.reduce(
                (acc: number, m: { lessons?: { id: string }[] }) => acc + (m.lessons?.length || 0),
                0
              );
              const completedLessons = modules.reduce(
                (acc: number, m: { lessons?: { progress?: { status: string } | null }[] }) =>
                  acc +
                  (m.lessons?.filter((l) => l.progress?.status === 'completed').length || 0),
                0
              );
              const progressPercentage =
                totalLessons > 0
                  ? Math.round((completedLessons / totalLessons) * 100)
                  : 0;

              // Find next incomplete lesson
              type LessonWithProgress = Lesson & { progress?: { status: string } | null };
              let nextLesson: LessonWithProgress | null = null;
              for (const module of modules) {
                for (const lesson of (module.lessons || []) as LessonWithProgress[]) {
                  if (lesson.progress?.status !== 'completed') {
                    if (canAccessLesson(tier, lesson.required_tier)) {
                      nextLesson = lesson;
                      break;
                    }
                  }
                }
                if (nextLesson) break;
              }

              return (
                <Card key={track.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{track.title}</CardTitle>
                        <CardDescription>
                          {completedLessons} of {totalLessons} lessons completed
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{progressPercentage}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ProgressBar value={progressPercentage} className="mb-4" />
                    {nextLesson ? (
                      <Button size="sm" asChild>
                        <Link href={ROUTES.APP_LESSON(nextLesson.slug)}>
                          <Play className="mr-2 h-4 w-4" />
                          Continue: {nextLesson.title}
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={ROUTES.APP_TRACK(track.slug)}>
                          View Track
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold mb-2">No tracks available yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                New content is being added regularly. Check back soon!
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Certifications Progress */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Certifications</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href={ROUTES.APP_CERTIFICATIONS}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {certifications.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.slice(0, 2).map((cert) => (
              <Card key={cert.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>
                        {cert.progress.completed} of {cert.progress.total} requirements
                      </CardDescription>
                    </div>
                    {cert.userCertification?.status === 'earned' ? (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Earned
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        {cert.progress.percentage}%
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ProgressBar value={cert.progress.percentage} />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8 text-center">
              <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold mb-2">No certifications yet</h3>
              <p className="text-sm text-muted-foreground">
                Complete lessons to earn certifications.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
