import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { Users, Lightbulb, Target, Heart } from 'lucide-react';

export const metadata = {
  title: 'About | AI Trade School',
  description: 'Meet the team behind AI Trade School and learn about our mission.',
};

const FOUNDERS = [
  {
    name: 'Founder Name',
    role: 'CEO & Co-founder',
    bio: 'Passionate about making AI education accessible. Previously led product at a Fortune 500 tech company.',
    image: null, // Placeholder - would be actual image path
  },
  {
    name: 'Co-founder Name',
    role: 'CTO & Co-founder',
    bio: '15+ years in software engineering. Built AI systems at scale. Believes in learning by doing.',
    image: null,
  },
];

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Practical Learning',
    description: 'We believe in hands-on education. Every lesson is designed to give you immediately applicable skills.',
  },
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'Our curriculum is built around real-world outcomes. Learn what actually matters for your career.',
  },
  {
    icon: Heart,
    title: 'Accessible Excellence',
    description: 'World-class education shouldn\'t be exclusive. We\'re making AI literacy available to everyone.',
  },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaborating together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0f172a]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            About AI Trade School
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We&apos;re on a mission to prepare the workforce for the AI-powered
            economy. Practical skills, not theory. Results, not hype.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Mission Statement */}
        <div className="mb-24 p-12 rounded-lg border border-border bg-card text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The AI revolution is creating new opportunities and demanding new
            skills. We believe everyone deserves access to the education they
            need to thrive. AI Trade School exists to bridge the gap between
            potential and capability—giving professionals the practical training
            they need to succeed in the AI economy.
          </p>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <value.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {FOUNDERS.map((founder) => (
              <div key={founder.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{founder.name}</h3>
                <p className="text-muted-foreground mb-4">{founder.role}</p>
                <p className="text-sm text-muted-foreground">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="mb-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              AI Trade School was born from a simple observation: the AI
              revolution was creating a skills gap that traditional education
              wasn't addressing. While universities scrambled to update their
              curricula, professionals were left wondering how to stay relevant.
            </p>
            <p className="text-muted-foreground mb-4">
              We saw an opportunity to create something different—a trade school
              for the AI age. Not another theory-heavy academic program, but
              practical, hands-on training that gives people the skills they
              need right now.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to be helping professionals around the world
              navigate the AI economy. From operators learning to leverage AI
              tools, to builders creating the next generation of AI applications,
              our students are leading the way.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you're ready to enroll or just want to learn more, we'd
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={ROUTES.SIGNUP}>Start Learning</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={ROUTES.TRACKS}>Explore Tracks</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
