import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { ArrowRight, Zap, Code, Users, Award, CheckCircle } from 'lucide-react';

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
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={ROUTES.TRACKS}>Explore Tracks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Built for professionals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to operate AI tools effectively or build
              custom solutions, we have a track for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-border bg-card">
              <Zap className="h-10 w-10 mb-6 text-foreground" />
              <h3 className="text-xl font-semibold mb-3">Operator Track</h3>
              <p className="text-muted-foreground mb-4">
                Learn to leverage AI tools in your daily work. Prompt
                engineering, workflow automation, and productivity optimization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  Prompt Engineering Mastery
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  AI Tool Integration
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  Workflow Automation
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <Code className="h-10 w-10 mb-6 text-foreground" />
              <h3 className="text-xl font-semibold mb-3">Builder Track</h3>
              <p className="text-muted-foreground mb-4">
                Build AI-powered applications and services. From APIs to full
                products, learn the technical skills that matter.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  AI API Integration
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  Custom Model Fine-tuning
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  Production Deployment
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <Users className="h-10 w-10 mb-6 text-foreground" />
              <h3 className="text-xl font-semibold mb-3">All Access</h3>
              <p className="text-muted-foreground mb-4">
                Full access to everything. Perfect for teams and individuals who
                want the complete learning experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  All Current Tracks
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  Future Content Included
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-foreground" />
                  Priority Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-24 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Award className="h-12 w-12 mb-6 text-foreground" />
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Earn Certifications
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete tracks and earn industry-recognized certifications.
                Demonstrate your expertise to employers and clients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                  Verified completion tracking
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-foreground" />
                  Shareable credential badges
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-foreground" />
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
                  <Award className="h-24 w-24 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl font-semibold">AI Operator</p>
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
            Join thousands of professionals learning to thrive in the AI
            economy. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={ROUTES.SIGNUP}>
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={ROUTES.FOUNDERS}>Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
