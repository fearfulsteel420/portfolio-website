# Portfolio Restructure Backlog

## Purpose

Turn the portfolio from a collection of well-presented projects into a focused hiring narrative for senior AI architecture, product, and delivery roles.

The site should help a hiring manager conclude, quickly and confidently:

> Ronak is a senior AI solutions leader who can identify the right problem, architect a credible system, lead a team through delivery, and connect technical decisions to business outcomes.

This document is the implementation source of truth. Tickets are ordered by dependency and expected impact.

## Working conventions

- Status values: `TODO`, `IN PROGRESS`, `BLOCKED`, `DONE`
- Priority values: `P0` essential, `P1` important, `P2` enhancement
- Complete tickets in the proposed implementation order unless a dependency says otherwise.
- Preserve the site's existing visual personality and voice. The goal is clearer decision-making, not a generic corporate portfolio.
- Do not publish confidential client information. Use anonymised or sanitised evidence where necessary.
- Each implementation ticket should be verified on desktop and mobile before being marked `DONE`.

## Success criteria

The completed site should enable a first-time visitor to answer the following within roughly 30 seconds:

1. What kind of professional is Ronak?
2. Which roles is he suited for?
3. What has he delivered?
4. What was his level of ownership?
5. What measurable evidence supports the claims?
6. How can the visitor review his résumé or contact him?

---

## Phase 1 — Positioning and information architecture

### PORT-001 — Define the primary hiring proposition

**Status:** DONE
**Priority:** P0
**Depends on:** None

**Why**

The current positioning—“AI Systems · Product Thinking · Strategy”—is attractive but broad. It does not immediately tell a recruiter which role to consider Ronak for.

**Scope**

- Write one clear professional descriptor for the hero.
- Name the two or three role families the portfolio is designed to support.
- Retain the existing core promise: turning ambitious AI ideas into working systems.
- Establish a short positioning hierarchy:
  - Professional identity
  - Value proposition
  - Target roles or opportunity types
  - Location

**Working direction**

> AI Solutions Architect and delivery leader building production GenAI platforms—from strategy and architecture through implementation and adoption.

Potential target roles:

- AI Solutions Architect
- AI Product Lead
- GenAI / AI Transformation Consulting roles

**Acceptance criteria**

- The professional identity is understandable without reading the About section.
- The target roles are explicit but do not make the hero feel like a job application form.
- The wording is credible against the case studies and résumé.
- The final copy fits cleanly at desktop and mobile breakpoints.

---

### PORT-002 — Approve the new homepage narrative order

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-001

**Why**

The homepage currently leads with several layers of philosophy before presenting evidence. The revised sequence should move from identity to proof to work.

**Scope**

Use this target structure:

1. Hero: identity, value proposition, target roles, primary CTA
2. Career proof: quantified credibility signals
3. Selected work: projects framed as evidence of distinct strengths
4. How I operate: discover, architect, deliver, adopt
5. Experience and capabilities: current role, leadership scope, strengths, technologies
6. About: concise personal narrative
7. Contact: résumé, email, LinkedIn, GitHub

**Acceptance criteria**

- Every homepage section has one clear hiring purpose.
- Repeated claims are removed or consolidated.
- The strongest evidence appears before the first long-form project description.
- Section order works as a coherent narrative even when only headings are read.

---

### PORT-003 — Create the content and evidence inventory

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-001

**Why**

The redesign should be grounded in verified evidence rather than producing stronger-sounding but unsupported claims.

**Scope**

Collect and verify:

- Current title and preferred professional descriptor
- Target role families
- Years or breadth of relevant experience, if useful
- Team sizes led
- Number and type of production use cases delivered
- Delivery-cycle improvement and its exact basis
- Industries, business functions, or client environments that can be named
- Technologies worth surfacing
- Public links for José, Tandem, Crumbs, GitHub, résumé, email, and LinkedIn
- Available screenshots, diagrams, code excerpts, or sanitised artifacts
- Confidentiality limits for client work

**Acceptance criteria**

- Every metric intended for the homepage has a verified source.
- Each case study has an explicit statement of Ronak's role and contribution.
- Missing assets and claims are listed rather than silently invented.
- Confidential and public evidence are clearly distinguished.

---

## Phase 2 — Homepage hiring journey

### PORT-004 — Rewrite and rebuild the hero

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-001, PORT-002

**Why**

The hero is memorable but currently makes the visitor infer Ronak's professional identity and intended role.

**Scope**

