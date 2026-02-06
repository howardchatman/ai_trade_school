import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { ArrowRight, Zap, Code, Layers, Award, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="noise-bg">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
              Master the
              <br />
              <span className="text-muted-foreground">AI Economy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Professional training for the new economy. Learn to operate, build,
              and lead with artificial intelligence. No fluff. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={ROUTES.SIGNUP}>
                  Start Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={ROUTES.TRACKS}>Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tiers */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Three levels of training
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI fundamentals to building full platforms.
              Choose the level that matches where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="p-8 rounded-lg border border-border bg-card">
              <Zap className="h-10 w-10 mb-6 text-primary" />
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold">AI Basics</h3>
                <span className="text-sm text-muted-foreground">Free</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn the fundamentals. How to use ChatGPT, create charts,
                build to-do lists, and write effective prompts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  ChatGPT fundamentals
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Charts and data summaries
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Basic automations
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href={ROUTES.SIGNUP}>Start Free</Link>
              </Button>
            </div>

            {/* $99 Workshops */}
            <div className="p-8 rounded-lg border border-primary bg-card">
              <Code className="h-10 w-10 mb-6 text-primary" />
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold">Skill Workshops</h3>
                <span className="text-sm text-muted-foreground">$99 each</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Project-based courses that teach you to build real AI systems.
                Buy only what you need. Lifetime access.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  AI Forex Trading Bot
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  5-Star Review System
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  AI Intake & Lead Routing
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  AI Receptionist & Proposals
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link href={ROUTES.TRACKS}>Browse Workshops</Link>
              </Button>
            </div>

            {/* $497 Platform Builder */}
            <div className="p-8 rounded-lg border border-border bg-card">
              <Layers className="h-10 w-10 mb-6 text-primary" />
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold">Platform Builder</h3>
                <span className="text-sm text-muted-foreground">$497</span>
              </div>
              <p className="text-muted-foreground mb-4">
                The flagship program. Learn to build complete AI-powered platforms
                with auth, dashboards, payments, and deployment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Full-stack AI applications
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Auth, APIs, Stripe, deployment
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Certification eligible
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href={ROUTES.SIGNUP}>Enroll in Platform Builder</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-24 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Award className="h-12 w-12 mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Earn Certifications
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete courses and earn certifications that demonstrate your
                AI skills. Show employers and clients what you can build.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Verified completion tracking
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Shareable credential badges
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Skills-based assessments
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link href={ROUTES.CERTIFICATIONS}>View Certifications</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg border border-border bg-card p-8 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-24 w-24 mx-auto mb-4 text-primary/50" />
                  <p className="text-xl font-semibold">AI Platform Builder</p>
                  <p className="text-sm text-muted-foreground">Certified Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start with our free AI Basics course. No credit card required.
            Upgrade to workshops or the full platform builder when you are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={ROUTES.SIGNUP}>
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={ROUTES.TRACKS}>Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
