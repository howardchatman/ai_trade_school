import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { Award, CheckCircle } from 'lucide-react';
import { LeadCapturePopup } from '@/components/lead-capture-popup';
import { LeadCaptureForm } from '@/components/lead-capture-form';

export default function HomePage() {
  return (
    <div>
      <LeadCapturePopup />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero1_image.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0f172a]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-0 text-white">
              AI Is the New Skilled Trade
            </h1>
            <div className="w-16 h-0.5 bg-[var(--gold)] mt-5 mb-6" />
            <p className="text-lg text-slate-300 mb-4 max-w-xl leading-relaxed">
              Learn practical AI skills you can actually use — to automate work,
              build systems, and create real-world value.
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              No hype. No fluff. Just skills that pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                asChild
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold"
              >
                <Link href={ROUTES.SIGNUP}>Start Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white text-[#0f172a] border-white hover:bg-transparent hover:text-white"
              >
                <Link href={ROUTES.TRACKS}>View Courses</Link>
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Free introductory courses available &middot; No subscription required
            </p>
          </div>
        </div>
      </section>

      {/* Course Tiers */}
      <section className="py-24 bg-white">
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
            <div className="rounded-lg border border-border bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
                  alt="AI chat interface on screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
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
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link href={ROUTES.SIGNUP}>Start Free</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* $99 Workshops - featured */}
            <div className="rounded-lg border-2 border-[var(--gold)] bg-white shadow-md overflow-hidden flex flex-col relative">
              <div className="absolute top-4 right-4 z-10 bg-[var(--gold)] text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                  alt="Data analytics dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
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
                    <CheckCircle className="h-4 w-4 text-[var(--gold-dark)]" />
                    AI Forex Trading Bot
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-[var(--gold-dark)]" />
                    5-Star Review System
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-[var(--gold-dark)]" />
                    AI Intake & Lead Routing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-[var(--gold-dark)]" />
                    AI Receptionist & Proposals
                  </li>
                </ul>
                <div className="mt-auto">
                  <Button className="w-full bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a]" asChild>
                    <Link href={ROUTES.TRACKS}>Browse Workshops</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* $497 Platform Builder */}
            <div className="rounded-lg border border-border bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Developer building a web platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
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
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link href={ROUTES.SIGNUP}>Enroll in Platform Builder</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Preview - dark image section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/hero2_image.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Award className="h-12 w-12 mb-6 text-[var(--gold)]" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Earn Certifications
            </h2>
            <p className="text-slate-300 mb-6">
              Complete courses and earn certifications that demonstrate your
              AI skills. Show employers and clients what you can build.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="h-5 w-5 text-[var(--gold)]" />
                Verified completion tracking
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="h-5 w-5 text-[var(--gold)]" />
                Shareable credential badges
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="h-5 w-5 text-[var(--gold)]" />
                Skills-based assessments
              </li>
            </ul>
            <Button asChild className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold">
              <Link href={ROUTES.CERTIFICATIONS}>View Certifications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Email Capture CTA */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Stay in the loop
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get free AI tips, course drops, and practical tutorials. No spam.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm
              source="homepage_cta"
              variant="dark"
              buttonText="Subscribe"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