- Preserve the central “systems that work” idea.
- Add a concrete professional descriptor.
- Add target-role or opportunity context.
- Introduce a primary hiring CTA and a secondary work CTA.
- Keep Bengaluru visible without giving it equal weight to the professional proposition.
- Review hero height and text overflow at common viewport sizes.

**Acceptance criteria**

- A recruiter can identify Ronak's professional category from the first viewport.
- At least one hiring-oriented action is visible without scrolling.
- The hero contains no redundant positioning statements.
- No content is clipped at desktop or mobile breakpoints.

---

### PORT-005 — Add a quantified career-proof section

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-003, PORT-004

**Why**

The strongest hiring evidence is currently buried in a case study.

**Scope**

Create a compact section immediately after the hero containing three or four verified signals. Candidate signals include:

- Led a five-person AI delivery team
- Shipped four enterprise AI use cases
- Reduced repeat delivery from approximately 12 weeks to four
- Built enterprise and independent AI products end to end

Each signal should include enough context to avoid becoming a vanity metric.

**Acceptance criteria**

- All claims are verified through PORT-003.
- Metrics are scannable in under ten seconds.
- Labels clarify what each number represents.
- The section remains meaningful without relying on animation or hover.

---

### PORT-006 — Reframe and reorder selected work

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-002, PORT-003

**Why**

The projects are individually interesting but do not currently form an explicit argument about Ronak's candidacy.

**Scope**

Use this default order and framing:

1. **Enterprise agentic platform** — leadership, production delivery, business impact, reuse
2. **José** — agent architecture, reliability, engineering judgement
3. **Tandem** — product insight, end-to-end building, human-centred AI
4. **Crumbs** — optional supporting evidence of curiosity and experimentation

For every featured project, surface:

- The capability it proves
- The problem or opportunity
- Ronak's role
- One result or meaningful state of completion

**Acceptance criteria**

- The enterprise case appears first.
- Each project has a distinct hiring purpose.
- Cards distinguish shipped outcomes from work in progress.
- Independent projects are not presented as equivalent to client production deployments.
- The project list reads as a deliberate professional narrative.

---

### PORT-007 — Move and refine “How I operate”

**Status:** DONE
**Priority:** P1
**Depends on:** PORT-002, PORT-005

**Why**

Discover–Architect–Deliver is useful, but it currently appears before the evidence that makes the claim credible.

**Scope**

- Move the operating model below selected work.
- Consider a fourth stage covering adoption, handover, or scale.
- Make each stage describe an observable contribution rather than a slogan.
- Remove overlap with hero and About copy.

**Acceptance criteria**

- The section supports evidence already shown rather than delaying it.
- Every stage describes a concrete mode of contribution.
- The complete section is concise enough to scan quickly.

---

### PORT-008 — Add an experience and capabilities snapshot

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-003

**Why**

The current About section communicates personality but does not provide a recruiter-friendly career snapshot.

**Scope**

Add a structured section covering:

- Current role and organisation
- Professional focus
- Leadership and delivery scope
- Core capabilities
- Selected platforms and technologies
- Industries or business functions, where appropriate
- Location and working context, if relevant

Potential capability groups:

- AI strategy and use-case discovery
- Agent and GenAI architecture
- Product shaping and stakeholder alignment
- Technical delivery and team leadership
- Evaluation, reliability, access control, and production readiness

**Acceptance criteria**

- The section can be understood through labels and short phrases.
- It complements rather than duplicates the résumé.
- Technologies do not overwhelm business and leadership capabilities.
- Current title and organisation are accurate.

---

### PORT-009 — Tighten the About section

**Status:** DONE
**Priority:** P1
**Depends on:** PORT-008

**Why**

The current About copy is strong, but it carries both personal positioning and factual career information. The new experience section will allow About to become shorter and more human.

**Scope**

- Retain the “whiteboard and terminal” idea if it still earns its place.
- Focus on working style, professional motivation, and distinctive perspective.
- Remove facts already covered in the experience snapshot.
- Keep the voice conversational and specific.

**Acceptance criteria**

- About adds personality rather than repeating credentials.
- The section is no longer than two short paragraphs.
- Its claims are demonstrated elsewhere on the site.

---

### PORT-010 — Build a complete contact and résumé path

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-003

**Why**

Sending every CTA to LinkedIn adds friction and does not serve all hiring visitors.

**Scope**

