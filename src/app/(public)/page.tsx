import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { LeadCapturePopup } from '@/components/lead-capture-popup';
import { LeadCaptureForm } from '@/components/lead-capture-form';

export default function HomePage() {
  return (
    <div>
      <LeadCapturePopup />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/hero1_image.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
              Workforce-Ready AI Skills. Operator-Level Training.
            </h1>
            <div className="w-16 h-0.5 bg-[var(--gold)] mt-6 mb-8" />
            <p className="text-lg text-slate-300 mb-4 max-w-xl leading-relaxed">
              Learn practical AI operations, automation, and system workflows — and progress toward Certified AI Operator (CAIO).
            </p>
            <p className="text-lg text-white font-medium mb-10 max-w-xl">
              AI Trade School trains operators, not spectators.
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
                <Link href={ROUTES.TRACKS}>View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              What We Believe
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe AI will define the next generation of skilled workers — not
              because it&apos;s powerful, but because most people don&apos;t know how
              to use it properly.
            </p>
            <div className="space-y-1 text-lg text-foreground font-medium mb-6">
              <p>The gap isn&apos;t tools.</p>
              <p>The gap is competence.</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Knowing what AI can do isn&apos;t enough.
              You have to know how to build, deploy, and run real systems in the real world.
            </p>
            <p className="text-lg text-foreground font-medium">
              That&apos;s what we teach.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI Trade School */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Why AI Trade School
            </h2>
            <p className="text-muted-foreground">
              Built on the principles of trade-school and workforce education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                title: 'Applied Skills',
                description:
                  'Every course is built around real-world application. You learn by building systems, not watching slides.',
              },
              {
                title: 'Competency-Based',
                description:
                  'Students are evaluated on what they can do, not just what they know. Demonstrated mastery is the standard.',
              },
              {
                title: 'Ethical AI Use',
                description:
                  'Responsible deployment is a core requirement, not an afterthought. Operators understand the stakes.',
              },
              {
                title: 'Portfolio Outcomes',
                description:
                  'Graduate with working projects and deployed systems — proof of capability that employers and clients can verify.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-border bg-white"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white">
              What We Don&apos;t Do
            </h2>
            <p className="text-slate-400 mb-6">AI Trade School is not:</p>
            <ul className="space-y-3 mb-10">
              <li className="text-slate-300 flex items-start gap-3">
                <span className="text-slate-500 mt-1.5 text-xs">&#x2715;</span>
                A hype-driven AI course platform
              </li>
              <li className="text-slate-300 flex items-start gap-3">
                <span className="text-slate-500 mt-1.5 text-xs">&#x2715;</span>
                A collection of surface-level tutorials
              </li>
              <li className="text-slate-300 flex items-start gap-3">
                <span className="text-slate-500 mt-1.5 text-xs">&#x2715;</span>
                A &ldquo;get rich with AI&rdquo; program
              </li>
              <li className="text-slate-300 flex items-start gap-3">
                <span className="text-slate-500 mt-1.5 text-xs">&#x2715;</span>
                A content farm chasing trends
              </li>
            </ul>
            <div className="space-y-1 text-lg text-slate-300 mb-6">
              <p>We don&apos;t sell shortcuts.</p>
              <p>We don&apos;t sell tricks.</p>
              <p>We don&apos;t sell motivation.</p>
            </div>
            <p className="text-lg text-white font-medium">
              We train operators.
            </p>
          </div>
        </div>
      </section>

      {/* Credential Pathway */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Credential Pathway
            </h2>
            <p className="text-muted-foreground">
              A structured path from foundational literacy to professional certification.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <div className="p-6 rounded-lg border border-border bg-white">
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                Tier 1 — Free
              </p>
              <h3 className="text-lg font-semibold mb-2">
                AI Literacy Certificate
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Master the fundamentals of AI, tools, ethics, and workforce readiness through our free foundational courses.
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                5 courses &middot; Self-paced
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-white">
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                Tier 2 — $149–$297
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Applied AI Practitioner
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Build real systems with prompt engineering, automation, business operations, and AI tool integration.
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                5 courses &middot; Portfolio-based
              </p>
            </div>
            <div className="p-6 rounded-lg border-2 border-[var(--gold)]/30 bg-[#0f172a] text-white">
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                Tier 3 — Certification
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Certified AI Operator (CAIO)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Capstone deployment, written examination, and oral defense. The industry credential for AI operators.
              </p>
              <p className="text-xs font-medium text-slate-400">
                Capstone &middot; Exam &middot; Defense
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-5xl">
            <Button variant="outline" size="lg" asChild>
              <Link href={ROUTES.HANDBOOK}>View Full Academic Framework</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How This School Works */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/hero2_image.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              How This School Works
            </h2>
            <p className="text-slate-300">
              AI Trade School is structured like a real trade:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            <div>
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-3">
                01
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Foundations</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Learn the fundamentals. Understand the tools, the ethics, and the landscape. Free and open to everyone.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-3">
                02
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Applied Training</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Project-based courses that teach you to build, automate, and deploy working AI systems in real business contexts.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-3">
                03
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">CAIO Certification</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Demonstrate competence through capstone, exam, and defense. Earn the Certified AI Operator credential.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-1 text-slate-300">
            <p>Progress is earned.</p>
            <p className="text-white font-medium">Nothing is handed out.</p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Who This Is For
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-foreground flex items-start gap-3">
                <span className="text-[var(--gold)] mt-0.5 font-bold">&#8212;</span>
                Professionals who want practical AI skills
              </li>
              <li className="text-foreground flex items-start gap-3">
                <span className="text-[var(--gold)] mt-0.5 font-bold">&#8212;</span>
                Builders who care about real outcomes
              </li>
              <li className="text-foreground flex items-start gap-3">
                <span className="text-[var(--gold)] mt-0.5 font-bold">&#8212;</span>
                Operators who want to be taken seriously
              </li>
              <li className="text-foreground flex items-start gap-3">
                <span className="text-[var(--gold)] mt-0.5 font-bold">&#8212;</span>
                People who prefer substance over noise
              </li>
            </ul>
            <div className="space-y-1 text-lg text-muted-foreground">
              <p>If you&apos;re looking for shortcuts, this isn&apos;t for you.</p>
              <p className="text-foreground font-medium">
                If you&apos;re looking to build real capability, you&apos;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-white">
              Why This Matters
            </h2>
            <div className="space-y-1 text-lg text-slate-300 mb-6">
              <p>In the next decade, AI won&apos;t replace jobs.</p>
              <p className="text-white font-medium">Incompetence will.</p>
            </div>
            <div className="space-y-1 text-lg text-slate-300 mb-6">
              <p>Those who can operate AI will thrive.</p>
              <p>Those who can&apos;t will fall behind.</p>
            </div>
            <p className="text-lg text-white font-medium">
              AI Trade School exists to make sure you&apos;re on the right side of that divide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Start with Foundations
            </h2>
            <p className="text-muted-foreground mb-8">
              Begin with our free AI Literacy courses. No commitment, no credit card — just the first step toward real skill.
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
              >
                <Link href={ROUTES.HANDBOOK}>View Academic Framework</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm text-slate-400 mb-3">
              Get free AI tips, course drops, and practical tutorials. No spam.
            </p>
            <LeadCaptureForm
              source="homepage_cta"
              variant="dark"
              buttonText="Subscribe"
              placeholder="you@email.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
