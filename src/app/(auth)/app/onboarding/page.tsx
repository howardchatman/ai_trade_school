'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Layers,
  Code,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ShoppingCart,
  Star,
} from 'lucide-react';

interface Track {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  price_cents: number;
  modules: { id: string; lessons: { id: string }[] }[];
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0=welcome, 1=flagship, 2=workshops
  const [flagship, setFlagship] = useState<Track | null>(null);
  const [workshops, setWorkshops] = useState<Track[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [completing, setCompleting] = useState(false);

  // Load tracks on first render
  if (!loaded) {
    setLoaded(true);
    fetch('/api/onboarding/tracks')
      .then((res) => res.json())
      .then((data) => {
        setFlagship(data.flagship);
        setWorkshops(data.workshops);
      });
  }

  async function handleComplete() {
    setCompleting(true);
    await fetch('/api/onboarding/complete', { method: 'POST' });
    router.push('/app');
    router.refresh();
  }

  function getLessonCount(track: Track) {
    return track.modules?.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) || 0;
  }

  // Step 0: Welcome
  if (step === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-lg text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Welcome to AI Trade School
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            You are in. Let us show you the fastest path to mastering
            AI and building real systems that make money.
          </p>
          <Button size="lg" onClick={() => setStep(1)}>
            Show Me the Path
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  // Step 1: Flagship $497 Course Pitch
  if (step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <Badge className="mb-4 text-sm px-3 py-1">Recommended</Badge>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              The Complete Path
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Most serious students start here. Learn to build full AI-powered
              platforms from scratch — the skill that pays.
            </p>
          </div>

          <Card className="border-primary mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {flagship?.title || 'AI Platform Builder'}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {flagship?.description ||
                        'Build complete AI-powered platforms with authentication, dashboards, payments, and deployment.'}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    Full-stack AI applications from zero to deployment
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    Authentication, APIs, Stripe payments, databases
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {flagship ? `${getLessonCount(flagship)} hands-on lessons` : '12+ hands-on lessons'}
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    Certification eligible — prove your skills
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    Lifetime access — learn at your own pace
                  </li>
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-3xl font-bold">$497</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  {flagship ? (
                    <form action="/api/stripe/checkout" method="POST">
                      <input type="hidden" name="trackId" value={flagship.id} />
                      <Button size="lg">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Enroll Now
                      </Button>
                    </form>
                  ) : (
                    <Button size="lg" disabled>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <button
              onClick={() => setStep(2)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Not ready for the full program? See individual workshops →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: $99 Workshop Courses
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Skill Workshops
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each workshop teaches you to build one complete AI system.
            Buy only what you need — $99 each with lifetime access.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {workshops.map((track) => (
            <Card key={track.id}>
              <CardContent className="py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary mt-0.5">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{track.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {track.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {getLessonCount(track)} lessons &middot; Lifetime access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-bold">$99</span>
                    <form action="/api/stripe/checkout" method="POST">
                      <input type="hidden" name="trackId" value={track.id} />
                      <Button size="sm">
                        <ShoppingCart className="mr-1 h-3 w-3" />
                        Buy
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {workshops.length === 0 && (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                Loading workshops...
              </CardContent>
            </Card>
          )}
        </div>

        <div className="text-center space-y-3">
          <Button
            size="lg"
            variant="outline"
            onClick={handleComplete}
            disabled={completing}
          >
            {completing ? 'Setting up your account...' : 'Skip for Now — Start Free Course'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground">
            You can always purchase courses later from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