- Add a downloadable résumé.
- Add a direct email action.
- Retain LinkedIn and GitHub.
- Define one primary CTA, such as “Discuss a role” or “Start a conversation.”
- Use consistent CTA labels and destinations across navigation, hero, case studies, and footer.

**Acceptance criteria**

- Résumé access is visible from the homepage.
- Email, LinkedIn, and GitHub are available without searching the page.
- External links use appropriate new-tab and security behaviour.
- The primary CTA communicates a hiring-relevant action.
- No major CTA misleadingly points to a different action than its label suggests.

---

## Phase 3 — Case-study system

### PORT-011 — Create a standard case-study narrative model

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-003

**Why**

The existing case studies have a consistent visual template but do not consistently expose the information required to assess seniority and judgement.

**Scope**

Define a reusable case-study schema containing:

1. Project summary and status
2. Business or user problem
3. Ronak's role and scope
4. Constraints and stakes
5. Key decisions and tradeoffs
6. System or product approach
7. Outcome and evidence
8. Lessons or retrospective

Include optional fields for:

- Team size
- Timeline
- Technologies
- Confidentiality note
- Links and repositories
- Visual artifacts

**Acceptance criteria**

- The schema clearly separates team output from Ronak's contribution.
- It supports both client work and independent builds without forcing false equivalence.
- Status terminology distinguishes concept, prototype, functional product, deployed system, and ongoing work.
- The schema can be rendered from structured project data.

---

### PORT-012 — Rewrite the enterprise agentic-platform case

**Status:** DONE
**Priority:** P0
**Depends on:** PORT-011

**Why**

This is the strongest proof of seniority and should become the flagship case study.

**Scope**

- Clarify the original business brief.
- State Ronak's ownership across client communication, scope, architecture, product vision, timelines, and team leadership.
- Explain the reusable-platform decision and why it mattered.
- Add constraints and tradeoffs.
- Clarify the 12-to-4-week comparison and what was reused.
- Add a sanitised architecture or delivery visual.
- Preserve appropriate client anonymity.

**Acceptance criteria**

- The case makes leadership scope unmistakable.
- The business value is understandable to a non-specialist.
- The technical approach contains enough depth to be credible to an architect.
- The outcome is quantified and appropriately qualified.
- Confidential details cannot be inferred from the page.

---

### PORT-013 — Rewrite the José case

**Status:** DONE
**Priority:** P1
**Depends on:** PORT-011

**Why**

José demonstrates strong architectural judgement but needs clearer evidence of what exists today versus what is still intended.

**Scope**

- State the problem and architectural hypothesis.
- Explain why reliability is moved into the harness.
- Identify the most consequential design decisions.
- Show the current working flow.
- Separate implemented capabilities, planned layers, and research questions.
- Add repository, code, test, architecture, or run evidence where public.

**Acceptance criteria**

- Current functionality and future ambition cannot be confused.
- The case demonstrates engineering judgement, not only a conceptual position.
- Permission, verification, human review, and failure boundaries are made tangible.
- At least one artifact supports the written claims.

---

### PORT-014 — Rewrite the Tandem case

**Status:** DONE
**Priority:** P1
**Depends on:** PORT-011

**Why**

Tandem can show product judgement and end-to-end execution more clearly than it currently does.

**Scope**

- Sharpen the user problem and target household behaviour.
- Explain the “Safe to Spend” product decision.
- Describe what was deliberately excluded and why.
- Clarify current product state and actual usage.
- Add interface screenshots and a lightweight product flow.
- Connect AI features to reduced friction rather than novelty.

**Acceptance criteria**

- The case demonstrates product decisions as well as implementation.
- The current state is accurately represented.
- Screens or artifacts make the product concrete.
- The visitor can identify what Ronak learned from building it.

---

### PORT-015 — Decide the role of Crumbs

**Status:** DONE
**Priority:** P2
**Depends on:** PORT-003, PORT-006

**Why**

Crumbs adds personality but currently sits between major portfolio sections without a clear hiring purpose.

**Scope**

Choose one of these treatments:

- Promote it to a compact fourth case if sufficient evidence exists.
- Keep it in a clearly labelled “Experiments” section.
- Fold it into About as a short example of curiosity.
- Remove it from the homepage while retaining a direct page or repository link.

**Acceptance criteria**

- Its placement has a stated purpose.
- It does not interrupt the primary hiring narrative.
- Its maturity is represented accurately.

---

## Phase 4 — Evidence and presentation

### PORT-016 — Add visual evidence to project pages

