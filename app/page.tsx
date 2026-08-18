import Link from "next/link";

const projects = [
  { index: "01", title: "Enterprise agentic platform", proof: "Leadership · Enterprise delivery", line: "Led a five-person team to deploy four enterprise use cases—and built the reusable framework that helped cut the next delivery cycle from 12 weeks to four.", role: "Product vision · Architecture · Scope · Client leadership", status: "Deployed · Client work anonymised", href: "/work/agentic-platform", tone: "ink" },
  { index: "02", title: "José", proof: "Agent architecture · Independent build", line: "A coding-agent harness that makes permission, isolation, verification and human review part of the architecture—not footnotes.", role: "Concept · Architecture · Implementation", status: "Working core · In active development", href: "/work/jose", tone: "acid" },
  { index: "03", title: "Tandem", proof: "Product judgement · Independent build", line: "A household-finance POC built for two people who share a life—but not necessarily the same spending habits.", role: "Product · Design · Full-stack build", status: "Working POC · Used at home", href: "/work/tandem", tone: "coral" },
];

const proof = [
  { value: "8+", label: "years", detail: "Across AI architecture, product management and data science" },
  { value: "5", label: "person team", detail: "Led through architecture and enterprise delivery" },
  { value: "4", label: "use cases", detail: "Deployed on one reusable multi-agent platform" },
  { value: "12→4", label: "weeks", detail: "Subsequent delivery enabled by reusable frameworks" },
];

const operatingModel = [
  { index: "01", title: "Discover", copy: "Find the business problem where AI can create measurable value." },
  { index: "02", title: "Shape", copy: "Turn an opportunity into a product, scope and credible business case." },
  { index: "03", title: "Architect", copy: "Design for reliability, security, evaluation and reuse from the start." },
  { index: "04", title: "Deliver", copy: "Lead the build, stakeholder decisions and handover into the real world." },
];

const capabilities = [
  { title: "AI architecture", items: "Multi-agent systems · RAG · Agent evaluation · Memory · RBAC · NL2SQL" },
  { title: "Product & commercial", items: "Discovery · Solution design · POCs · Proposals · Roadmaps · ROI" },
  { title: "Leadership", items: "Product vision · Team delivery · Client communication · Scope · Stakeholder alignment" },
  { title: "Platforms & technology", items: "Python · FastAPI · React · LangGraph · Databricks · Azure · PostgreSQL · Supabase" },
];

export default function Home() {
  return <main>
    <header className="nav shell">
      <Link className="brand" href="/" aria-label="Ronak Tanna, home">Ronak Tanna<span>.</span></Link>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a>
        <a href="/Ronak_Tanna_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
      </nav>
    </header>

    <section className="hero shell">
      <div className="hero-label"><p className="kicker"><span /> AI Solutions Architect & Product Leader</p><p className="location">Bangalore, India</p></div>
      <h1>I turn ambitious<br />AI ideas into<br /><em>systems that work.</em></h1>
      <div className="hero-bottom">
        <div className="hero-intro"><p>I take AI systems from discovery and architecture through delivery—connecting business value, product judgement and reliable technical execution.</p><span>8+ years across AI, product and data science · Manager, AI & Data at EY</span></div>
        <div className="hero-actions"><a className="button button-dark" href="mailto:ronak.tanna@gmail.com">Start a conversation ↗</a><a className="text-link" href="#work">See selected work ↓</a></div>
      </div>
    </section>

    <section className="career-proof" aria-label="Career highlights">
      <div className="shell proof-intro"><p className="label">Evidence, not adjectives</p><p>Enterprise delivery with enough product instinct to ask whether the system should exist in the first place.</p></div>
      <div className="shell proof-cards">{proof.map((item) => <div className="proof-card" key={item.value}><strong>{item.value}</strong><span>{item.label}</span><p>{item.detail}</p></div>)}</div>
    </section>

    <section id="work" className="work shell">
      <div className="section-head"><p className="label">Selected work</p><div><h2>Three projects.<br /><i>Three reasons to hire me.</i></h2><p className="section-deck">Leadership at enterprise scale, architectural depth in agent systems, and the product judgement to build for a real human problem.</p></div></div>
      <div className="project-list">{projects.map((project) => <Link key={project.title} href={project.href} className={`project ${project.tone}`}><span className="project-index">{project.index}</span><div className="project-main"><p>{project.proof}</p><h3>{project.title}</h3><span className="project-line">{project.line}</span><div className="project-meta"><span>{project.role}</span><span>{project.status}</span></div></div><b aria-hidden="true">↗</b></Link>)}</div>
    </section>

    <section className="operating"><div className="shell"><div className="operating-head"><p className="label">How I operate</p><h2>From fuzzy brief<br /><i>to working system.</i></h2></div><div className="operating-grid">{operatingModel.map((item) => <article key={item.title}><span>{item.index}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section id="experience" className="experience shell">
      <div className="experience-lead"><p className="label">Experience & capabilities</p><h2>A career moving closer to the whole problem.</h2><p>Data science taught me what models can do. Product taught me what people need. Enterprise delivery taught me what it takes to make both survive contact with reality.</p></div>
      <div className="career-snapshot"><div className="current-role"><span>Current</span><h3>Manager, AI & Data</h3><p>EY · 2024–Present</p><b>AI solutions · Product vision · Architecture · Delivery leadership</b></div><div className="career-arc"><span>Career arc</span><p>Data Scientist</p><i>→</i><p>Product Leader</p><i>→</i><p>AI Solutions Architect</p></div></div>
      <div className="capability-grid">{capabilities.map((capability) => <article key={capability.title}><h3>{capability.title}</h3><p>{capability.items}</p></article>)}</div>
    </section>

    <section className="experiment shell"><p className="label">A completed experiment</p><div><span>Curiosity, in working form</span><h2>Crumbs</h2><p>I got bored of podcasts on my morning runs, so I built a working POC that turns books into character-led, multi-voice audio productions. The experiment is complete; the curiosity is not.</p><small>EPUB ingestion · LLM adaptation · Multi-voice TTS</small></div></section>

    <section id="about" className="about"><div className="shell about-grid"><p className="label">A little context</p><div><h2>I sit somewhere between the whiteboard and the terminal.</h2><p>My favourite work starts with an ambiguous business problem and ends with a system people can actually use. I’m most useful where architecture, product judgement and commercial reality need to agree with one another.</p><p>I still build independently because it keeps the gap between having an opinion and testing one pleasantly small.</p><div className="links"><a href="https://www.linkedin.com/in/ronaktanna/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/fearfulsteel420" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/Ronak_Tanna_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></div></div></div></section>

    <footer className="footer shell"><div><p>Have an ambitious AI problem?</p><h2>Let’s make it<br /><i>less hypothetical.</i></h2></div><div className="footer-actions"><a className="button button-dark" href="mailto:ronak.tanna@gmail.com">ronak.tanna@gmail.com ↗</a><a href="/Ronak_Tanna_Resume.pdf" target="_blank" rel="noreferrer">Download résumé ↗</a></div><small>© 2026 Ronak Tanna · Bangalore, India</small></footer>
  </main>;
}
