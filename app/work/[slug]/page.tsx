import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Study = {
  title: string;
  signal: string;
  type: string;
  intro: string;
  question: string;
  status: string;
  role: string;
  team: string;
  timeline: string;
  stats: { value: string; label: string }[];
  constraints: string[];
  decisions: { title: string; body: string }[];
  sections: { eyebrow: string; title: string; body: string; bullets?: string[] }[];
  flow: string[];
  next: string;
};

const studies: Record<string, Study> = {
  "agentic-platform": {
    title: "Enterprise agentic platform",
    signal: "Leadership · Enterprise architecture · Delivery",
    type: "Client work · Details anonymised",
    intro: "A six-month enterprise delivery that turned four related AI use cases into the foundation of a reusable organisational platform.",
    question: "How do you deliver four AI use cases now—without creating four disconnected systems that make the next four just as expensive?",
    status: "Deployed and handed to client technology",
    role: "Product vision · Architecture · Scope · Timelines · Client communication",
    team: "Five people · Full-stack, AI and DevOps engineering",
    timeline: "Approximately six months",
    stats: [
      { value: "4", label: "initial use cases" },
      { value: "5", label: "person delivery team" },
      { value: "12→4", label: "weeks for comparable reuse" },
    ],
    constraints: [
      "Data access and development-platform permissions",
      "Moving stakeholder expectations and scope pressure",
      "Four related use cases that still needed distinct working products",
      "A late request to pivot the implementation architecture",
    ],
    decisions: [
      { title: "Protect delivery with explicit scope", body: "The brief could move faster than the schedule. I worked with the client to define boundaries tightly enough for the team to finish working products rather than accumulate an expanding set of promises." },
      { title: "Design the platform hiding inside the projects", body: "Frontend, backend and agentic concerns were separated behind clear modular boundaries. Shared interaction, memory, caching, evaluation and access-control patterns could then serve multiple use cases instead of being rebuilt inside each one." },
      { title: "Prioritise functional quality", body: "The product needed to work reliably before it needed an elaborate interface. We kept the experience presentable and usable without letting ornamental complexity consume the delivery schedule." },
      { title: "Absorb a late pivot without sacrificing the original path", body: "When the client requested a different architecture near the end, I kept the stable, nearly complete implementation moving and assigned one engineer to reproduce it through the requested approach in parallel. Both were handed over; the original remained our recommended path." },
    ],
    flow: ["Use-case discovery", "Shared product patterns", "Modular platform", "Golden-set evaluation", "End-user UAT", "Technology handover"],
    sections: [
      { eyebrow: "Context", title: "Start with one function. Build for the organisation.", body: "The client wanted to improve productivity with AI-enabled work tools, beginning inside one priority business function. Use-case discovery with its leadership produced four high-priority opportunities with overlapping needs. The immediate brief was delivery; the larger ambition was a platform that other functions could eventually join." },
      { eyebrow: "My role", title: "Own the joins between product, architecture and delivery.", body: "I led a five-person team spanning full-stack, AI and DevOps engineering. I owned product vision, architecture, scope, timelines and client communication—the decisions that sit between a technically plausible system and one a client can actually receive." },
      { eyebrow: "Reliability", title: "Model output needed evidence and end-user judgement.", body: "We evaluated agent performance against an internal golden test set, then ran an extensive UAT phase with end users. Their feedback exposed where outputs needed to become more robust, and the system was iterated against both controlled tests and real workflows." },
      { eyebrow: "Outcome", title: "Four deployed use cases—and a faster path to the next set.", body: "The initial solutions were handed to the client’s technology organisation, with the priority business function as the first user group. The reusable framework later enabled another team to deliver comparable use cases in roughly four weeks, against a previous cycle of approximately twelve." },
      { eyebrow: "Retrospective", title: "Bring end users and acceptance criteria forward.", body: "I would define acceptance criteria more rigorously and involve end users earlier. Senior stakeholders were the primary feedback channel for too long; earlier contact with the people doing the work would have reduced ambiguity and improved the path into UAT." },
    ],
    next: "jose",
  },
  jose: {
    title: "José",
    signal: "Agent architecture · Safety boundaries · Independent build",
    type: "Learning build · Active development",
    intro: "A working coding-agent harness exploring whether better system boundaries can make smaller models useful for real software maintenance.",
    question: "Can a deterministic harness make local, lower-cost models useful without asking the model to police or certify itself?",
    status: "Working core · Tested on one repository",
    role: "Concept · Architecture · Implementation",
    team: "Independent build",
    timeline: "In active development",
    stats: [
      { value: "1 issue", label: "authorised input" },
      { value: "1 PR", label: "tested output" },
      { value: "0", label: "autonomous merges" },
    ],
    constraints: [
      "Current testing is limited to one repository and basic bug fixes",
      "Smaller models require stronger failure and review boundaries",
      "Repository code, issues and logs must be treated as untrusted input",
      "Work must stop predictably when authority, verification or budgets fail",
    ],
    decisions: [
      { title: "The controller owns authority", body: "A typed Python controller advances the lifecycle, grants capabilities, enforces limits and decides whether submission gates pass. The model can propose actions; it cannot enlarge its authority or declare success." },
      { title: "Permission is explicit and revocable", body: "Only an enrolled, open, unassigned issue carrying the ready-for-agent label is eligible. Removing that authority during a run stops further work at the next safe boundary." },
      { title: "Every attempt is disposable", body: "Edits and tests run in an isolated, non-root Docker environment without host credentials or a mounted Docker socket. Trust changes network capability—not whether isolation exists." },
      { title: "Human review is the delivery boundary", body: "José may prepare a ready-for-review pull request. Merge, self-approval, protected-branch pushes and production-secret access are permanently prohibited rather than left to model judgement." },
    ],
    flow: ["Validate authority", "Record baseline", "Investigate", "Plan + clarify", "Edit + retry", "Reverify + handoff"],
    sections: [
      { eyebrow: "The motivation", title: "Learn the harness, not only the model.", body: "José began as a way to understand the machinery around a coding agent: lifecycle, permissions, context, isolation, retries and evidence. The longer-term bet is that local models can become practical collaborators when privacy, connectivity or cost makes frontier models undesirable or unavailable." },
      { eyebrow: "Implemented architecture", title: "Deterministic where authority matters. Model-driven where judgement helps.", body: "The Python 3.12 controller owns a fixed path from validation and baseline through investigation, editing, verification, integration and submission. A pinned model proposes typed plans and patches. It cannot advance state, change policy or budgets, certify checks, or authorise the pull request." },
      { eyebrow: "Failure handling", title: "Retry with evidence. Stop without pretending.", body: "Compiler errors, test failures and stack traces feed bounded correction attempts. José inspects the evidence, revises its work and tries again; three materially identical failures stop the run. If ambiguity permits different fixes, it asks one focused clarification and blocks until authority is restored." },
      { eyebrow: "Current evidence", title: "A working core, deliberately narrow.", body: "The current implementation has been tested on one repository and handles basic bug fixes. It can investigate an authorised issue, request clarification, edit and test in isolation, integrate the target branch, reverify and prepare a pull request for review. That is meaningful—but it is not yet general feature delivery." },
      { eyebrow: "What is next", title: "Observe and evaluate before teaching the system to evolve.", body: "The next milestones are an evaluation and observability dashboard, followed by controlled personalisation and evolution. The design requires candidates to be benchmarked and explicitly promoted by a human; automatic self-modification is not a current capability." },
      { eyebrow: "What I am learning", title: "Better models do not make systems design optional.", body: "Building José has reinforced that scalable AI-assisted development still needs deliberate lifecycle design, typed boundaries, extension points and failure handling. Smaller models are becoming more capable, but the surrounding system determines how safely that capability can become useful." },
    ],
    next: "tandem",
  },
  tandem: {
    title: "Tandem",
    signal: "Product judgement · Human behaviour · Independent build",
    type: "Working POC · Used at home",
    intro: "An opinionated household-finance product that replaces restrictive budgets with one present-tense question: what is safe for us to spend today?",
    question: "How do two people become more mindful about money without turning daily life into a permanent budgeting exercise?",
    status: "Working POC · In regular household use",
    role: "Product · Design · Full-stack implementation",
    team: "Independent build · Two active household users",
    timeline: "Iterated through real use",
    stats: [
      { value: "2", label: "people by design" },
      { value: "2", label: "working entry paths" },
      { value: "1", label: "household decision number" },
    ],
    constraints: [
      "Finance logging had to stay lightweight enough for regular use",
      "Two users share commitments while retaining individual attribution",
      "Different phone ecosystems made a shared web starting point simpler",
      "The POC needed privacy without bank linking or SMS permissions",
    ],
    decisions: [
      { title: "Lead with Safe to Spend", body: "A retrospective dashboard was not enough. The central output became a dynamic household number that answers whether discretionary spending is sensible today without imposing a rigid daily budget." },
      { title: "Make the calculation explainable", body: "Income is reduced by fixed costs, investments, active goal contributions, an emergency buffer and spending so far, then spread over the days remaining. Daily and weekly views share the same transparent breakdown." },
      { title: "Use AI to remove input friction", body: "Free-form text becomes a proposed amount, category, description, date and buffer flag for confirmation. Manual entry remains available; the model does not write opaque output directly into the ledger." },
      { title: "Defer automatic financial access", body: "Bank linking and SMS scraping were excluded from the POC to avoid permission, privacy and implementation overhead. The first goal was a habit worth sustaining, not maximum data ingestion." },
    ],
    flow: ["Text or manual entry", "Structured confirmation", "Shared household ledger", "Commitments + goals", "Safe to Spend", "More mindful choice"],
    sections: [
      { eyebrow: "The problem", title: "Spending became frictionless. Awareness did not.", body: "My wife and I wanted visibility into where our money was going and where we could be more deliberate so we could increase saving and investing. We were not replacing another finance app; I wanted to build something opinionated around how we actually manage money together." },
      { eyebrow: "The product decision", title: "One useful answer beats another dashboard.", body: "Rigid daily and weekly budgets felt suffocating. Safe to Spend starts with household income, then subtracts fixed expenses, investments, active goal contributions, an emergency buffer and variable spending. What remains is distributed over the days left in the month, with a weekly view for planning." },
      { eyebrow: "The household model", title: "Shared by design, attributable in practice.", body: "Supabase authentication and household membership connect two users to the same fixed expenses, investments, goals, transactions and Safe to Spend result. Each transaction retains who logged it, while row-level security limits financial records to members of that household." },
      { eyebrow: "AI with a job", title: "Reduce friction; keep confirmation human.", body: "A free-form entry such as “two coffees for 400” becomes structured expense data: amount, category, description, date and whether it belongs to the emergency buffer. The user confirms it before storage. Voice and receipt logging remain future work, not current claims." },
      { eyebrow: "Current evidence", title: "Used regularly by the people it was built for.", body: "We use the working POC to log expenses and keep an eye on Safe to Spend. The useful result is behavioural rather than a made-up savings percentage: regularly seeing and recording purchases makes discretionary spending more deliberate." },
      { eyebrow: "Roadmap", title: "From finance tracker to personal-finance copilot.", body: "The current feature set works, with UI refinement still needed. The longer-term direction is help with spending analysis, sustainable planning and investment decisions—but heavier AI features remain a roadmap until they create material value." },
      { eyebrow: "What I am learning", title: "AI earns its place by making the habit easier.", body: "Keep the product simple and introduce AI only where it materially improves the experience. The useful intelligence is not the presence of a model; it is helping two people make better decisions without making money management feel punitive." },
    ],
    next: "agentic-platform",
  },
};

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = studies[slug];
  if (!study) return {};
  return {
    title: `${study.title} — Ronak Tanna`,
    description: study.intro,
    openGraph: { title: `${study.title} — Ronak Tanna`, description: study.intro, images: [] },
    twitter: { title: `${study.title} — Ronak Tanna`, description: study.intro, images: [] },
  };
}

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies[slug];
  if (!study) notFound();

  return <main className="case">
    <header className="nav shell"><Link className="brand" href="/" aria-label="Ronak Tanna, home">Ronak Tanna<span>.</span></Link><nav aria-label="Case-study navigation"><Link href="/#work">← All work</Link><a href="/Ronak_Tanna_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav></header>

    <section className="case-hero shell"><p className="kicker"><span /> {study.signal}</p><h1>{study.title}</h1><p className="case-intro">{study.intro}</p><div className="status"><span>Status</span>{study.status}</div></section>

    <section className="question"><div className="shell"><p className="label">The question</p><h2>{study.question}</h2></div></section>

    <section className="case-facts shell"><div><span>My role</span><p>{study.role}</p></div><div><span>Team</span><p>{study.team}</p></div><div><span>Timeline</span><p>{study.timeline}</p></div></section>

    <section className="case-stats shell">{study.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>

    <section className="constraints shell"><p className="label">What made it difficult</p><div>{study.constraints.map((constraint) => <p key={constraint}>{constraint}</p>)}</div></section>

    <section className="decisions"><div className="shell"><div className="decisions-head"><p className="label">Key decisions</p><h2>Judgement lives<br /><i>in the tradeoffs.</i></h2></div><div className="decision-grid">{study.decisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.body}</p></article>)}</div></div></section>

    <section className="flow-wrap shell"><p className="label">The system, at a glance</p><div className="flow">{study.flow.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div></section>

    <section className="story shell">{study.sections.map((section, index) => <article key={section.title}><div className="story-index"><p className="story-no">{String(index + 1).padStart(2, "0")}</p><span>{section.eyebrow}</span></div><div><h2>{section.title}</h2><p>{section.body}</p>{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div></article>)}</section>

    <section className="next"><Link href={`/work/${study.next}`}><span>Next project</span><strong>{studies[study.next].title} ↗</strong></Link></section>
  </main>;
}
