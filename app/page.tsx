import Link from "next/link";

const experience = [
  { company: "EY", role: "Manager, AI & Data", period: "Aug 2024–Present", copy: "I lead enterprise GenAI work from discovery and solution design through delivery. My recent work includes a multi-agent platform spanning four use cases, an AI-first catalogue product, and reusable frameworks that helped another team reduce delivery time from 12 weeks to four." },
  { company: "ProjectHero", role: "Product Lead", period: "Jan–Jun 2023", copy: "I led the roadmap across product, design and engineering. We shipped ML-assisted order creation that reduced processing time by 87%, improved contractor onboarding completion from 4% to 53%, and launched contractor discovery." },
  { company: "Jar", role: "Product Manager", period: "Jan–Aug 2022", copy: "I worked on growth and transaction reliability for a consumer savings product. Data-led experiments increased transactions by 10%, while changes to the gold-selling journey reduced support tickets by 15%." },
  { company: "DeepConverse", role: "Product & Data Science Lead", period: "Jun 2019–Dec 2021", copy: "I worked across product and data science on customer-support tools. I launched a no-code chatbot platform that reduced support tickets by 50% and built a code-free ML dashboard for training and analysing models." },
  { company: "Botspace", role: "Product & Data Science", period: "Jan–May 2019", copy: "I built chatbots using Rasa and Elasticsearch and turned client requirements into product roadmaps. A multi-template approach reduced the steps required to create a chatbot by half." },
  { company: "Egregore Labs", role: "Data Scientist", period: "Jan–Dec 2018", copy: "I worked on AI products for news analysis and personalised timelines. The work included recommendation, spam classification and retention-focused products used by real readers." },
  { company: "SeenIt.in", role: "Data Scientist", period: "Jun–Dec 2017", copy: "I began my career building recommendation and computer-vision systems for fashion discovery. The recommendation work increased retention by 15%, while automated clothing tags made post creation three times faster." },
];

const projects = [
  { title: "Enterprise agentic platform", status: "Deployed · Client work anonymised", copy: "I led a five-person team that delivered four AI use cases for one business function over six months. The work covered product scope, architecture, stakeholder management, evaluation and handover to the client’s technology team.", href: "/work/agentic-platform" },
  { title: "José", status: "Working core · In active development", copy: "José is a coding-agent harness I am building to understand what sits around the model: permissions, isolation, retries, verification and human review. It can take an authorised GitHub issue and work toward a tested pull request inside a container.", href: "/work/jose" },
  { title: "Tandem", status: "Working POC · Used at home", copy: "Tandem is a household-finance product I built for my wife and me. We use it to log expenses, understand what is safe to spend, and be more deliberate about money without following a rigid daily budget.", href: "/work/tandem" },
];

export default function Home() {
  return <main>
    <header className="nav shell">
      <Link className="brand" href="/" aria-label="Ronak Tanna, home">Ronak Tanna<span>.</span></Link>
      <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#overview">Overview</a><a href="#work">Work</a><a href="#projects">Projects</a><a href="/Ronak_Tanna_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav>
    </header>

    <section className="simple-hero shell">
      <p className="kicker"><span /> AI Solutions Architect & Product Leader</p>
      <h1>I work on AI products from the first conversation through to production.</h1>
      <div className="simple-hero-copy"><p>I’m based in Bangalore and currently work as a Manager in AI & Data at EY. I help teams decide where AI is useful, shape the product and architecture, and work with engineers to deliver it.</p><div className="simple-actions"><a href="mailto:ronak.tanna@gmail.com">Email me ↗</a><a href="https://www.linkedin.com/in/ronaktanna/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/fearfulsteel420" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
    </section>

    <section id="about" className="simple-section about-simple"><div className="shell simple-grid"><p className="label">About</p><div className="prose-large">
      <p>I started my career as a data scientist, building recommendation, computer-vision and natural-language systems. Over time I became more interested in the product decisions around the model: which problem to solve, how people would use the result, and whether it would create enough value to justify building.</p>
      <p>That led me into product management and eventually into AI solution architecture. Today my work covers discovery, product definition, architecture and delivery, often with the same client and team from the first workshop to handover.</p>
      <p>I also build independent products because it keeps me close to the details. José lets me explore coding-agent systems, while Tandem gives me a real household problem against which to test product decisions.</p>
    </div></div></section>

    <section id="overview" className="simple-section glance shell"><div className="simple-grid"><p className="label">At a glance</p><div>
      <h2>My career has moved from building models to owning the wider problem.</h2>
      <div className="glance-facts"><div><strong>8+ years</strong><span>across data science, product and AI delivery</span></div><div><strong>Bangalore</strong><span>working with enterprise and independent teams</span></div><div><strong>Current focus</strong><span>AI architecture, product leadership and delivery</span></div></div>
      <div className="glance-detail"><article><h3>What I work on</h3><p>Multi-agent systems, RAG, evaluation, memory, permissions, data products and the product decisions that make them useful.</p></article><article><h3>How I contribute</h3><p>Discovery, solution design, product scope, architecture, client communication, team leadership and hands-on technical work.</p></article><article><h3>What I’m exploring</h3><p>Reliable agentic systems, capable smaller models, local-first AI, and products where AI removes meaningful friction.</p></article><article><h3>Tools and platforms</h3><p>Python, FastAPI, React, LangGraph, Databricks, Azure, PostgreSQL and Supabase.</p></article></div>
    </div></div></section>

    <section id="work" className="simple-section work-history"><div className="shell simple-grid"><div><p className="label">Work</p><p className="section-note">A reverse-chronological view of the teams and products I have worked on.</p></div><div className="roles">
      {experience.map((item) => <article className="role" key={`${item.company}-${item.period}`}><div><h3>{item.company}</h3><p>{item.role}</p><span>{item.period}</span></div><p>{item.copy}</p></article>)}
    </div></div></section>

    <section id="projects" className="simple-section project-section shell">
      <div className="simple-grid project-intro"><p className="label">Projects</p><div><h2>Work that gave me room to go deeper.</h2><p>The enterprise platform shows how I lead delivery with a client and a team. José and Tandem are independent projects where I can follow an idea from first principles and live with the consequences of the product decisions.</p></div></div>
      <div className="simple-projects">{projects.map((project, index) => <Link href={project.href} className="simple-project" key={project.title}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{project.status}</p><h3>{project.title}</h3><div>{project.copy}</div><b>Read the case study ↗</b></div></Link>)}</div>
      <div className="other-project simple-grid"><p className="label">Other experiment</p><div><h3>Crumbs</h3><p>I built a working POC that turns books into character-led, multi-voice audio. It ingests an EPUB, adapts the text into a script using an LLM, and produces the result with multiple text-to-speech voices. The experiment is complete for now.</p><span>EPUB ingestion · LLM adaptation · Multi-voice TTS</span></div></div>
    </section>

    <footer className="simple-footer shell"><div><h2>If you would like to discuss my work, send me a note.</h2><a href="mailto:ronak.tanna@gmail.com">ronak.tanna@gmail.com ↗</a></div><div className="footer-links"><a href="https://www.linkedin.com/in/ronaktanna/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/fearfulsteel420" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/Ronak_Tanna_Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></div><small>© 2026 Ronak Tanna · Bangalore, India</small></footer>
  </main>;
}
