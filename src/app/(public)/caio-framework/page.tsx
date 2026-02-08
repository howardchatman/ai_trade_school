import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import {
  Target,
  Shield,
  Layers,
  Award,
  BookOpen,
  Monitor,
  ClipboardCheck,
  FileText,
  Settings,
  BarChart3,
  Scale,
  Users,
  RefreshCw,
  CheckCircle,
} from 'lucide-react';

export const metadata = {
  title: 'CAIO Certification Standards & Competency Framework | AI Trade School',
  description:
    'Certified AI Operator (CAIO) — Certification standards, competency domains, assessment requirements, and credential policies.',
};

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] mb-4">
      <Icon className="h-5 w-5" />
    </div>
  );
}

function DomainCard({
  number,
  title,
  description,
  competencies,
  behaviors,
  badge,
}: {
  number: number;
  title: string;
  description: string;
  competencies: string[];
  behaviors: string[];
  badge: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-white mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-lg bg-[#0f172a] text-[var(--gold)] flex items-center justify-center font-semibold text-lg font-[family-name:var(--font-playfair)]">
          {number}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
        Competencies
      </h4>
      <ul className="space-y-1.5 mb-5">
        {competencies.map((c, i) => (
          <li key={i} className="text-sm text-foreground flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#8226;</span>
            {c}
          </li>
        ))}
      </ul>
      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
        Observable Behaviors
      </h4>
      <ul className="space-y-1.5 mb-5">
        {behaviors.map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-muted-foreground/50 mt-0.5">&#8226;</span>
            {b}
          </li>
        ))}
      </ul>
      <div className="inline-block text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1 rounded">
        {badge}
      </div>
    </div>
  );
}

