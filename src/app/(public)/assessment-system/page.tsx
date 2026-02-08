import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Target,
  Shield,
  Layers,
  Award,
  BookOpen,
  ClipboardCheck,
  FileText,
  Scale,
  Users,
  RefreshCw,
  CheckCircle,
  Lock,
  Database,
  Settings,
  AlertTriangle,
  GraduationCap,
} from 'lucide-react';

export const metadata = {
  title: 'CAIO Assessment & Validation System | AI Trade School',
  description:
    'Assessment methods, rubric standards, scoring models, pass/fail criteria, remediation policies, and evaluator standards for the CAIO certification program.',
};

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] mb-4">
      <Icon className="h-5 w-5" />
    </div>
  );
}

function RubricTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border my-6">
      <table className="w-full text-sm min-w-[800px]">
        <thead>
          <tr className="bg-[#0f172a] text-white">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-3 py-2.5 font-semibold text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-2.5 border-b border-border text-[0.82rem] leading-relaxed ${ci === 0 ? 'font-semibold text-[#0f172a]' : 'text-muted-foreground'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#0f172a] text-white">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 border-b border-border ${ci === 0 ? 'font-semibold' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AssessmentSystemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0f172a] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-3">
            Assessment &amp; Validation System
          </p>
          <p className="text-lg text-white/70 mb-2 font-[family-name:var(--font-playfair)]">
            AI Trade School
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-playfair)]">
            Certified AI Operator (CAIO)
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60 mb-8">
            <span>Version 1.0</span>
            <span>Academic Year 2026–2027</span>
            <span>Effective August 1, 2026</span>
            <span>Classification: Institutional Assessment Standards</span>
          </div>
          <div className="border-l-2 border-[var(--gold)] pl-5 text-white/80 italic leading-relaxed mb-8">
            This document defines the assessment methods, rubric standards, scoring models, pass/fail
            criteria, remediation policies, and evaluator standards for the CAIO certification
            program.
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Contents
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            <div>
              <p className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mt-3 mb-2">
                Core Framework
              </p>
              <Link href="#philosophy" className="block py-1 text-[var(--gold)] hover:underline">
                1. Assessment Philosophy
              </Link>
              <Link href="#architecture" className="block py-1 text-[var(--gold)] hover:underline">
                2. Three-Level Model
              </Link>
              <Link href="#tier1" className="block py-1 text-[var(--gold)] hover:underline">
                3. Tier 1 Standards
              </Link>
              <Link href="#tier2" className="block py-1 text-[var(--gold)] hover:underline">
                4. Tier 2 Standards
              </Link>
              <Link href="#rubrics" className="block py-1 text-[var(--gold)] hover:underline">
                5. Course-Level Rubrics
              </Link>
              <Link
                href="#domain-validation"
                className="block py-1 text-[var(--gold)] hover:underline"
              >
                6. Domain Validation
              </Link>
              <Link href="#capstone" className="block py-1 text-[var(--gold)] hover:underline">
                7. Capstone Assessment
              </Link>
              <Link href="#written-exam" className="block py-1 text-[var(--gold)] hover:underline">
                8. Written Examination
              </Link>
            </div>
            <div>
              <p className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mt-3 mb-2">
                Standards &amp; Appendices
              </p>
              <Link href="#oral-defense" className="block py-1 text-[var(--gold)] hover:underline">
                9. Oral Defense
              </Link>
              <Link
                href="#proficiency-scale"
                className="block py-1 text-[var(--gold)] hover:underline"
              >
                10. Unified Proficiency Scale
              </Link>
              <Link href="#pass-fail" className="block py-1 text-[var(--gold)] hover:underline">
                11. Pass / Fail Logic
              </Link>
              <Link href="#remediation" className="block py-1 text-[var(--gold)] hover:underline">
                12. Remediation &amp; Reassessment
              </Link>
              <Link href="#evaluator" className="block py-1 text-[var(--gold)] hover:underline">
                13. Evaluator Standards
              </Link>
              <Link href="#integrity" className="block py-1 text-[var(--gold)] hover:underline">
                14. Assessment Integrity
              </Link>
              <Link href="#records" className="block py-1 text-[var(--gold)] hover:underline">
                15. Records &amp; Audit Trail
              </Link>
              <Link href="#governance" className="block py-1 text-[var(--gold)] hover:underline">
                16. Governance &amp; Revision
              </Link>
              <p className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mt-4 mb-2">
                Appendices
              </p>
              <Link href="#appendix-a" className="block py-1 text-[var(--gold)] hover:underline">
                A: Capstone Rubric
              </Link>
              <Link href="#appendix-b" className="block py-1 text-[var(--gold)] hover:underline">
                B: Oral Defense Rubric
              </Link>
              <Link href="#appendix-c" className="block py-1 text-[var(--gold)] hover:underline">
                C: Domain Checklist
              </Link>
              <Link href="#appendix-d" className="block py-1 text-[var(--gold)] hover:underline">
                D: Decision Flowchart
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section 1: Assessment Philosophy */}
        <section id="philosophy" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Target} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 1
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Assessment Philosophy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The AI Trade School CAIO certification program employs a competency-based assessment
            model. Credentials are awarded on the basis of demonstrated mastery — not seat hours,
            content consumption, or time in program. Every assessment instrument answers a single
            question: <em>can this individual perform this competency to a professional standard
            under authentic conditions?</em>
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Assessment protects three things simultaneously: the value of the credential, employer
            confidence in certified operators, and the institutional integrity of AI Trade School.
          </p>

          <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">
            Assessment Principles
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {['Applied', 'Observable', 'Measurable', 'Repeatable', 'Aligned', 'Transparent', 'Ethical'].map(
              (p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 bg-white border border-border rounded-lg px-4 py-2 text-sm font-semibold text-[#0f172a]"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  {p}
                </span>
              )
            )}
          </div>

          <dl className="space-y-4 mb-8">
            <div>
              <dt className="font-bold text-[#0f172a]">Applied</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                Assessment requires application to authentic tasks. Rote memorization of definitions,
                terminology, or procedures is insufficient to demonstrate competency.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#0f172a]">Observable</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                Competency is demonstrated through work products, performances, and demonstrations.
                Self-report is not accepted as evidence of competency.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#0f172a]">Measurable</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                All assessments use published criteria, rubrics, and scoring models with defined
                proficiency levels. No unconstrained subjectivity in evaluation.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#0f172a]">Repeatable</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                Assessment instruments are standardized so that different evaluators, evaluating the
                same work, reach the same conclusion. Inter-rater reliability is a design priority.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#0f172a]">Aligned</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                Every assessment is aligned to specific competency domains and credential
                requirements. No assessment exists without a direct connection to certification
                standards.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#0f172a]">Transparent</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                All rubrics, criteria, and standards are published and available to candidates in
                advance. No hidden requirements or undisclosed evaluation criteria.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#0f172a]">Ethical</dt>
              <dd className="pl-4 border-l-2 border-border text-muted-foreground mt-1">
                Assessment is free from bias, conflict of interest, and arbitrary decision-making.
                Candidates have the right to fair evaluation and appeals processes.
              </dd>
            </div>
          </dl>

          <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">
            What Assessment Is Not
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The following do not constitute evidence of competency and are not used in certification
            decisions:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
            <li>Attendance or login records</li>
            <li>Content consumption metrics (videos watched, pages viewed)</li>
            <li>Peer ratings or endorsements</li>
            <li>Self-assessment or self-reported skill levels</li>
            <li>Forum participation (unless rubric-evaluated)</li>
            <li>Time spent on platform or in coursework</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Certification decisions are made exclusively on the basis of evaluated performance
            against published standards.
          </p>
        </section>

        {/* Section 2: Three-Level Model */}
        <section id="architecture" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Layers} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 2
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Three-Level Assessment Architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The CAIO assessment system operates across three sequential levels. Candidates cannot
            advance to a higher level without completing the prior level in full.
          </p>

          <DataTable
            headers={['Level', 'Purpose', 'Scope', 'Instruments']}
            rows={[
              [
                'Course-Level',
                'Skill acquisition & knowledge verification',
                'Individual courses (Tier 1 & Tier 2)',
                'Quizzes, demonstrations, rubric-evaluated artifacts',
              ],
              [
                'Domain-Level',
                'Competency validation across domains',
                '8 CAIO competency domains',
                'Portfolio review, cross-course evaluation, domain scoring',
              ],
              [
                'Certification-Level',
                'Certification readiness & credential award',
                'Complete CAIO candidacy',
                'Capstone project, written exam, oral defense',
              ],
            ]}
          />

          <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">
            Assessment Flow
          </h3>
          <ol className="space-y-3 mb-4">
            {[
              'Complete all Tier 1 courses; pass all knowledge checks and activities.',
              'Complete all Tier 2 courses; achieve Proficient or above on all rubric-evaluated artifacts.',
              'Portfolio Readiness Review and Domain-Level Validation across all 8 competency domains.',
              'Enroll as CAIO candidate upon successful domain validation.',
              'Submit capstone project for evaluation.',
              'Sit written examination under proctored conditions.',
              'Complete oral defense before evaluation panel.',
              'Institution reviews all assessment results and makes credential determination.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 3: Tier 1 Standards */}
        <section id="tier1" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={BookOpen} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 3
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Tier 1 Assessment Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Tier 1 courses serve a gatekeeping function. They verify foundational knowledge and basic
            competency required to enter applied coursework. Tier 1 performance does not contribute
            to CAIO certification scoring.
          </p>

          <DataTable
            headers={['Course', 'Assessment Type', 'Passing Standard']}
            rows={[
              [
                'ATS-101: AI Foundations',
                'Multiple-choice knowledge assessment; short-answer reflection',
                '75%; reflection complete',
              ],
              [
                'ATS-102: ChatGPT Fundamentals',
                'Prompt portfolio (3 categories); limitations quiz',
                '75% on quiz; portfolio complete',
              ],
              [
                'ATS-103: AI Tools Overview',
                'Tool Evaluation Matrix (5 tools); knowledge assessment',
                '75%; matrix complete',
              ],
              [
                'ATS-104: AI Productivity',
                'Productivity Audit with metrics; knowledge assessment',
                '75%; audit complete',
              ],
              [
                'ATS-105: AI Careers & Ethics',
                'Ethical Case Analysis (2 scenarios); Career Plan; assessment',
                '75%; both artifacts complete',
              ],
            ]}
          />

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Grading Model
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            All Tier 1 courses are graded <strong>Pass / Not Yet Passed</strong>. There is no
            partial credit. Knowledge assessments permit up to 3 retakes with a 48-hour waiting
            period between attempts. Activity-based assessments permit 1 revision. Upon exhaustion
            of all attempts, candidates must wait 60 days and re-enroll in the course.
          </p>
        </section>

        {/* Section 4: Tier 2 Standards */}
        <section id="tier2" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={ClipboardCheck} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 4
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Tier 2 Assessment Standards
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Tier 2 courses assess applied competence through portfolio artifacts evaluated on a
            standardized 4-level rubric. These artifacts form the foundation of the candidate&apos;s
            professional portfolio and contribute directly to domain-level validation.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Unified Rubric Scale
          </h3>
          <DataTable
            headers={['Level', 'Label', 'Description']}
            rows={[
              [
                '4',
                'Distinguished',
                'Production-ready, exemplary work. Exceeds professional standards. Could serve as a model for others.',
              ],
              [
                '3',
                'Proficient',
                'Meets professional standards. Competent, reliable, suitable for professional use. Minimum for course completion.',
              ],
              [
                '2',
                'Developing',
                'Approaches but does not meet professional standards. Gaps present affecting reliability. Requires revision.',
              ],
              [
                '1',
                'Deficient',
                'Does not approach professional standards. Incomplete or fundamentally incorrect. Substantial work required.',
              ],
            ]}
          />

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg my-6">
            <p className="text-red-800 text-sm font-semibold leading-relaxed">
              Course Pass Rule: Every criterion on every rubric must achieve Level 3 (Proficient) or
              above. There is no averaging. A score of 4 on one criterion does not compensate for a
              score of 2 on another. Artifacts scoring below Level 3 on any criterion are returned
              for revision.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Candidates are permitted 2 revisions per course. Revisions must be substantive —
            cosmetic changes without addressing evaluator feedback do not qualify. Failure to achieve
            Proficient after 2 revisions requires a 30-day waiting period followed by retaking the
            full course.
          </p>
        </section>

        {/* Section 5: Course-Level Rubrics */}
        <section id="rubrics" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={FileText} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 5
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Course-Level Rubrics
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The following rubrics define the evaluation criteria for each Tier 2 course. Each
            artifact is evaluated across 5 criteria on the 4-level proficiency scale. All criteria
            must achieve Level 3 (Proficient) or above for course completion.
          </p>

          {/* ATS-201 */}
          <div className="p-6 rounded-lg border border-border bg-white mb-8 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)] text-[#0f172a] mb-1">
              ATS-201: Prompt Engineering for Business Operations
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Artifact: Organizational Prompt Library (20+ reusable prompts)
            </p>
            <RubricTable
              headers={['Criterion', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
              rows={[
                ['Prompt Structure & Design', 'Vague, unstructured, missing elements', 'Basic structure, inconsistent', 'Clear structure with role/task/format/constraints; consistent methodology', 'Highly optimized; chaining, conditional logic, multi-step'],
                ['Output Reliability', 'Unpredictable, unreliable', 'Some consistency, frequent variation', 'Consistent, controlled; tone/length/format reliable', 'Production-grade with tested edge cases; QA documented'],
                ['Iteration & Version Control', 'No refinement evidence', 'Minimal iteration, no tracking', 'Logical refinement documented; version history maintained', 'Strategic optimization with A/B testing; comprehensive versioning'],
                ['Documentation Quality', 'Incomplete or missing', 'Basic descriptions, unclear instructions', 'Clear instructions, expected outputs, limitations, audience', 'Professional-grade; team deployment ready; troubleshooting guides'],
                ['Organizational Applicability', 'Not professionally relevant', 'Limited applicability, generic', 'Business-ready, aligned to specific functions', 'Enterprise-grade; organized by department; governance guidelines'],
              ]}
            />
          </div>

          {/* ATS-202 */}
          <div className="p-6 rounded-lg border border-border bg-white mb-8 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)] text-[#0f172a] mb-1">
              ATS-202: AI Automation &amp; Workflow Design
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Artifact: AI Workflow Blueprint</p>
            <RubricTable
              headers={['Criterion', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
              rows={[
                ['Process Mapping', 'No clear map; disorganized', 'Basic flow; missing decision points', 'Complete with inputs, outputs, decisions, data flows, bottlenecks', 'Comprehensive with optimization analysis; current vs. improved'],
                ['Automation Logic', 'Broken or absent', 'Partial; triggers/actions incomplete', 'Functional trigger-action-condition with branching and sequencing', 'Robust; parallel processing; dynamic conditions'],
                ['Error Handling', 'None', 'Minimal; happy-path only', 'Appropriate fallback logic and human escalation', 'Comprehensive error taxonomy; graceful degradation'],
                ['Testing & Validation', 'No testing evidence', 'Limited; ideal conditions only', 'Tested normal and edge-case; documented', 'Systematic plan including adversarial; regression testing'],
                ['Documentation & Handoff', 'Incomplete or unusable', 'Basic; gaps in maintenance', 'Clear; enables third-party maintenance', 'Professional ops manual with runbooks and SLA definitions'],
              ]}
            />
          </div>

          {/* ATS-203 */}
          <div className="p-6 rounded-lg border border-border bg-white mb-8 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)] text-[#0f172a] mb-1">
              ATS-203: AI for Business Operations
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Artifact: AI Operations Plan</p>
            <RubricTable
              headers={['Criterion', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
              rows={[
                ['Readiness Assessment', 'None or superficial', 'Basic; missing key dimensions', 'Thorough: infrastructure, workforce, data, culture', 'Comprehensive maturity scoring with gap analysis'],
                ['Solution Alignment', 'Doesn\'t address need', 'Some connection; vague', 'Clear alignment with specific, measurable objectives', 'Strategic alignment with organizational roadmap'],
                ['Implementation Planning', 'None or unrealistic', 'Basic timeline only', 'Phased: timeline, resources, budget, risks', 'Detailed with milestones, gates, contingencies, change management'],
                ['ROI & Impact', 'No metrics', 'Generic; no baseline', 'Appropriate metrics with baseline and methodology', 'Comprehensive framework; leading/lagging indicators'],
                ['Stakeholder Communication', 'None', 'Excessive jargon or inaccurate', 'Clear, accurate for non-technical decision-makers', 'Executive-grade with visualization and recommendations'],
              ]}
            />
          </div>

          {/* ATS-204 */}
          <div className="p-6 rounded-lg border border-border bg-white mb-8 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)] text-[#0f172a] mb-1">
              ATS-204: AI Content &amp; Communication Systems
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Artifact: AI Content System Blueprint
            </p>
            <RubricTable
              headers={['Criterion', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
              rows={[
                ['Content Strategy', 'No coherent strategy', 'Basic; no channel/audience specifics', 'Multi-channel, audience-aligned, brand-voiced', 'Sophisticated with calendar, KPIs, optimization cycle'],
                ['Prompt Templates', 'Vague or unusable', 'Basic; inconsistent output', 'Reliable brand-aligned templates across formats', 'Advanced with tone calibration and audience variants'],
                ['QA System', 'None', 'Basic; no structured criteria', 'Documented workflow with criteria, gates, revision', 'Multi-layer QA with automated checks and quality metrics'],
                ['Editorial Workflow', 'None', 'Informal; unclear roles', 'Structured with roles, handoffs, timelines, escalation', 'Professional editorial ops with version control and audit'],
                ['Governance', 'None', 'Minimal; key policies missing', 'Comprehensive: disclosure, attribution, data handling, acceptable use', 'Enterprise framework with compliance monitoring and incident response'],
              ]}
            />
          </div>

          {/* ATS-205 */}
          <div className="p-6 rounded-lg border border-border bg-white mb-8 shadow-sm">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-playfair)] text-[#0f172a] mb-1">
              ATS-205: AI Tool Integration &amp; System Design
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Artifact: AI System Architecture Document
            </p>
            <RubricTable
              headers={['Criterion', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
              rows={[
                ['Architecture Design', 'No coherent architecture', 'Basic; unclear integration', 'Logical, cohesive with documented rationale', 'Elegant, scalable with migration paths'],
                ['Tool Selection', 'No rationale', 'Basic; missing criteria', 'Documented evaluation: interoperability, cost, security', 'Strategic with TCO modeling and vendor risk'],
                ['Data Flow', 'Unclear or broken', 'Basic; missing dependencies', 'Complete with dependencies, transformations, integrity checks', 'Comprehensive with lineage, validation, monitoring'],
                ['Security & Risk', 'None', 'Minimal attention', 'Documented: access control, data handling, vulnerability', 'Comprehensive with threat modeling and incident procedures'],
                ['Maintenance & Audit', 'None', 'Basic notes only', 'Documented schedule, audit procedures, update protocols', 'Professional ops with dashboards, SLA tracking, capacity planning'],
              ]}
            />
          </div>
        </section>

        {/* Section 6: Domain Validation */}
        <section id="domain-validation" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Award} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 6
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Domain Validation
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Domain validation bridges course-level and certification-level assessment. It evaluates
            whether a candidate has achieved competency across each of the 8 CAIO competency domains
            using evidence drawn from multiple courses and artifacts.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Domain Scoring Model
          </h3>
          <DataTable
            headers={['Score', 'Label', 'Description']}
            rows={[
              ['M', 'Mastery', 'Independent, professional-level competency. Could operate autonomously. Consistently Distinguished performance.'],
              ['C', 'Competent', 'Safe, reliable competency. Sufficient knowledge, skill, and judgment for professional practice. Consistently Proficient or above. Minimum for certification.'],
              ['R', 'Needs Remediation', 'Gaps present. Insufficient evidence for unsupervised practice. Targeted remediation required before proceeding.'],
              ['I', 'Insufficient', 'Fundamental gaps across multiple competency areas. Must retake relevant course(s).'],
            ]}
          />

          <div className="bg-[#fffcf0] border-l-4 border-[var(--gold)] p-5 rounded-r-lg my-6">
            <p className="text-sm font-semibold leading-relaxed">
              Passing: Competent (C) or Mastery (M) on ALL eight domains. A score of R or I on any
              domain blocks advancement to certification-level assessment.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">
            Portfolio Readiness Review
          </h3>
          <ol className="space-y-3 mb-6">
            {[
              'Verify all required artifacts are present and scored Proficient or above on all rubric criteria.',
              'Evaluate aggregate evidence for each of the 8 competency domains across all submitted artifacts.',
              'Assign M, C, R, or I to each domain based on the totality of evidence.',
              'Document rationale for each domain score with specific evidence citations.',
              'Communicate results to the candidate in writing with actionable feedback.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Remediation
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Candidates scoring <strong>R (Needs Remediation)</strong> on any domain receive specific
            feedback identifying competency gaps and targeted remediation activities. Upon
            completion, the domain is reevaluated. Candidates scoring <strong>I
            (Insufficient)</strong> must retake the relevant course(s) in full.
          </p>
        </section>

        {/* Section 7: Capstone */}
        <section id="capstone" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={GraduationCap} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 7
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Capstone Assessment
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The capstone project is the centerpiece of the CAIO certification assessment. It
            requires candidates to integrate all 8 competency domains into a single comprehensive
            project demonstrating professional-level AI operations competency. The capstone carries a
            weight of <strong>40%</strong> in the final certification determination.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Required Deliverables
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
            <li><strong>Organizational Context Analysis</strong></li>
            <li><strong>AI System Design &amp; Architecture</strong></li>
            <li><strong>Implementation Documentation</strong></li>
            <li><strong>Standard Operating Procedures</strong> (minimum 2)</li>
            <li><strong>Ethical &amp; Risk Assessment</strong></li>
            <li><strong>Impact Evaluation</strong></li>
            <li><strong>Stakeholder Communication Package</strong></li>
          </ol>

          <p className="text-muted-foreground leading-relaxed mb-4">
            A missing deliverable results in automatic return of the capstone without evaluation. All
            7 deliverables must be present before the capstone enters the evaluation queue.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Capstone projects are evaluated by a minimum of 2 independent evaluators using the rubric
            defined in Appendix A. All 9 rubric dimensions must achieve Level 3 (Proficient) or
            above. One revision is permitted. Failure to achieve Proficient after revision requires a
            90-day waiting period followed by submission of a new capstone project.
          </p>
        </section>

        {/* Section 8: Written Exam */}
        <section id="written-exam" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={FileText} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 8
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Written Examination
          </h2>

          <DataTable
            headers={['Question Type', 'Count', 'Purpose']}
            rows={[
              ['Multiple-Choice', '60', 'Breadth of knowledge; one correct answer, three distractors'],
              ['Short-Answer', '20', 'Application to specific scenarios; scored 0–2'],
              ['Scenario-Based', '20', 'Complex reasoning, multi-domain integration, professional judgment; scored 0–4'],
            ]}
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Specifications:</strong> 100 questions total, 3-hour time limit, 80% passing
            threshold, minimum 70% per domain, remotely proctored, multiple exam versions drawn from
            a secured item bank. The written examination carries a weight of <strong>30%</strong> in
            the final certification determination.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Domain Weight Distribution
          </h3>
          <DataTable
            headers={['Domain', 'Weight', 'Approx. Questions']}
            rows={[
              ['1. AI Literacy', '10–12%', '10–12'],
              ['2. Prompt Engineering', '12–15%', '12–15'],
              ['3. Workflow & Automation', '12–15%', '12–15'],
              ['4. System Integration', '10–12%', '10–12'],
              ['5. Business Application', '12–15%', '12–15'],
              ['6. Ethics & Governance', '15–18%', '15–18'],
              ['7. Documentation & SOPs', '8–10%', '8–10'],
              ['8. Deployment & Monitoring', '10–12%', '10–12'],
            ]}
          />

          <div className="bg-[#fffcf0] border-l-4 border-[var(--gold)] p-5 rounded-r-lg my-6">
            <p className="text-sm font-semibold leading-relaxed">
              Domain 6 (Ethics &amp; Governance) carries intentionally elevated weight. Ethical
              reasoning is a core professional competency for certified AI operators and is weighted
              accordingly.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            One retake is permitted with a 30-day waiting period. The retake uses a different exam
            version. A second failure requires a 6-month waiting period followed by re-enrollment in
            the certification program.
          </p>
        </section>

        {/* Section 9: Oral Defense */}
        <section id="oral-defense" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Users} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 9
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Oral Defense
          </h2>

          <DataTable
            headers={['Component', 'Duration', 'Focus']}
            rows={[
              ['Capstone Presentation', '20 minutes', 'Clarity, thoroughness, professionalism, logical structure'],
              ['Panel Questions', '20 minutes', 'Depth of understanding, rationale for decisions, alternatives considered, critical thinking under challenge'],
              ['Ethical Scenario', '10 minutes', 'Novel scenario requiring framework application and actionable recommendation'],
            ]}
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            The oral defense panel consists of a minimum of 2 qualified reviewers. Both panelists
            must independently rate the candidate as passing. In the event of a split decision, a
            third panelist is brought in to make the determination. The defense is conducted via live
            video, recorded with candidate consent. The oral defense carries a weight of{' '}
            <strong>30%</strong> in the final certification determination.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Fail Conditions
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-6">
            <li>Candidate cannot explain their own system design or implementation decisions</li>
            <li>Candidate misrepresents AI capabilities or limitations</li>
            <li>Candidate demonstrates ethical blind spots on direct questioning</li>
            <li>Candidate cannot engage constructively with critical challenge or feedback</li>
            <li>Any dimension on the defense rubric scores below Level 3</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            One reattempt is permitted with a 30-day waiting period. The candidate must submit a
            written response addressing evaluator feedback before the reattempt. A second failure
            requires a 6-month waiting period and re-enrollment in the certification program.
          </p>
        </section>

        {/* Section 10: Unified Proficiency Scale */}
        <section id="proficiency-scale" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Scale} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 10
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Unified Proficiency Scale
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The following 4-point proficiency scale is applied identically across all
            rubric-evaluated assessments: Tier 2 course rubrics, the Capstone Rubric (Appendix A),
            and the Oral Defense Rubric (Appendix B). All evaluators are calibrated to this scale.
          </p>

          <DataTable
            headers={['Level', 'Label', 'Description']}
            rows={[
              ['4', 'Distinguished', 'Exceeds professional standards. Exceptional depth, originality, and quality. Could serve as a model for other candidates.'],
              ['3', 'Proficient', 'Meets professional standards. Competent, reliable work suitable for professional use. Minimum for course completion and CAIO certification.'],
              ['2', 'Developing', 'Approaches but does not meet professional standards. Gaps present that affect reliability. Requires revision.'],
              ['1', 'Deficient', 'Does not approach professional standards. Fundamental gaps in understanding or execution. Substantial work required.'],
            ]}
          />
        </section>

        {/* Section 11: Pass / Fail Logic */}
        <section id="pass-fail" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={CheckCircle} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 11
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Pass / Fail Logic
          </h2>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Certification Awarded When ALL Conditions Are Met
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
            <li>All 5 Tier 1 courses passed</li>
            <li>All 5 Tier 2 courses passed with all rubric criteria at Level 3 or above</li>
            <li>All 8 competency domains scored at Competent (C) or Mastery (M)</li>
            <li>Capstone project scored Level 3 or above on all 9 dimensions</li>
            <li>Written examination score of 80% or above overall, with no domain below 70%</li>
            <li>Oral defense scored Level 3 or above on all 6 dimensions by both panelists</li>
          </ol>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Certification Withheld If Any of the Following Apply
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-6">
            <li>Any Tier 1 or Tier 2 course not passed</li>
            <li>Any Tier 2 rubric criterion below Level 3</li>
            <li>Any competency domain scored R or I (unremediated)</li>
            <li>Any capstone dimension below Level 3</li>
            <li>Written exam score below 80% overall or any domain below 70%</li>
            <li>Any oral defense dimension below Level 3</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg my-6">
            <p className="text-red-800 text-sm font-semibold leading-relaxed">
              No compensatory scoring at any level. A Level 4 on System Design does not compensate
              for a Level 2 on Ethics. A 95% exam score does not compensate for a failed oral
              defense. Every competency matters independently.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Weight Summary
          </h3>
          <DataTable
            headers={['Component', 'Weight', 'Passing Standard']}
            rows={[
              ['Portfolio / Domain Review', 'Prerequisite Gate', 'C or M on all 8 domains'],
              ['Capstone Project', '40%', 'Level 3+ on all 9 dimensions'],
              ['Written Examination', '30%', '80% overall; 70% per domain'],
              ['Oral Defense', '30%', 'Level 3+ on all 6 dimensions'],
            ]}
          />
        </section>

        {/* Section 12: Remediation */}
        <section id="remediation" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={RefreshCw} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 12
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Remediation &amp; Reassessment
          </h2>

          <DataTable
            headers={['Assessment', 'Remediation', 'Wait Period', 'After Exhaustion']}
            rows={[
              ['Tier 1 Knowledge Assessments', '3 retakes', '48 hours', '60-day wait; re-enroll in course'],
              ['Tier 1 Activities', '1 revision', 'None', '60-day wait; re-enroll in course'],
              ['Tier 2 Artifacts', '2 revisions', 'None', '30-day wait; retake course'],
              ['Domain Validation', 'Targeted remediation', 'As prescribed', 'Retake relevant course(s)'],
              ['Capstone Project', '1 revision', 'None', '90-day wait; submit new capstone'],
              ['Written Examination', '1 retake', '30 days', '6-month wait; re-enroll'],
              ['Oral Defense', '1 reattempt', '30 days', '6-month wait; re-enroll'],
            ]}
          />

          <p className="text-muted-foreground leading-relaxed">
            All revisions must be substantive. Cosmetic changes without addressing evaluator feedback
            do not qualify as a substantive revision. Candidates who have exhausted standard
            remediation opportunities may petition for additional attempts; petitions are reviewed on
            a case-by-case basis and are not guaranteed.
          </p>
        </section>

        {/* Section 13: Evaluator Standards */}
        <section id="evaluator" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Users} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 13
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Evaluator Standards
          </h2>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Qualifications
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-6">
            <li>Minimum 3 years of relevant professional experience</li>
            <li>Demonstrated domain competence in assigned evaluation areas</li>
            <li>Completed institutional Evaluator Training program</li>
            <li>Familiar with all rubrics, scoring models, and assessment frameworks</li>
            <li>No conflicts of interest with candidates under evaluation</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Responsibilities
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Evaluators are responsible for applying rubrics consistently and without bias, documenting
            all scoring decisions with evidence-based rationale, providing actionable feedback that
            guides candidate improvement, participating in regular calibration sessions, reporting any
            concerns regarding candidate integrity or assessment instrument validity, and maintaining
            strict confidentiality of all candidate materials and results.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Calibration
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            All evaluators undergo an onboarding training program that includes scoring benchmark
            artifacts at each proficiency level. Quarterly calibration sessions ensure ongoing
            alignment. Annual inter-rater reliability analysis targets a Cohen&apos;s kappa of 0.80
            or above. Evaluators whose scores consistently deviate from calibrated standards receive
            additional training or are removed from the evaluation panel.
          </p>
        </section>

        {/* Section 14: Assessment Integrity */}
        <section id="integrity" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Lock} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 14
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Assessment Integrity
          </h2>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Academic Integrity
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            All submitted work must be the candidate&apos;s own. AI tools may be used as instructed
            within the curriculum, but submissions must demonstrate the candidate&apos;s personal
            understanding, judgment, and professional competence. The following constitute violations:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-6">
            <li>Submitting AI-generated work without meaningful personal contribution</li>
            <li>Plagiarism of any form, including uncredited use of others&apos; work</li>
            <li>Fabrication or falsification of data, results, or evidence</li>
            <li>Unauthorized collaboration on individually assessed work</li>
            <li>Sharing exam content, questions, or answers with other candidates</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Exam Security
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Written examinations are remotely proctored with identity verification, screen
            monitoring, and session recording. Multiple exam versions are drawn from a secured item
            bank to prevent content leakage. Any violation of exam security protocols results in
            immediate termination of the exam session and initiation of disciplinary proceedings.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Capstone Originality
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Capstone projects are reviewed for evidence of genuine intellectual engagement.
            Submissions that appear AI-generated without meaningful candidate contribution are
            flagged for additional review and may be rejected. Consequences for integrity violations
            range from assignment failure to program dismissal and credential revocation, depending
            on severity.
          </p>
        </section>

        {/* Section 15: Records & Audit Trail */}
        <section id="records" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Database} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 15
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Records &amp; Audit Trail
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The following records are maintained for every candidate who enters the CAIO
            certification program: portfolio artifacts, capstone projects, completed rubric
            evaluation sheets, domain scoring records, examination results, oral defense recordings,
            remediation and appeals records, and final certification determinations.
          </p>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Retention Schedule
          </h3>
          <DataTable
            headers={['Record Type', 'Retention Period']}
            rows={[
              ['Credential and certification records', 'Indefinite'],
              ['Portfolio and capstone materials', '7 years'],
              ['Rubric evaluation sheets and evaluator notes', '7 years'],
              ['Examination results and item responses', '7 years'],
              ['Oral defense recordings', '5 years'],
              ['Remediation and appeals records', '7 years'],
            ]}
          />

          <p className="text-muted-foreground leading-relaxed">
            All records are encrypted and access-controlled. Candidates may access their own records
            at any time. No third-party access to candidate records is permitted without explicit
            written consent from the candidate.
          </p>
        </section>

        {/* Section 16: Governance & Revision */}
        <section id="governance" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Settings} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Section 16
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Governance &amp; Revision
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Annual review</strong> of all assessment instruments, rubrics, and scoring
              models
            </li>
            <li>
              <strong>Comprehensive review every 2 years</strong> incorporating external stakeholder
              input and industry alignment analysis
            </li>
            <li>
              <strong>Triggered review</strong> in response to significant developments in AI
              technology, regulation, or professional practice
            </li>
            <li>
              <strong>Version control:</strong> candidates are assessed under the version of the
              assessment system in effect at the time of their enrollment; all prior versions are
              archived for a minimum of 7 years
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
            Continuous Improvement
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The assessment system is continuously improved through analysis of: evaluator feedback
            and calibration data, candidate performance patterns, pass/fail rate analysis by
            assessment component, item-level analysis for written examinations, rubric reliability
            metrics, and stakeholder feedback from employers and industry partners.
          </p>
        </section>

        {/* Appendix A: Capstone Rubric */}
        <section id="appendix-a" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={ClipboardCheck} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Appendix A
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Capstone Project Rubric
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All 9 dimensions are evaluated on the 4-point proficiency scale. The candidate must
            achieve Level 3 (Proficient) or above on ALL 9 dimensions. No compensatory scoring.
          </p>

          <RubricTable
            headers={['Dimension', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
            rows={[
              ['Organizational Context', 'Superficial; no clear need identified', 'Basic context; missing key dimensions', 'Thorough analysis with clear opportunity and constraints identified', 'Exceptional depth; maturity assessment; multi-stakeholder analysis'],
              ['System Design', 'Disorganized; no coherent design', 'Basic design; unclear integration points', 'Logical, cohesive system with documented design rationale', 'Elegant, scalable architecture with migration paths'],
              ['Prompt Engineering', 'Weak prompts; unreliable outputs', 'Inconsistent results; limited documentation', 'Controlled, reliable, documented, and tested prompts', 'Optimized with systematic testing methodology'],
              ['Workflow & Automation', 'Broken or absent automation', 'Partial automation; happy-path only', 'Functional automation with error handling and fallback', 'Robust with adversarial testing; graceful degradation'],
              ['Implementation Docs', 'Incomplete; unusable by others', 'Basic documentation; significant gaps', 'Clear documentation; enables third-party replication', 'Professional ops manual with runbooks'],
              ['Ethics & Risk', 'Missing or token treatment', 'Minimal; key risks not addressed', 'Responsible treatment with mitigation and oversight plans', 'Exemplary with proactive identification and governance framework'],
              ['Impact Evaluation', 'No metrics defined', 'Generic metrics; no methodology', 'Appropriate metrics with methodology and honest analysis', 'Comprehensive framework; limitation acknowledgment'],
              ['Stakeholder Communication', 'Absent or incomprehensible', 'Overly technical or inaccurate', 'Clear, accurate communication for non-technical audience', 'Executive-grade with visualization and recommendations'],
              ['Cross-Domain Integration', 'Components disconnected; no coherence', 'Loosely connected; siloed thinking', 'Coherent integration across domains; professional presentation', 'Seamless systems thinking; operational maturity'],
            ]}
          />
        </section>

        {/* Appendix B: Oral Defense Rubric */}
        <section id="appendix-b" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={Shield} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Appendix B
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Oral Defense Rubric
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            All 6 dimensions are evaluated on the 4-point proficiency scale. Both panelists must
            independently rate the candidate at Level 3 (Proficient) or above on all dimensions.
          </p>

          <RubricTable
            headers={['Dimension', '1 — Deficient', '2 — Developing', '3 — Proficient', '4 — Distinguished']}
            rows={[
              ['Presentation Clarity', 'Disorganized; unclear communication', 'Basic organization; some clarity issues', 'Well-organized, clear, professional presentation', 'Compelling; executive-level communication'],
              ['Technical Depth', 'Fundamental inaccuracies present', 'Surface-level understanding; gaps in knowledge', 'Accurate understanding with demonstrated depth', 'Exceptional depth; nuanced trade-off analysis'],
              ['Response to Questions', 'Cannot respond meaningfully; defensive', 'Partial responses; difficulty with challenge', 'Thoughtful responses; engages constructively with challenge', 'Exceptional critical thinking; offers novel insight'],
              ['Decision Rationale', 'Cannot explain design or implementation choices', 'Basic explanations; limited trade-off awareness', 'Clear defense of decisions with trade-off analysis', 'Sophisticated reasoning with awareness of alternatives'],
              ['Ethical Reasoning', 'Fails to identify obvious ethical risks', 'Identifies some risks; weak analysis', 'Systematic framework application; practical recommendations', 'Exemplary; proactive identification; nuanced judgment'],
              ['Communication Ability', 'Jargon-heavy; cannot adapt to audience', 'Some audience adaptation; inconsistent', 'Adapts communication to audience; clear; professional', 'Natural audience adaptation; inspires confidence'],
            ]}
          />
        </section>

        {/* Appendix C: Domain Checklist */}
        <section id="appendix-c" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={ClipboardCheck} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Appendix C
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Domain Validation Checklist
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Evaluators use the following checklist during the Portfolio Readiness Review. Assign M
            (Mastery), C (Competent), R (Needs Remediation), or I (Insufficient) for each domain
            based on aggregate evidence.
          </p>

          <DataTable
            headers={['#', 'Domain', 'Primary Evidence Sources', 'Score']}
            rows={[
              ['1', 'AI Literacy', 'Capstone context analysis; cross-artifact evidence', '____'],
              ['2', 'Prompt Engineering', 'ATS-201 Prompt Library; capstone prompts', '____'],
              ['3', 'Workflow & Automation', 'ATS-202 Workflow Blueprint; capstone automation', '____'],
              ['4', 'System Integration', 'ATS-205 System Architecture; capstone design', '____'],
              ['5', 'Business Application', 'ATS-203 Operations Plan; capstone context/impact', '____'],
              ['6', 'Ethics & Governance', 'ATS-105 Ethics Analysis; ATS-203 risk assessment; capstone ethics', '____'],
              ['7', 'Documentation', 'Quality across all artifacts; ATS-202 handoff; capstone SOPs', '____'],
              ['8', 'Deployment & Monitoring', 'Capstone deployment/monitoring plan; ATS-202 maintenance', '____'],
            ]}
          />
        </section>

        {/* Appendix D: Decision Flowchart */}
        <section id="appendix-d" className="py-16 border-b border-border scroll-mt-24">
          <SectionIcon icon={AlertTriangle} />
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gold)] mb-2">
            Appendix D
          </p>
          <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Certification Decision Flowchart
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The following decision flowchart summarizes the sequential gates a candidate must pass to
            receive the CAIO credential.
          </p>

          {/* Flow Steps */}
          <div className="space-y-0 divide-y divide-border/50">
            {/* Step 1 */}
            <div className="flex gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-lg font-[family-name:var(--font-playfair)] flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Course-Level Gate</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Question:</strong> All Tier 1 and Tier 2 courses passed, all rubric
                  criteria Level 3+?
                </p>
                <p className="text-sm">
                  <span className="text-green-700 font-bold">YES &rarr;</span>{' '}
                  <span className="text-muted-foreground">Proceed to Step 2</span>
                </p>
                <p className="text-sm">
                  <span className="text-red-700 font-bold">NO &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Must complete or remediate. Cannot proceed.
                  </span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-lg font-[family-name:var(--font-playfair)] flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Domain Validation Gate</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Question:</strong> C or M on all eight competency domains?
                </p>
                <p className="text-sm">
                  <span className="text-green-700 font-bold">YES &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Eligible for candidacy. Proceed to Step 3.
                  </span>
                </p>
                <p className="text-sm">
                  <span className="text-red-700 font-bold">NO &rarr;</span>{' '}
                  <span className="text-muted-foreground">Domain remediation required.</span>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-lg font-[family-name:var(--font-playfair)] flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Capstone Evaluation</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Question:</strong> Level 3+ on all nine capstone dimensions?
                </p>
                <p className="text-sm">
                  <span className="text-green-700 font-bold">YES &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Capstone accepted. Proceed to Step 4.
                  </span>
                </p>
                <p className="text-sm">
                  <span className="text-red-700 font-bold">NO &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Returned for revision per remediation policy.
                  </span>
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-lg font-[family-name:var(--font-playfair)] flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1">Written Examination</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Question:</strong> 80%+ overall, no domain below 70%?
                </p>
                <p className="text-sm">
                  <span className="text-green-700 font-bold">YES &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Examination passed. Proceed to Step 5.
                  </span>
                </p>
                <p className="text-sm">
                  <span className="text-red-700 font-bold">NO &rarr;</span>{' '}
                  <span className="text-muted-foreground">Retake per remediation policy.</span>
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-lg font-[family-name:var(--font-playfair)] flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="font-semibold mb-1">Oral Defense</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Question:</strong> Level 3+ on all six dimensions from both panelists?
                </p>
                <p className="text-sm">
                  <span className="text-green-700 font-bold">YES &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Defense passed. Proceed to Step 6.
                  </span>
                </p>
                <p className="text-sm">
                  <span className="text-red-700 font-bold">NO &rarr;</span>{' '}
                  <span className="text-muted-foreground">
                    Reattempt per remediation policy.
                  </span>
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-4 py-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center text-lg font-[family-name:var(--font-playfair)] flex-shrink-0">
                6
              </div>
              <div>
                <h4 className="font-semibold mb-1">Certification Determination</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Question:</strong> All five gates passed?
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-3">
                  <p className="text-green-800 text-sm font-semibold">
                    YES: CAIO credential awarded. Digital certificate issued with unique verification
                    number.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                  <p className="text-red-800 text-sm font-semibold">
                    NO: Credential withheld. Candidate follows the applicable remediation pathway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <section className="bg-[#0f172a] text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-white/50 mb-4">
            AI Trade School &mdash; Assessment &amp; Validation System &mdash; Version 1.0 &mdash;
            Academic Year 2026–2027
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-white/30">End of Document</p>
        </div>
      </section>
    </div>
  );
}