**Status:** TODO
**Priority:** P1
**Depends on:** PORT-003, PORT-012, PORT-013, PORT-014

**Why**

The site promises working systems but relies almost entirely on prose.

**Scope**

Add suitable evidence such as:

- Sanitised architecture diagrams
- Product screenshots
- System workflows
- Evaluation or decision frameworks
- Before-and-after process views
- Small code or interface excerpts
- Repository, demo, or documentation links

**Acceptance criteria**

- Every featured case has at least one relevant visual or external artifact, where confidentiality permits.
- Visuals explain something that prose alone does not communicate efficiently.
- Captions explain what the visitor should notice.
- Images are optimised and have useful alternative text.
- Sanitised client artifacts reveal no confidential information.

---

### PORT-017 — Improve scanning and hierarchy

**Status:** TODO
**Priority:** P1
**Depends on:** PORT-004 through PORT-016

**Why**

The typography is distinctive, but hiring information should remain easy to scan across long pages.

**Scope**

- Review headline scale and line lengths.
- Ensure supporting copy is not clipped or visually orphaned.
- Create consistent visual treatment for labels, evidence, roles, outcomes, and status.
- Reduce unnecessary vertical space where it delays content.
- Improve mobile project-card hierarchy.
- Make interactive states work for keyboard and touch users, not only hover.

**Acceptance criteria**

- The homepage remains understandable when read via headings, metrics, and card summaries alone.
- No essential information is only available on hover.
- Long paragraphs use comfortable widths and spacing.
- Desktop and mobile layouts have no clipping or accidental overflow.

---

### PORT-018 — Add trust, accessibility, and metadata fundamentals

**Status:** TODO
**Priority:** P1
**Depends on:** PORT-004 through PORT-017

**Why**

A polished hiring site must also behave reliably when shared, navigated by keyboard, or read with assistive technology.

**Scope**

- Review page titles and descriptions.
- Add complete Open Graph and social-preview metadata.
- Verify heading structure and navigation labels.
- Add alternative text for meaningful visuals.
- Verify focus states, contrast, reduced-motion behaviour, and keyboard navigation.
- Add a useful not-found state.
- Confirm external-link semantics.

**Acceptance criteria**

- Every public page has a unique title and description.
- Shared links generate an intentional preview.
- Automated accessibility checks have no serious violations.
- All links and controls are keyboard reachable with visible focus.
- Decorative and meaningful imagery are distinguished correctly.

---

## Phase 5 — Quality and launch

### PORT-019 — Add lightweight portfolio analytics

**Status:** TODO
**Priority:** P2
**Depends on:** PORT-010, PORT-018

**Why**

Basic analytics can show whether visitors reach case studies and use hiring CTAs without turning the site into a tracking project.

**Scope**

Track only useful events, such as:

- Case-study opens
- Résumé downloads
- Email CTA selections
- LinkedIn and GitHub outbound clicks

Choose a privacy-conscious implementation and document it.

**Acceptance criteria**

- Event names are documented.
- No unnecessary personal data is collected.
- Analytics failures do not affect site functionality.
- Tracking complies with the selected hosting and privacy approach.

---

### PORT-020 — Run final hiring-manager and technical QA

**Status:** TODO
**Priority:** P0
**Depends on:** PORT-004 through PORT-018

**Why**

The finished site must work as both a hiring narrative and a reliable web experience.

**Scope**

Perform two review passes.

**Hiring-manager pass**

- First-impression clarity
- Role fit
- Evidence of seniority
- Ownership clarity
- Outcome credibility
- Contact and résumé path

**Technical pass**

- Desktop and mobile layouts
- Navigation and links
- Build and lint
- Accessibility
- Performance and image loading
- Metadata and social previews
- 404 behaviour

**Acceptance criteria**

- The six portfolio success questions can be answered within approximately 30 seconds.
- All internal and external links work.
- Production build and lint complete successfully.
- No known content clipping or horizontal overflow remains.
- Major pages are checked at mobile and desktop widths.
- All P0 tickets are `DONE`; remaining P1/P2 items are explicitly recorded.

---

## Proposed implementation order

1. PORT-001 — Primary hiring proposition
2. PORT-002 — Homepage narrative order
3. PORT-003 — Content and evidence inventory
4. PORT-011 — Case-study narrative model
5. PORT-004 — Hero
6. PORT-005 — Career proof
7. PORT-006 — Selected work
8. PORT-008 — Experience and capabilities
9. PORT-010 — Contact and résumé path
10. PORT-007 — How I operate
11. PORT-009 — About
12. PORT-012 — Enterprise case
13. PORT-013 — José case
14. PORT-014 — Tandem case
15. PORT-015 — Crumbs decision
16. PORT-016 — Visual evidence
17. PORT-017 — Scanning and hierarchy
18. PORT-018 — Accessibility and metadata
19. PORT-019 — Analytics
20. PORT-020 — Final QA