export default function CaioFrameworkPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[var(--gold)] uppercase tracking-wider mb-4">
              Certification Standards &amp; Competency Framework
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2 font-[family-name:var(--font-playfair)]">
              Certified AI Operator (CAIO)
            </h1>
            <p className="text-sm text-slate-400 mb-6">
              Version 1.0 &middot; Academic Year 2026&ndash;2027 &middot; Effective August 1, 2026
            </p>
            <div className="w-16 h-0.5 bg-[var(--gold)] mb-6" />
            <div className="border-l-[3px] border-[var(--gold)] pl-5 py-2 mb-8">
              <p className="text-slate-300 italic leading-relaxed">
                This document establishes the competency standards, assessment requirements,
                and certification criteria for the Certified AI Operator (CAIO) professional
                credential. It serves as the authoritative reference for all CAIO certification
                decisions.
              </p>
            </div>
            <Button
              size="lg"
              asChild
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold"
            >
              <Link href={ROUTES.CAIO_FRAMEWORK}>Download Framework (PDF)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Purpose & Scope */}
      <section id="purpose" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Target} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Purpose &amp; Scope
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Certified AI Operator (CAIO) credential validates that a holder possesses
              the applied skills, professional judgment, ethical reasoning, and operational
              competence required to deploy, manage, document, monitor, and maintain artificial
              intelligence systems in real organizational environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The CAIO addresses a critical workforce gap. While certifications exist for
              AI engineers, data scientists, and developers, no widely recognized credential
              validates the competence of professionals who operate AI systems at the
              organizational level &mdash; selecting, configuring, integrating, documenting,
              governing, and optimizing AI tools and workflows without necessarily building
              or training the underlying models.
            </p>
            <p className="text-sm text-muted-foreground">
              This document supplements the AI Trade School Program Handbook. In the event
              of conflict, this framework governs all CAIO certification matters.
            </p>
          </div>
        </div>
      </section>

      {/* Credential Classification */}
      <section id="classification" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Award} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Credential Classification
            </h2>
            <div className="overflow-x-auto border border-border rounded-lg mb-8">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Credential Type', 'Professional Workforce Certification'],
                    ['Credential Name', 'Certified AI Operator (CAIO)'],
                    ['Issuing Institution', 'AI Trade School'],
                    ['Competency Level', 'Intermediate\u2013Advanced Operator'],
                    ['Assessment Basis', 'Competency-based (demonstrated mastery, not seat time)'],
                    ['Credential Format', 'Digital certificate with unique verification number'],
                    ['Regulatory Status', 'Non-governmental; not a required license'],
                  ].map(([attr, spec], i) => (
                    <tr key={attr} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 font-medium text-foreground border-b border-border w-1/3">{attr}</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border">{spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-4">Target Professional Roles</h3>
            <ul className="space-y-2 mb-6">
              {[
                ['AI Operator (primary role)', 'Deploy, configure, manage, document, and optimize AI systems'],
                ['AI Systems Specialist', 'Integrated tool ecosystems and multi-tool architectures'],
                ['Automation Operator', 'AI-augmented automated workflows'],
                ['AI Operations Manager', 'Oversee AI operations across teams'],
                ['Business AI Implementation Lead', 'Translate organizational needs into AI solutions'],
                ['AI Governance Coordinator', 'AI use policies, risk assessments'],
              ].map(([role, desc]) => (
                <li key={role} className="text-sm">
                  <span className="font-medium text-foreground">{role}:</span>{' '}
                  <span className="text-muted-foreground">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certification Philosophy */}
      <section id="philosophy" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Scale} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Certification Philosophy
            </h2>
            {[
              {
                num: '1',
                title: 'Competency Over Completion',
                desc: 'Awarded on demonstrated competency, not course completion, seat hours, or time. A candidate who completes all coursework but fails any domain will not receive certification. Every holder met the same rigorous standard.',
              },
              {
                num: '2',
                title: 'Demonstration Over Declaration',
                desc: 'Competency through observable, evaluable work products and performances \u2014 not self-assessment or declarations. Portfolio artifacts, capstone project, written exam, oral defense. Evaluators assess what the candidate can do, not what they claim to know.',
              },
              {
                num: '3',
                title: 'Systems Over Tools',
                desc: 'Systems-level thinking \u2014 integrated architectures, data flow, multi-tool ecosystems, organizational alignment \u2014 not just single-tool proficiency. As tools evolve, systems competence remains transferable.',
              },
              {
                num: '4',
                title: 'Ethics Over Speed',
                desc: 'Ethical reasoning and professional judgment are core competencies, not supplements. Exceptional technical skill with inadequate ethical reasoning means no certification. The holder slows down, questions assumptions, applies frameworks, and prioritizes responsible over rapid deployment. Non-negotiable.',
              },
            ].map((p) => (
              <div key={p.num} className="flex gap-4 py-5 border-b border-border last:border-b-0">
                <div className="w-9 h-9 min-w-[36px] rounded-full border-2 border-[var(--gold)] text-[var(--gold)] flex items-center justify-center text-sm font-semibold bg-amber-50/50">
                  {p.num}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{p.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={CheckCircle} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Eligibility &amp; Prerequisites
            </h2>
            <ol className="space-y-2 mb-6 list-decimal list-inside">
              <li className="text-sm text-foreground">Completion of all Tier 1 foundational courses and receipt of the AI Literacy Certificate</li>
              <li className="text-sm text-foreground">Completion of all Tier 2 core applied courses and receipt of the Applied AI Practitioner Certificate</li>
              <li className="text-sm text-foreground">Complete professional portfolio with all Tier 2 artifacts rated Competent</li>
              <li className="text-sm text-foreground">Formal enrollment in CAIO candidacy and payment of certification fee</li>
            </ol>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Portfolio Readiness Review:</strong> The institution verifies all artifacts are present and meet standards before candidates proceed to the capstone phase.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Time Limit:</strong> 12 months maximum from candidacy enrollment. Extensions of up to 6 months for documented circumstances. Expired candidacy requires re-enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section id="domains" className="py-16 bg-[#0f172a] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <SectionIcon icon={Layers} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-white">
              Eight Competency Domains
            </h2>
            <p className="text-slate-300">
              All eight domains are required. None may be waived. Assessed through portfolio,
              capstone, written exam, and oral defense.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
            {[
              { n: 1, t: 'AI Literacy & Operational Understanding', icon: BookOpen },
              { n: 2, t: 'Prompt Engineering & Human\u2013AI Interaction', icon: Monitor },
              { n: 3, t: 'AI Workflow & Automation Design', icon: Settings },
              { n: 4, t: 'AI System Integration & Architecture', icon: Layers },
              { n: 5, t: 'Business & Operational Application', icon: BarChart3 },
              { n: 6, t: 'Governance, Ethics & Risk Management', icon: Shield },
              { n: 7, t: 'Documentation, SOPs & Knowledge Transfer', icon: FileText },
              { n: 8, t: 'Deployment, Monitoring & Optimization', icon: RefreshCw },
            ].map((d) => (
              <div key={d.n} className="flex items-center gap-3 p-4 rounded-lg border border-slate-700 bg-slate-800/50">
                <div className="w-9 h-9 min-w-[36px] rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center text-sm font-bold">
                  {d.n}
                </div>
                <span className="text-sm text-slate-200 font-medium">{d.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Framework */}
      <section id="framework" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Detailed Competency Framework
            </h2>
          </div>
          <div className="max-w-4xl">
            <DomainCard
              number={1}
              title="AI Literacy & Operational Understanding"
              description="Understand AI capabilities, limitations, and operational context for responsible deployment and accurate stakeholder communication."
              competencies={[
                'Explain AI capabilities, constraints, and failure modes in plain language for non-technical audiences',
                'Distinguish between AI, ML, rule-based automation, and traditional software with practical implications',
                'Identify appropriate AI use cases vs. non-AI solutions',
                'Describe LLM architecture (token limits, context windows, temperature, hallucination) at operational decision level',
                'Assess tool maturity, reliability, and operational readiness using structured criteria',
                'Explain organizational AI adoption implications: workforce impact, change management',
              ]}
              behaviors={[
                'Selects appropriate tools; avoids tool-first thinking',
                'Identifies tasks unsuitable for AI with clear reasoning',
                'Communicates without overpromising or underpromising',
                'Recognizes output errors, hallucinations, quality degradation',
                'Avoids over-automation and misapplication',
                'Maintains current industry awareness',
              ]}
              badge="Operational Literacy with Accurate Judgment"
            />
            <DomainCard
              number={2}
              title="Prompt Engineering & Human\u2013AI Interaction"
              description="Design, structure, test, refine, and document AI interactions for consistent, high-quality outputs. Reliability over novelty."
              competencies={[
                'Role-based task-specific prompts using structured frameworks (role-task-format-constraint)',
                'Output constraints: formatting, length, tone, audience, factual accuracy',
                'Multi-step prompt sequences and chaining',
                'Systematic testing: controlled variation, edge cases, adversarial inputs',
                'Iterate and refine with version control and performance documentation',
                'Reusable documented prompt libraries for organizational deployment',
                'Context management across extended interactions',
                'Cross-platform prompt adaptation',
              ]}
              behaviors={[
                'Consistent high-quality outputs across repeated uses',
                'Deliberate control over tone, format, length, audience, factual content',
                'Identifies and corrects failures and hallucinations systematically',
                'Documents with instructions, expected outputs, limitations, guidelines',
                'Version control and iterative improvement',
                'Consistent methodology, not ad-hoc',
              ]}
              badge="Advanced Operational Prompting"
            />
            <DomainCard
              number={3}
              title="AI Workflow & Automation Design"
              description="Design AI-assisted workflows integrating AI into organizational processes, from concept through implementation to documented handoff."
              competencies={[
                'Map workflows identifying decision points, manual steps, data flows, bottlenecks',
                'Identify and prioritize automation opportunities: impact, feasibility, risk, readiness',
                'Design trigger-action-condition logic with AI decision points and branching',
                'Implement error handling, fallback logic, human-in-the-loop escalation',
                'Build multi-step automated workflows using Zapier, Make, or equivalent',
                'Test under normal, edge-case, and failure conditions',
                'Document for handoff, maintenance, troubleshooting',
              ]}
              behaviors={[
                'Measurably reduces manual effort',
                'Identifies failure points before deployment',
                'Designs with error handling, not ideal assumptions',
                'Documents completely: triggers, actions, errors, maintenance',
                'Avoids brittle silent-failure automation',
                'Tests adversarial and edge cases',
              ]}
              badge="Independent Workflow Design Capability"
            />
            <DomainCard
              number={4}
              title="AI System Integration & Architecture"
              description="Integrate multiple AI tools into cohesive architectures. System-level thinking, not software engineering."
              competencies={[
                'Multi-tool architecture design with tool selection rationale and integration points',
                'Describe data flow between tools, platforms, and data sources at operational level',
                'Evaluate tools: interoperability, scalability, security, data handling, cost, fit',
                'Configure integrations: APIs, native connectors, automation platforms, webhooks',
                'Document: diagrams, data flow maps, tool inventories, integration specs',
                'Plan and execute system audits',
              ]}
              behaviors={[
                'Connects tools logically with documented dependencies',
                'Avoids unnecessary complexity',
                'Documents for third-party maintenance',
                'Identifies data integrity and security risks',
                'Selects on requirements, not preference',
                'Cost and scalability awareness',
              ]}
              badge="System-Level Thinking (Non-Coding)"
            />
            <DomainCard
              number={5}
              title="Business & Operational Application"
              description="Apply AI to real organizational needs, translate requirements into solutions, evaluate ROI, communicate value."
              competencies={[
                'AI readiness assessments: infrastructure, workforce, data, culture',
                'Translate business problems into specific, measurable AI specifications',
                'Phased implementation plans: timelines, resources, budgets, risks, success criteria',
                'Evaluate and communicate ROI and operational impact',
                'Vendor evaluation, selection, onboarding',
                'Communicate to non-technical stakeholders clearly and accurately',
                'Align with change management requirements',
              ]}
              behaviors={[
                'Addresses genuine problems, not novelty deployment',
                'Realistic phased plans with constraints',
                'Communicates without overselling or underselling',
                'Evaluates vendors on fit, not marketing',
                'Measures with relevant defensible metrics',
                'Recognizes when AI is not the answer',
              ]}
              badge="Business-Aligned AI Deployment"
            />
            <DomainCard
              number={6}
              title="Governance, Ethics & Risk Management"
              description="Deploy AI responsibly: ethics, privacy, bias, accountability, organizational risk. Inadequate ethics = no certification regardless of technical skill."
              competencies={[
                'Identify ethical risks: bias amplification, privacy violations, consent failures, transparency deficits, accountability gaps',
                'Apply frameworks: fairness, transparency, accountability, non-maleficence, human autonomy',
                'Implement human oversight: human-in-the-loop, escalation, override procedures',
                'Structured risk assessments: probability, severity, mitigation',
                'Develop organizational AI use policies: acceptable use, disclosure, data handling, incident response',
                'Recognize and mitigate algorithmic bias: training data, selection, measurement, aggregation',
                'Ensure appropriate AI use disclosure',
                'Monitor regulatory developments and governance standards',
              ]}
              behaviors={[
                'Discloses AI use proactively',
                'Avoids high-risk deployments without assessment, oversight, safeguards',
                'Documents ethics and governance for every significant deployment',
                'Raises concerns proactively',
                'Recommends against deployment when risks outweigh benefits',
                'Applies frameworks consistently, not selectively',
              ]}
              badge="Responsible AI Judgment"
            />
            <DomainCard
              number={7}
              title="Documentation, SOPs & Knowledge Transfer"
              description="Document at professional standard enabling continuity, maintenance, auditing, knowledge transfer. An undocumented system is unmanageable."
              competencies={[
                'SOPs enabling operation by personnel not involved in original design',
                'Workflow documentation: triggers, actions, decision logic, error handling, dependencies',
                'Architecture documentation: tool inventories, integration specs, data flow diagrams, maintenance schedules',
                'User-facing documentation and training for non-technical users',
                'Version control for all documentation',
                'Documentation supporting compliance, auditing, regulatory review',
              ]}
              behaviors={[
                'Clear, complete, usable without verbal supplement',
                'Enables handoff without disruption',
                'Updates when systems change',
                'Consistent version control',
                'Adjusts technical level for audience',
                'Treats documentation as concurrent, not afterthought',
              ]}
              badge="Professional Documentation Standards"
            />
            <DomainCard
              number={8}
              title="Deployment, Monitoring & Optimization"
              description="Move systems to production, monitor performance, identify degradation, improve continuously. Deployment is the beginning of operational management."
              competencies={[
                'Deploy with documented procedures: staged rollout, testing, stakeholder notification',
                'Monitoring frameworks: performance, output quality, usage, error rates, satisfaction',
                'Identify degradation, drift, failure modes through systematic monitoring',
                'Corrective actions: prompt refinement, workflow adjustment, reconfiguration, escalation',
                'Periodic reviews and audits for alignment and quality',
                'Optimize through iterative refinement from data and feedback',
                'Plan updates, migrations, decommissions with documentation and continuity',
              ]}
              behaviors={[
                'Structured deployment, not ad-hoc',
                'Identifies drift and degradation before harm',
                'Adjusts based on documented analysis',
                'Maintains reliability over time',
                'Documents all deployment, monitoring, optimization',
                'Communicates status proactively',
              ]}
              badge="Operational Ownership"
            />
          </div>
        </div>
      </section>

      {/* Assessment Model */}
      <section id="assessment" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={ClipboardCheck} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Assessment Model
            </h2>
            <p className="text-muted-foreground mb-6">
              Failure in any single component prevents certification, regardless of performance on other components.
            </p>
            <div className="overflow-x-auto border border-border rounded-lg mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0f172a] text-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Component</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Weight</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Passing Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Portfolio Review', 'Prerequisite gate', 'All artifacts Competent'],
                    ['Capstone Project', '40%', 'Competent on all rubric dimensions'],
                    ['Written Examination', '30%', '80% overall; 70% per domain'],
                    ['Oral Defense', '30%', 'Pass on all criteria'],
                  ].map(([comp, weight, std], i) => (
                    <tr key={comp} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 font-medium border-b border-border">{comp}</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border">{weight}</td>
                      <td className="px-4 py-3 text-muted-foreground border-b border-border">{std}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-4">Capstone Project</h3>
            <p className="text-sm text-muted-foreground mb-3">Seven required deliverables:</p>
            <ol className="space-y-1.5 mb-8 list-decimal list-inside text-sm">
              <li>Organizational Context Analysis</li>
              <li>AI System Design &amp; Architecture</li>
              <li>Implementation Documentation</li>
              <li>Standard Operating Procedures (minimum 2)</li>
              <li>Ethical &amp; Risk Assessment</li>
              <li>Impact Evaluation</li>
              <li>Stakeholder Communication Package</li>
            </ol>

            <h3 className="text-xl font-semibold mb-4">Written Examination</h3>
            <p className="text-sm text-muted-foreground mb-3">
              100 questions (60 MC, 20 short-answer, 20 scenario-based). 3 hours. Online proctored.
              80% overall with 70% minimum per domain.
            </p>

            <h3 className="text-xl font-semibold mb-4">Oral Defense</h3>
            <p className="text-sm text-muted-foreground mb-1">
              Project Presentation (20 min) + Panel Questions (20 min) + Ethical Scenario (10 min).
            </p>
            <p className="text-sm text-muted-foreground">
              Minimum 2 reviewers; both must independently rate Pass. Live video conference, recorded.
            </p>
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section id="proficiency" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={BarChart3} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Proficiency Levels
            </h2>
            <div className="overflow-x-auto border border-border rounded-lg mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0f172a] text-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider w-12">Rating</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider w-28">Level</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 font-bold border-b border-border">4</td><td className="px-4 py-3 font-medium border-b border-border">Exemplary</td><td className="px-4 py-3 text-muted-foreground border-b border-border">Exceeds professional standards. Exceptional depth, originality, and sophistication.</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-bold border-b border-border">3</td><td className="px-4 py-3 font-medium border-b border-border">Competent</td><td className="px-4 py-3 text-muted-foreground border-b border-border">Meets professional standards. <strong>Minimum for certification.</strong></td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-bold border-b border-border">2</td><td className="px-4 py-3 font-medium border-b border-border">Developing</td><td className="px-4 py-3 text-muted-foreground border-b border-border">Approaches but does not meet standards. Partial competence with gaps. Requires revision.</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-bold border-b border-border">1</td><td className="px-4 py-3 font-medium border-b border-border">Beginning</td><td className="px-4 py-3 text-muted-foreground border-b border-border">Does not approach standards. Fundamental gaps. Substantial additional work needed.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="border-l-4 border-red-600 bg-red-50 p-4 rounded-r-md">
              <p className="text-sm text-red-800">
                <strong>No averaging or compensatory scoring.</strong> A rating of 2 or 1 on any
                dimension results in certification failure regardless of other ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credential Policies */}
      <section id="policies" className="py-16 bg-[#0f172a] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionIcon icon={Users} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-white">
              Credential Policies
            </h2>

            <h3 className="text-lg font-semibold text-white mb-3">Award &amp; Designation</h3>
            <p className="text-slate-300 text-sm mb-6">
              The CAIO credential is awarded upon successful completion of all four assessment
              components. Holders may use &ldquo;CAIO&rdquo; after their name while the credential is active.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Remediation</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-slate-300"><strong className="text-slate-200">Capstone:</strong> 1 revision with feedback. If revision fails, 90-day wait + new capstone.</li>
              <li className="text-sm text-slate-300"><strong className="text-slate-200">Written Exam:</strong> 1 retake, 30-day wait, different version. Second failure = 6-month wait + re-enrollment.</li>
              <li className="text-sm text-slate-300"><strong className="text-slate-200">Oral Defense:</strong> 1 reattempt, 30-day wait, written response to feedback required.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Revocation</h3>
            <p className="text-slate-300 text-sm mb-2">The credential may be revoked for:</p>
            <ul className="space-y-1 mb-6">
              <li className="text-sm text-slate-400 flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#8226;</span>Academic dishonesty or fraud</li>
              <li className="text-sm text-slate-400 flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#8226;</span>Credential misrepresentation</li>
              <li className="text-sm text-slate-400 flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#8226;</span>Material ethical violations in professional AI practice</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Framework Governance</h3>
            <p className="text-slate-300 text-sm">
              Annual review of all domains and standards. Comprehensive biennial review with external
              input. Triggered review for significant AI industry developments. Candidates assessed
              on the framework version at enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Begin Your Path to CAIO
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with free foundational courses. Progress through applied training.
              Earn the Certified AI Operator credential.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                asChild
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[#0f172a] font-semibold"
              >
                <Link href={ROUTES.SIGNUP}>Start Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={ROUTES.HANDBOOK}>View Academic Framework</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
