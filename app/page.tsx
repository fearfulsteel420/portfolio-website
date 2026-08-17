import Link from "next/link";

const projects = [
  { index: "01", title: "José", eyebrow: "Agent architecture · Independent build", line: "A coding agent that treats permission, verification and human review as architecture—not footnotes.", href: "/work/jose", tone: "acid" },
  { index: "02", title: "Enterprise agentic platform", eyebrow: "Multi-agent systems · Client work", line: "Four production use cases, one reusable framework, and a delivery cycle compressed from months to weeks.", href: "/work/agentic-platform", tone: "ink" },
  { index: "03", title: "Tandem", eyebrow: "AI-native finance · Independent build", line: "Personal finance for two people who share a life—but not necessarily the same spending habits.", href: "/work/tandem", tone: "coral" },
];

export default function Home() {
  return <main>
    <header className="nav shell"><Link className="brand" href="/" aria-label="Ronak Tanna, home">RT<span>.</span></Link><nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a className="nav-cta" href="https://www.linkedin.com/in/ronaktanna/">Let’s talk ↗</a></nav></header>
    <section className="hero shell">
      <div className="hero-label"><p className="kicker"><span /> AI Systems · Product Thinking · Strategy</p><p className="location">Bangalore, India</p></div>
      <h1>I turn ambitious<br />AI ideas into<br /><em>systems that work.</em></h1>
      <div className="hero-bottom"><p>I design and deliver agentic platforms, AI products and enterprise solutions—then ask the awkward questions before production does.</p><a href="#work" className="down" aria-label="See selected work">↓</a></div>
    </section>
    <section className="proof"><div className="shell proof-grid"><p className="proof-title">From fuzzy brief<br/><strong>to working system.</strong></p><div><span>01 · Discover</span><b>Find where AI earns its keep.</b></div><div><span>02 · Architect</span><b>Design for reliability, security and reuse.</b></div><div><span>03 · Deliver</span><b>Lead the build from POC to production.</b></div></div></section>
    <section id="work" className="work shell"><div className="section-head"><p className="label">Selected work</p><h2>Less theatre.<br />More <i>working software.</i></h2></div><div className="project-list">{projects.map((project) => <a key={project.title} href={project.href} className={`project ${project.tone}`}><span className="project-index">{project.index}</span><div><p>{project.eyebrow}</p><h3>{project.title}</h3><span>{project.line}</span></div><b aria-hidden="true">↗</b></a>)}</div></section>
    <section className="aside-project shell"><p className="label">Also built, because curiosity is expensive</p><div className="aside-copy"><h2>Crumbs</h2><p>I got bored of podcasts on my morning runs, so I built a pipeline that turns books into character-led audio productions. As one does.</p><span>EPUB parsing · LLM adaptation · Multi-voice TTS · Object storage</span></div></section>
    <section id="about" className="about"><div className="shell about-grid"><p className="label">A little context</p><div><h2>I sit somewhere between the whiteboard and the terminal.</h2><p>I’m an AI Solutions Architect and Manager at EY. I’ve led teams building enterprise GenAI systems, shaped AI strategy across complex businesses, and made enough side projects to know that the demo is usually the easy part.</p><p>My favourite work lives at the intersection of architecture, product judgement and commercial reality.</p><div className="links"><a href="https://www.linkedin.com/in/ronaktanna/">LinkedIn ↗</a><a href="https://github.com/fearfulsteel420">GitHub ↗</a></div></div></div></section>
    <footer className="footer shell"><div><p>Have an ambitious AI problem?</p><h2>Let’s make it<br /><i>less hypothetical.</i></h2></div><a href="https://www.linkedin.com/in/ronaktanna/">Start a conversation ↗</a><small>© 2026 Ronak Tanna</small></footer>
  </main>;
}
