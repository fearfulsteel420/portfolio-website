import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Study = {
  title: string; type: string; intro: string; question: string; status: string;
  stats: { value: string; label: string }[]; sections: { title: string; body: string; bullets?: string[] }[];
  flow: string[]; next?: string;
};

const studies: Record<string, Study> = {
  jose: {
    title: "José", type: "Independent build · Agent architecture",
    intro: "Most coding agents bet on a smarter model. I wanted to see how far a better harness could take a cheaper one.",
    question: "Can smaller, cheaper models become reliable coding agents if the harness around them does more of the heavy lifting?",
    status: "Working core, evolving platform",
    stats: [{value:"1 issue",label:"in"},{value:"1 tested PR",label:"out"},{value:"0",label:"autonomous merges"}],
    flow:["Authorised issue","Baseline","Investigate","Plan","Edit","Verify","Human review"],
    sections:[
      {title:"The bet",body:"Frontier models are impressive. They are also expensive, closed and an increasingly large point of dependency. José explores a different route: move reliability into the harness, keep the model replaceable, and make every consequential action explicit."},
      {title:"The controller is in charge",body:"The model can propose actions. It cannot grant itself tools, advance its own state, enlarge its budget or declare that its work is correct.",bullets:["Deterministic lifecycle and typed boundaries","Explicit, revocable issue-level authorisation","Disposable isolation for every run","Tests as evidence—not model opinion","A hard human boundary before merge"]},
      {title:"What works today",body:"Give José an eligible open issue and it investigates the repository, edits inside a bounded environment, runs verification and returns a pull request for review. The richer observability, long-term memory and controlled self-evolution layers are designed, but still on the workbench."},
      {title:"What I’m learning",body:"A cheaper model does not need to be trusted with everything to be useful. The interesting engineering is often in reducing how much judgement the model must get right—and making failures visible, bounded and recoverable."}
    ], next:"tandem"
  },
  tandem: {
    title:"Tandem", type:"Independent build · AI-native finance",
    intro:"Personal finance apps are usually built for one person. Unfortunately, money has a habit of becoming multiplayer.",
    question:"How do two people track money together without turning their relationship into a monthly finance review meeting?",
    status:"Functional product",
    stats:[{value:"2",label:"people by design"},{value:"2",label:"ways to log"},{value:"1",label:"useful daily number"}],
    flow:["Text or manual entry","AI parser","Household ledger","Goals + commitments","Safe to Spend"],
    sections:[
      {title:"It started at home",body:"My wife and I wanted a simple way to understand our spending together. I did the proportionate thing and built a finance product."},
      {title:"One number beats another dashboard",body:"Generic daily and monthly limits do not answer the question people actually ask before spending: can I afford this today? Safe to Spend turns income, commitments, goals and previous activity into a present-tense answer."},
      {title:"Deliberate constraints",body:"The first version avoids bank integrations and SMS scraping. That keeps onboarding lighter, reduces privacy concerns and avoids building the product around fragile external dependencies.",bullets:["Manual logging always remains available","Natural language becomes structured expense data","Shared and personal views live in one household model","Web first for fast iteration; cross-platform mobile is the direction"]},
      {title:"Under the hood",body:"A FastAPI service sits behind the web experience, mobile work and household data model. Authentication, invitations, analytics, budgets and goals share the same product logic—with AI used where it removes friction rather than where it merely looks impressive."}
    ], next:"agentic-platform"
  },
  "agentic-platform": {
    title:"Enterprise agentic platform", type:"Client work · Details anonymised",
    intro:"Four production use cases were the brief. A reusable way to ship the next four was the bigger opportunity.",
    question:"How do you build agentic systems for one department without creating four expensive, disconnected demos?",
    status:"Deployed and handed over",
    stats:[{value:"4",label:"initial use cases"},{value:"5",label:"person delivery team"},{value:"12→4",label:"weeks for reuse"}],
    flow:["Business question","Agent interaction","Memory + cache","Tools + enterprise data","Evaluation","RBAC response"],
    sections:[
      {title:"The assignment",body:"I led a five-person team delivering an enterprise multi-agent system across financial analysis, idle-fund analysis, vendor documentation and early-payment analysis. I owned client communication, scope, timelines, architecture decisions and product vision."},
      {title:"Build the platform hiding inside the projects",body:"The shared architecture became a framework rather than four separate solutions.",bullets:["Agent interaction framework","Short- and long-term memory with caching","Judging and evaluation framework","Role-based access control","Reusable serving and enterprise integration patterns"]},
      {title:"The architecture",body:"Agents were orchestrated with LangGraph inside Databricks, with platform services for model access, serving and natural-language-to-SQL. Azure services handled enterprise concerns including SSO and access control."},
      {title:"The result",body:"The four solutions reached their respective teams. The framework was then handed to another team in the AI CoE, which used it to deliver four procurement use cases in roughly four weeks—a cycle that had previously taken about three months."}
    ], next:"jose"
  }
};

export function generateStaticParams(){ return Object.keys(studies).map(slug=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const s=studies[slug]; if(!s) return {}; return {title:`${s.title} — Ronak Tanna`,description:s.intro,openGraph:{title:`${s.title} — Ronak Tanna`,description:s.intro,images:[]},twitter:{title:`${s.title} — Ronak Tanna`,description:s.intro,images:[]}}; }

export default async function StudyPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const study=studies[slug]; if(!study) notFound();
  return <main className="case">
    <header className="nav shell"><Link className="brand" href="/">RT<span>.</span></Link><nav><Link href="/#work">← All work</Link><a className="nav-cta" href="https://www.linkedin.com/in/ronaktanna/">Let’s talk ↗</a></nav></header>
    <section className="case-hero shell"><p className="kicker"><span/> {study.type}</p><h1>{study.title}</h1><p className="case-intro">{study.intro}</p><div className="status"><span>Status</span>{study.status}</div></section>
    <section className="question"><div className="shell"><p className="label">The question</p><h2>{study.question}</h2></div></section>
    <section className="case-stats shell">{study.stats.map(s=><div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</section>
    <section className="flow-wrap shell"><p className="label">The system, at a glance</p><div className="flow">{study.flow.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b></div>)}</div></section>
    <section className="story shell">{study.sections.map((section,i)=><article key={section.title}><p className="story-no">{String(i+1).padStart(2,"0")}</p><div><h2>{section.title}</h2><p>{section.body}</p>{section.bullets&&<ul>{section.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</div></article>)}</section>
    <section className="next"><a href={`/work/${study.next}`}><span>Next project</span><strong>{studies[study.next!].title} ↗</strong></a></section>
  </main>
}
