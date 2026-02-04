import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/lib/constants';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { Track } from '@/types';

export const metadata = {
  title: 'Tracks | AI Trade School',
  description: 'Explore our AI training tracks - Operator, Builder, and more.',
};

export default async function TracksPage() {
  const supabase = await createClient();

  const { data: tracks } = await supabase
    .from('tracks')
    .select(`
      *,
      modules (
        id,
        title,
        lessons (id)
      )
    `)
    .eq('is_published', true)
    .order('sort_order');

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Learning Tracks
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to take you from beginner to
            professional. Choose the track that matches your goals.
          </p>
        </div>

        {/* Tracks Grid */}
        {tracks && tracks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track: Track & { modules: { id: string; title: string; lessons: { id: string }[] }[] }) => {
              const lessonCount = track.modules?.reduce(
                (acc, module) => acc + (module.lessons?.length || 0),
                0
              ) || 0;
              const moduleCount = track.modules?.length || 0;

              return (
                <Card key={track.id} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <BookOpen className="h-10 w-10 text-foreground mb-4" />
                      <Badge variant="secondary">
                        {moduleCount} modules
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{track.title}</CardTitle>
                    <CardDescription className="text-base">
                      {track.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {lessonCount} lessons
                      </span>
                      <Button variant="outline" asChild>
                        <Link href={ROUTES.SIGNUP}>
                          Start Track
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Tracks Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're preparing our learning tracks. Sign up to be notified when they launch.
            </p>
            <Button asChild>
              <Link href={ROUTES.SIGNUP}>Get Notified</Link>
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 text-center p-12 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-semibold mb-4">
            Not sure which track is right for you?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Take our quick assessment to find the perfect learning path for your
            goals and experience level.
          </p>
          <Button asChild>
            <Link href={ROUTES.SIGNUP}>Take Assessment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
