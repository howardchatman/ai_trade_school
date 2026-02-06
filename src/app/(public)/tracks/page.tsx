import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ROUTES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { Track } from '@/types';

export const metadata = {
  title: 'Courses | AI Trade School',
  description: 'Explore our AI training courses - from free basics to advanced platform building.',
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
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
          alt="Students learning with technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Courses
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Professional AI training. Start free, then go deeper with
            project-based workshops and our flagship platform builder program.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Tracks Grid */}
        {tracks && tracks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track: Track & { modules: { id: string; title: string; lessons: { id: string }[] }[] }) => {
              const lessonCount = track.modules?.reduce(
                (acc, module) => acc + (module.lessons?.length || 0),
                0
              ) || 0;
              const moduleCount = track.modules?.length || 0;
              const isFree = track.price_cents === 0;

              return (
                <Card key={track.id} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <BookOpen className="h-10 w-10 text-primary mb-4" />
                      <div className="flex gap-2">
                        <Badge variant="secondary">
                          {moduleCount} modules
                        </Badge>
                        <Badge variant={isFree ? 'default' : 'outline'}>
                          {formatPrice(track.price_cents)}
                        </Badge>
                      </div>
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
                        {!isFree && ' \u00B7 Lifetime access'}
                      </span>
                      <Button variant={isFree ? 'default' : 'outline'} asChild>
                        <Link href={ROUTES.SIGNUP}>
                          {isFree ? 'Start Free' : `Enroll \u2014 ${formatPrice(track.price_cents)}`}
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
            <h2 className="text-xl font-semibold mb-2">Courses Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We are preparing our courses. Sign up to be notified when they launch.
            </p>
            <Button asChild>
              <Link href={ROUTES.SIGNUP}>Get Notified</Link>
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 text-center p-12 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-semibold mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Begin with our free AI Basics course. It covers the fundamentals
            and helps you decide which advanced courses are right for you.
          </p>
          <Button asChild>
            <Link href={ROUTES.SIGNUP}>Start Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
