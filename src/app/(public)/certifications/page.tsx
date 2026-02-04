import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import type { Certification } from '@/types';

export const metadata = {
  title: 'Certifications | AI Trade School',
  description: 'Earn industry-recognized AI certifications to demonstrate your expertise.',
};

export default async function CertificationsPage() {
  const supabase = await createClient();

  const { data: certifications } = await supabase
    .from('certifications')
    .select('*')
    .order('created_at');

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Award className="h-16 w-16 mx-auto text-foreground mb-6" />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Demonstrate your AI expertise with industry-recognized certifications.
            Complete tracks, pass assessments, and earn credentials.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-lg border border-border bg-card">
            <CheckCircle className="h-8 w-8 text-foreground mb-4" />
            <h3 className="font-semibold mb-2">Verified Skills</h3>
            <p className="text-sm text-muted-foreground">
              Each certification validates specific, practical skills through
              hands-on assessments.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <CheckCircle className="h-8 w-8 text-foreground mb-4" />
            <h3 className="font-semibold mb-2">Shareable Credentials</h3>
            <p className="text-sm text-muted-foreground">
              Add certifications to LinkedIn, share badges, and build your
              professional profile.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <CheckCircle className="h-8 w-8 text-foreground mb-4" />
            <h3 className="font-semibold mb-2">Career Growth</h3>
            <p className="text-sm text-muted-foreground">
              Stand out to employers and clients with proof of your AI
              capabilities.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        {certifications && certifications.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert: Certification) => (
              <Card key={cert.id} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-secondary">
                      <Award className="h-8 w-8 text-foreground" />
                    </div>
                    <div>
                      <CardTitle>{cert.title}</CardTitle>
                      <CardDescription>Professional Certification</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {cert.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={ROUTES.SIGNUP}>
                      Start Earning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Placeholder certifications */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Award className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <CardTitle>AI Operator</CardTitle>
                    <CardDescription>Professional Certification</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Demonstrate mastery in operating AI tools, prompt engineering,
                  and workflow automation.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={ROUTES.SIGNUP}>
                    Start Earning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <Award className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <CardTitle>AI Builder</CardTitle>
                    <CardDescription>Professional Certification</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Prove your ability to build, deploy, and maintain AI-powered
                  applications and services.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={ROUTES.SIGNUP}>
                    Start Earning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to get certified?
          </h2>
          <p className="text-muted-foreground mb-6">
            Create an account and start your certification journey today.
          </p>
          <Button size="lg" asChild>
            <Link href={ROUTES.SIGNUP}>Get Started Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
