import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import Link from 'next/link';
import {
  BookOpen,
  Target,
  Lightbulb,
  Layers,
  Award,
  GraduationCap,
  Monitor,
  ClipboardCheck,
  FileText,
  Shield,
  Users,
  UserCheck,
  RefreshCw,
  Globe,
  Download,
  Mail,
} from 'lucide-react';

export const metadata = {
  title: 'Academic Framework & Program Handbook | AI Trade School',
  description:
    'The academic structure, instructional standards, and certification pathway of AI Trade School.',
};

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] mb-4">
      <Icon className="h-5 w-5" />
    </div>
  );
}

export default function HandbookPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-4">
              Official Document
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Academic Framework &amp; Program Handbook
            </h1>
            <div className="w-16 h-0.5 bg-[var(--gold)] mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed">
              This page outlines the academic structure, instructional standards,
              and certification pathway of AI Trade School.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Contents
            </h2>
            <nav>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {[
                  ['mission', 'Mission'],
                  ['vision', 'Vision'],
                  ['philosophy', 'Educational Philosophy'],
                  ['structure', 'Program Structure Overview'],
                  ['pathway', 'Credential Pathway'],
                  ['courses', 'Course Offerings'],
                  ['delivery', 'Instructional Delivery Model'],
                  ['assessment', 'Assessment & Evaluation'],
                  ['records', 'Student Records & Credentials'],
                  ['conduct', 'Code of Conduct & Ethics'],
                  ['accessibility', 'Accessibility & Inclusion'],
                  ['instructors', 'Instructor Standards'],
                  ['governance', 'Curriculum Governance'],
                  ['alignment', 'External Alignment'],
                  ['pdf', 'Official Handbook PDF'],
                  ['contact', 'Contact & Administration'],
                ].map(([id, label], i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-baseline gap-2 py-1"
                    >
                      <span className="text-xs text-[var(--gold)] font-medium w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* 1. Mission */}
      <section id="mission" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Target} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI Trade School prepares individuals for the modern workforce
              through practical, skills-based education in artificial
              intelligence. Our focus is on real-world application, ethical use,
              and operational excellence — not theory for theory&apos;s sake.
            </p>
            <p className="text-foreground font-medium">
              We train AI Operators, not spectators.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Vision */}
      <section id="vision" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Lightbulb} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe artificial intelligence should be operated by trained
              professionals who understand how to deploy it responsibly,
              effectively, and ethically. AI Trade School exists to close the gap
              between AI tools and real-world business, workforce, and
              operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Educational Philosophy */}
      <section id="philosophy" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={BookOpen} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Educational Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI Trade School follows a trade-school and workforce education
              model, emphasizing:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Applied skills over abstract theory',
                'Demonstrated competency over memorization',
                'Real-world systems over one-off examples',
                'Ethical AI use as a core standard',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="text-[var(--gold)] mt-0.5 font-bold">
                    &#8212;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium">
              Students are evaluated on what they can do, not just what they
              know.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Program Structure Overview */}
      <section id="structure" className="py-16 bg-[#0f172a] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionIcon icon={Layers} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-white">
              Program Structure Overview
            </h2>
            <p className="text-slate-300">
              The curriculum is organized into three progressive tiers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {[
              {
                tier: 'Tier 1',
                title: 'Foundational AI Literacy',
                price: 'Free',
                description:
                  'Core concepts, tools overview, and workforce readiness. Open to all learners.',
              },
              {
                tier: 'Tier 2',
                title: 'Applied Professional Skills',
                price: 'Paid',
                description:
                  'Hands-on courses in prompt engineering, automation, business operations, and system design.',
              },
              {
                tier: 'Tier 3',
                title: 'Professional Certification',
                price: 'CAIO',
                description:
                  'Capstone project, examination, and oral defense. Earn the Certified AI Operator credential.',
              },
            ].map((tier) => (
              <div
                key={tier.tier}
                className="p-6 rounded-lg border border-slate-700 bg-slate-800/50"
              >
                <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                  {tier.tier}
                </p>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {tier.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{tier.price}</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Credential Pathway */}
      <section id="pathway" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Award} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Credential Pathway
            </h2>
          </div>
          <div className="max-w-4xl">
            <div className="grid md:grid-cols-3 gap-0">
              {[
                {
                  step: '01',
                  title: 'AI Literacy Certificate',
                  description: 'Complete all foundational courses',
                  tier: 'Tier 1 — Free',
                },
                {
                  step: '02',
                  title: 'Applied AI Practitioner Certificate',
                  description: 'Complete all core applied courses',
                  tier: 'Tier 2 — Paid',
                },
                {
                  step: '03',
                  title: 'Certified AI Operator (CAIO)',
                  description:
                    'Capstone, exam, and oral defense',
                  tier: 'Tier 3 — Certification',
                },
              ].map((cred, i) => (
                <div key={cred.step} className="relative flex">
                  <div className="p-6 border border-border rounded-lg flex-1">
                    <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                      Step {cred.step}
                    </p>
                    <h3 className="text-lg font-semibold mb-1">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {cred.tier}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:flex items-center px-2 text-muted-foreground">
                      <span className="text-lg">&rarr;</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Course Offerings */}
      <section id="courses" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={GraduationCap} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Course Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {/* Foundational */}
            <div className="p-6 rounded-lg border border-border bg-white">
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                Foundational Courses — Free
              </p>
              <h3 className="text-lg font-semibold mb-4">
                AI Literacy Track
              </h3>
              <ul className="space-y-2 mb-6">
                {[
                  'AI 101 — Foundations of Artificial Intelligence',
                  'ChatGPT Fundamentals — Human–AI Interaction',
                  'Overview of AI Tools and Platforms',
                  'AI for Personal and Professional Productivity',
                  'AI Careers, Ethics, and Workforce Readiness',
                ].map((course) => (
                  <li
                    key={course}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-[var(--gold)] mt-0.5">&#8226;</span>
                    {course}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground">
                Outcome: AI Literacy Certificate of Completion
              </p>
            </div>

            {/* Core Applied */}
            <div className="p-6 rounded-lg border border-border bg-white">
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                Core Applied Courses — $149–$297
              </p>
              <h3 className="text-lg font-semibold mb-4">
                Applied AI Practitioner Track
              </h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Prompt Engineering for Business Operations',
                  'AI Automation and Workflow Design',
                  'AI for Business Operations and Administration',
                  'AI Content, Media, and Communication Systems',
                  'AI Tool Integration and System Design',
                ].map((course) => (
                  <li
                    key={course}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-[var(--gold)] mt-0.5">&#8226;</span>
                    {course}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground">
                Outcome: Applied AI Practitioner Certificate
              </p>
            </div>
          </div>

          {/* Certification */}
          <div className="max-w-5xl mt-8">
            <div className="p-6 rounded-lg border-2 border-[var(--gold)]/30 bg-white">
              <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-2">
                Professional Certification
              </p>
              <h3 className="text-lg font-semibold mb-4">
                Certified AI Operator (CAIO)
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Requirements:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Completion of all core applied courses',
                  'Capstone AI system deployment',
                  'Written knowledge examination',
                  'Recorded oral defense and walkthrough',
                ].map((req) => (
                  <li
                    key={req}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-[var(--gold)] mt-0.5">&#8226;</span>
                    {req}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground">
                Outcome: Certified AI Operator (CAIO)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instructional Delivery Model */}
      <section id="delivery" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Monitor} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Instructional Delivery Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All instruction is delivered 100% online and asynchronous,
              allowing students to learn at their own pace from anywhere.
            </p>
            <ul className="space-y-2">
              {[
                'Video lectures and demonstrations',
                'Guided practice exercises',
                'Applied projects with real-world scenarios',
                'Portfolio-based learning outcomes',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground text-sm"
                >
                  <span className="text-[var(--gold)] mt-0.5 font-bold">
                    &#8212;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Assessment & Evaluation */}
      <section id="assessment" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={ClipboardCheck} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Assessment &amp; Evaluation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All assessment is competency-based. Students demonstrate mastery
              through applied work, not rote memorization.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Knowledge checks and quizzes',
                'Applied projects and assignments',
                'Portfolio submissions',
                'Capstone project (certification track)',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground text-sm"
                >
                  <span className="text-[var(--gold)] mt-0.5 font-bold">
                    &#8212;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground font-medium">
              Passing standard: 70% + completion of all required work.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Student Records & Credentials */}
      <section id="records" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={FileText} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Student Records &amp; Credentials
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Trade School maintains secure digital records of course
              completion, assessment results, and certificates issued.
              Transcripts and credential verification are available upon
              request.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Code of Conduct & Ethics */}
      <section id="conduct" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Shield} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Code of Conduct &amp; Ethics
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All students and instructors are expected to uphold the following
              standards:
            </p>
            <ul className="space-y-2">
              {[
                'Responsible and ethical AI use',
                'Professional conduct in all interactions',
                'Academic integrity in all submitted work',
                'Disclosure of AI usage when required by context',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground text-sm"
                >
                  <span className="text-[var(--gold)] mt-0.5 font-bold">
                    &#8212;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Accessibility & Inclusion */}
      <section id="accessibility" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Users} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Accessibility &amp; Inclusion
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Trade School is committed to inclusive design across all
              learning materials and platforms. Reasonable accommodations are
              available upon request to ensure equitable access for all
              learners.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Instructor Standards */}
      <section id="instructors" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={UserCheck} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Instructor Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All instructors are experienced practitioners with demonstrated
              expertise in their subject area. Instructors are expected to:
            </p>
            <ul className="space-y-2">
              {[
                'Deliver curriculum-aligned instruction',
                'Maintain high standards of quality and clarity',
                'Stay current with evolving AI tools and practices',
                'Model ethical and professional AI use',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground text-sm"
                >
                  <span className="text-[var(--gold)] mt-0.5 font-bold">
                    &#8212;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 13. Curriculum Governance */}
      <section id="governance" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={RefreshCw} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Curriculum Governance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The curriculum undergoes regular review to ensure relevance and
              quality. All updates are versioned and documented. Changes are
              driven by industry developments, student outcomes, and
              instructor feedback.
            </p>
          </div>
        </div>
      </section>

      {/* 14. External Alignment */}
      <section id="alignment" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Globe} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              External Alignment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI Trade School programs are aligned with workforce development
              boards, employer training needs, and continuing education models.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              AI Trade School is a non-degree-granting institution focused on
              professional certification and workforce readiness.
            </p>
          </div>
        </div>
      </section>

      {/* 15. Official Handbook PDF CTA */}
      <section id="pdf" className="py-16 bg-[#0f172a] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Download} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-white">
              Official Program Handbook
            </h2>
            <p className="text-slate-300 mb-8">
              Download the complete AI Trade School Program Handbook as a PDF
              for your records.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold"
            >
              <Link href={ROUTES.HANDBOOK}>
                <Download className="h-4 w-4 mr-2" />
                Download the Official Program Handbook (PDF)
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 16. Contact & Administration */}
      <section id="contact" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Mail} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Contact &amp; Administration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI Trade School is an online institution. All inquiries,
              accommodation requests, and administrative matters are handled
              through our support portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                asChild
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold"
              >
                <Link href={ROUTES.SIGNUP}>Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`mailto:support@aitradeschool.org`}>
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