## Decision log

Use this section to record choices that affect multiple tickets.

| Date | Decision | Reason | Affected tickets |
| --- | --- | --- | --- |
| 2026-08-18 | Treat the portfolio as a hiring decision journey, not only a project gallery. | The current site contains strong evidence but does not sequence it for a recruiter or hiring manager. | All |
| 2026-08-18 | Preserve the existing editorial visual identity and conversational voice. | Differentiation and personality are existing strengths. | PORT-004 onward |
| 2026-08-18 | Lead selected work with the enterprise agentic-platform case. | It provides the strongest evidence of seniority, leadership, deployment, and business impact. | PORT-006, PORT-012 |
| 2026-08-18 | Use the résumé as the source of truth for initial public claims; treat portfolio-only detail as requiring confirmation when confidentiality or implementation state is unclear. | Prevents stronger positioning from introducing unsupported claims. | PORT-001, PORT-003 onward |
| 2026-08-18 | Use identity → proof → selected work → operating model → experience → about → contact as the homepage narrative. | Moves hiring evidence ahead of repeated philosophy and creates a clear decision path. | PORT-002, PORT-004 onward |
| 2026-08-18 | Position Ronak as an “AI Solutions Architect and Product Leader,” optimised for AI Solutions Architect, AI Product Manager, and AI Forward Deployed Lead roles. | Accurately connects current enterprise architecture work with the longer product-leadership career arc. | PORT-001, PORT-004 onward |
| 2026-08-18 | Do not state that Ronak is open to opportunities. | The work and capabilities should establish role fit without an explicit availability announcement. | PORT-004, PORT-010 |
| 2026-08-18 | Publish anonymised, outcome-level enterprise evidence; omit use-case functions, procurement context, and client-specific architecture details. | Preserves the strongest hiring evidence while reducing client-identification and confidentiality risk. | PORT-003, PORT-005, PORT-012 |
| 2026-08-18 | Do not mention plans to publish independent-project repositories or demos until public links exist. | Avoids making the portfolio advertise incomplete future work. | PORT-006, PORT-013, PORT-014, PORT-015 |
| 2026-08-18 | Use “Discover → Shape → Architect → Deliver” as the operating model. | “Shape” makes product and commercial judgement explicit; “Adopt” was not added because sustained adoption evidence has not yet been established. | PORT-007 |
| 2026-08-18 | Present Crumbs as a completed experiment rather than selected work. | It adds personality and evidence of curiosity without competing with the three projects that carry the core hiring argument. | PORT-006, PORT-015 |
| 2026-08-18 | Make direct email the primary conversation path, with résumé, LinkedIn, and GitHub available as supporting actions. | Removes LinkedIn-only friction while keeping professional verification paths visible. | PORT-010 |
| 2026-08-18 | Structure every primary case around signal, context, ownership, constraints, decisions, approach, evidence, and retrospective. | Creates consistent scanning while making senior judgement and honest project maturity visible. | PORT-011 onward |
| 2026-08-18 | Keep Crumbs as a compact completed experiment rather than a primary case study. | It demonstrates curiosity without diluting the three-project hiring narrative. | PORT-015 |
| 2026-08-18 | Treat José as an educational working core: publish repository-verified controller, policy, isolation, budget, and verification boundaries while labelling observability, evaluation, memory, evolution, and feature-scale work as future state. | Demonstrates real architectural depth without overstating maturity or test breadth. | PORT-013 |
| 2026-08-18 | Make Tandem's household-level Safe to Spend calculation the centre of its case, and use real household behaviour rather than an invented savings metric as evidence. | The repository verifies an explainable product mechanism; current use verifies behavioural value but not a quantified financial outcome. | PORT-014 |

## Open inputs

These are expected to be resolved during PORT-001 and PORT-003:

- Final target-role wording
- Preferred contact email
- Canonical résumé file and public URL strategy
- Public/demo/repository status for each independent project
- Exact wording and substantiation of metrics
- Which client industries or business functions may be named
- Available screenshots and sanitised diagrams
- Whether the site should explicitly state availability for new roles
