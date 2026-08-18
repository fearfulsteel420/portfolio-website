# Phase 3 — Case-study System

## Status

- PORT-011 — `DONE`: reusable narrative model defined.
- PORT-012 — `DONE`: enterprise case rewritten around leadership, decisions, reliability, outcome, and retrospective.
- PORT-013 — `DONE`: José case rewritten with repository-verified controller and policy boundaries plus honest maturity limits.
- PORT-014 — `DONE`: Tandem case rewritten with repository-verified Safe to Spend logic, household model, and real-use evidence.
- PORT-015 — `DONE`: Crumbs remains a completed experiment outside the primary case-study set.

## Case-study narrative model

Every primary case study should answer the same hiring questions while allowing different projects to prove different strengths.

### 1. Signal

The first viewport should establish:

- What capability this project proves
- The project status
- The problem in one sentence
- Ronak's role
- The most meaningful outcome or current-state evidence

### 2. Context and stakes

Explain:

- Who had the problem
- What was happening before the project
- Why solving it mattered
- What made the situation difficult

For client work, preserve anonymity and avoid details that could identify the organisation.

### 3. Role and ownership

Separate Ronak's contribution from the team's output:

- Responsibilities personally owned
- Team size and relevant collaborators
- Decisions Ronak made or led
- Work performed directly versus delegated or co-created

### 4. Constraints

Name the boundaries that shaped the solution, such as:

- Time and team size
- Data or integration limitations
- Security and access control
- Reliability or evaluation requirements
- User behaviour and adoption
- Confidentiality
- Deliberate product exclusions

### 5. Key decisions and tradeoffs

Use two to four decisions. Each should follow:

> Because **constraint or insight**, we chose **decision** instead of **alternative**, which meant **tradeoff or consequence**.

This is the most important section for demonstrating senior judgement.

### 6. System or product approach

Explain the solution at two levels:

- A plain-language workflow for hiring managers and product leaders
- Enough architectural or product depth to be credible to a specialist

Avoid technology inventories that are not connected to a design decision.

### 7. Outcome and evidence

Distinguish among:

- Delivered outcomes
- Measured improvements
- Enabled subsequent work
- Current usage
- Working capabilities
- Planned or incomplete capabilities

Do not mix identified opportunity with realised benefit.

### 8. Retrospective

Close with:

- What Ronak learned
- What changed in his thinking
- What he would improve or test next

This should demonstrate judgement without manufacturing a false failure narrative.

## Shared structured data model

Each case should be representable with:

```text
slug
title
capabilitySignal
type
status
summary
question
role
team
timeline (optional)
context
stakes
constraints[]
decisions[]
workflow[]
approachSections[]
outcomes[]
evidenceNotes[]
retrospective
technologies[] (optional)
confidentialityNote (optional)
links[] (optional)
visuals[] (deferred)
nextProject
```

## Enterprise agentic platform — verified foundation

### What this case must prove

Leadership, enterprise solution architecture, platform thinking, stakeholder ownership, and measurable reuse.

### Verified facts

- Ronak led a five-person delivery team.
- The team architected and deployed a multi-agent platform spanning four enterprise use cases.
- Ronak owned product vision, architecture, scope, timelines, and client communication.
- The work produced reusable interaction, memory and caching, evaluation, and RBAC frameworks.
- Reuse enabled another team to reduce new-use-case delivery from approximately 12 weeks to four.
- Client details must remain anonymised.

### Safe publication boundary

- Use “four enterprise use cases”; do not name their business functions.
- Publish aggregate team size and the 12-to-4-week outcome.
- Do not publish procurement as the later reuse context.
- Do not attribute the later delivery work to Ronak personally.
- Do not publish the client-specific technology stack or architecture.
- General résumé-verified technologies may appear only when needed to explain Ronak's capability, not to fingerprint the client.

### Confirmed context and decisions

- The client wanted to improve productivity with AI-enabled work tools, beginning with a priority department before expanding organisationally.
- The team conducted use-case discovery with the business-function leader and shortlisted four high-priority opportunities.
- The four use cases belonged to the same business function and shared broadly similar features.
- The intended trajectory was always four initial use cases followed by a platform that could onboard other business functions.
- The initial engagement ran for approximately six months.
- The five-person team combined full-stack, AI, and DevOps engineering capabilities.
- Ronak prioritised tightly defined scope to protect delivery against moving expectations.
- The codebase was separated into frontend, backend, and agentic layers with clear modular boundaries.
- The product principle was functional quality over ornamental complexity: it needed to work reliably and remain presentable without spending the schedule on a highly elaborate interface.
- Data access and development-platform permissions were material constraints.
- Stakeholder expectations moved during the engagement.
- Evaluation combined an internal golden test set with an extensive UAT phase involving end users and iterative improvement of agent outputs.
- The solution was handed to the client's technology department for continued ownership, with the initial business function as the first end-user group and organisational expansion as the longer-term direction.
- Twelve weeks was the previous duration for comparable use cases; the subsequent team completed its delivery in approximately four weeks using the reusable framework.
- During a late architectural pivot requested by the client, Ronak protected the nearly complete original delivery while assigning one person to reproduce the solution using the requested approach in parallel. Both versions were handed over; the original remained the recommended, more stable and scalable approach.
- In retrospect, Ronak would establish stronger acceptance criteria and involve end users earlier rather than working primarily through senior stakeholders during the first part of delivery.

### Publication choices

- Describe the mandate as improving productivity and creating a path to wider AI-enabled operations. Do not publish the eventual FTE-reduction ambition.
- Describe one priority business function without identifying it.
- Explain the three-layer modular boundary without naming the client-specific stack.
- Present the parallel architecture response as an example of delivery leadership and risk management, without criticising the client or describing the requested architecture.
- Do not frame limited authority to reject client implementation preferences as a project failure.

### Draft narrative spine

**Signal**

> A six-month enterprise delivery that turned four related AI use cases into the foundation of a reusable organisational platform.

**Context**

> The client wanted to begin improving workforce productivity with AI-enabled tools inside one priority business function. Use-case discovery with its leadership produced four high-priority opportunities with overlapping needs—and a larger ambition to onboard other functions later.

**Role**

> Ronak led a five-person team of full-stack, AI, and DevOps engineers. He owned product vision, architecture, scope, timelines, and client communication.

**Key decisions**

1. Protect delivery with tightly managed scope despite moving stakeholder expectations.
2. Separate frontend, backend, and agentic concerns behind modular boundaries so shared capabilities could become a platform.
3. Prioritise a reliable, usable product over an ornamental interface while maintaining acceptable frontend quality.
4. Respond to a late architecture pivot through parallel delivery rather than destabilising the near-complete recommended solution.

**Reliability**

> Agent performance was evaluated against an internal golden test set, then strengthened through extensive end-user UAT and iterative output improvements.

**Outcome**

> Four use cases were deployed and handed to the client's technology organisation. The reusable framework later helped another team reduce comparable delivery from approximately 12 weeks to four.

**Retrospective**

> Define acceptance criteria more rigorously and involve end users earlier, instead of allowing senior stakeholders to remain the primary feedback channel for too long.

## José — verified foundation

### What this case must prove

Hands-on agent architecture, safety and reliability judgement, deterministic system design, and intellectual honesty about maturity.

### Verified facts

- José is an independent coding-agent harness in active development.
- Its working core turns an authorised GitHub issue into a tested pull request.
- The lifecycle uses deterministic control, isolated execution, revocable permissions, and human review.
- The model cannot grant itself tools, expand its budget, advance its lifecycle, or merge autonomously.
- The architecture treats tests as evidence rather than model opinion.
- Observability, long-term memory, and controlled self-evolution are not complete and must not be presented as current capabilities.

### Confirmed intent and current state

- José began as a learning project to understand what agent harnesses do and how far their architecture can extend model capability.
- The longer-term hypothesis is that smaller local models can support useful coding workflows when cost, offline access, or data privacy make frontier models undesirable or unavailable.
- José is primarily a terminal application and is believed to be mainly Python; this must be verified from the repository before publication.
- The current path can take an open issue, ask clarification questions when needed, and produce an end-to-end tested pull request for human review.
- It has been tested against one repository, another of Ronak's independent projects.
- Current scope is basic bug fixes. End-to-end feature delivery remains a future capability.
- A Docker image is created from the existing repository version; changes and tests run inside a container before a pull request is prepared.
- When verification fails, José examines logs, revises its work, and retries within a fixed retry limit. If unresolved, it stops and reports its findings.
- Human review is a deliberate hard boundary because smaller models are more error-prone and a person with end-to-end context should make the final decision, particularly for critical changes.
- Current model testing uses Gemma 4, pending repository/configuration verification.
- Planned milestones include an evaluation and observability dashboard and controlled self-evolving/personalised capabilities.
- Ronak's principal learning is that scalable AI-assisted development requires a systems-first approach: model capability does not remove the need to design lifecycle, extension points, boundaries, and failure handling carefully.
- The broader thesis is that improving smaller models will make fully local agent-led software development increasingly practical.

### Evidence boundary

- Describe this as a working core and learning build, not a production-ready coding agent.
- State explicitly that it has been tested against one repository and currently handles basic bug fixes.
- Do not claim general reliability, feature delivery, self-evolution, long-term memory, or a completed observability system.
- Present the local-model future as a hypothesis and direction, not a demonstrated result.

### Repository-verified implementation

The connected private repository `fearfulsteel420/jose-coding-assistant` confirms:

- Python 3.12 with a terminal entry point, FastAPI support, typed models, strict mypy, pytest, and Ruff.
- A purpose-built deterministic controller owns `validate → baseline → investigate → plan → edit → verify → integrate → reverify → submit` transitions.
- The model proposes schema-validated actions but cannot advance state, grant permissions, change active policy or budgets, certify verification, or authorise submission.
- Eligibility requires an enrolled, open, unassigned issue with `ready-for-agent`; authority is checked again during the run and can be revoked.
- Default budgets include 30 minutes, 40 model turns, US$5 model spend, 100 tool calls, three identical failures, 20 changed files, and 1,000 changed lines. An active run cannot enlarge them.
- Merge, self-approval, protected-branch push, repository administration, host shell, and production-secret access are permanently prohibited in policy code.
- Every run is designed for a fresh non-root Docker container with a read-only root, bounded resources, no Docker socket, no credentials, and trust-profile-controlled network access.
- The controller records a pre-change verification baseline, uses deterministic commands after editing, integrates the current target branch, then reverifies before PR submission.
- Clarification blocks the run when requirements permit materially different fixes.
- Three materially identical failures stop correction attempts.
- The working implementation creates a ready-for-review Resolution Pull Request and performs a human handoff; it never approves or merges.
- The design pins one model configuration per run through an OpenAI-compatible OpenRouter adapter with no automatic fallback. The exact active José model name was not found in the inspected repository configuration, so “Gemma 4” will not be published as an implementation fact yet.
- A read-only observability dashboard, evaluation suites, persistent memory, and controlled evolution are part of the documented version-one design, but Ronak confirms they are future milestones. They must remain clearly labelled as planned rather than working features.

### Draft narrative spine

**Signal**

> A working educational coding-agent harness exploring whether better system boundaries can make smaller models useful for real software maintenance.

**Context**

> José began as a way to understand the machinery around an agent—not simply call a model and hope. The longer-term bet is that local, lower-cost models can become practical coding collaborators when privacy, connectivity, or model cost matters.

**Key decisions**

1. Put authority in a deterministic controller rather than the model.
2. Treat issue eligibility as explicit, revocable permission.
3. Run every attempt inside a disposable, credential-free container.
4. Use baseline and post-change checks as evidence, with a human review boundary before merge.
5. Stop within fixed budgets and report a Blocked Outcome rather than manufacturing success.

**Honest current state**

> The working core has been tested on one repository and handles basic bug fixes: it can investigate an authorised issue, request clarification, edit and test in isolation, retry bounded failures, and prepare a pull request for review. Feature-scale work, the observability dashboard, evaluation system, durable memory, and controlled evolution remain ahead.

**Retrospective**

> Building with AI has reinforced that scalable agentic software still needs deliberate lifecycle design, typed boundaries, extension points, and failure handling. Improving models make local development increasingly plausible; they do not make the surrounding system optional.

## Tandem — verified foundation

### What this case must prove

Product judgement, human-centred problem framing, deliberate scope control, and end-to-end independent building.

### Verified facts

- Tandem is a full-stack household-finance working POC.
- Ronak and his wife use it beyond testing and continue to improve it.
- It supports AI-assisted expense logging and a Safe to Spend model.
- It is designed around two people sharing household finances.
- Bank integrations and SMS scraping were deliberately excluded from the first version.
- Manual logging remains available.
- The current site describes a FastAPI service and web experience.

### Confirmed product context

- Ronak and his wife wanted visibility into where their money was going and where they could spend more mindfully to increase savings and investments.
- They were not replacing an existing finance app; the goal was an opinionated product specific to how they manage money together.
- They regularly log expenses and monitor Safe to Spend to balance everyday spending.
- Real use made the behavioural value clear: the small act of logging and reviewing spending creates mindfulness in a world where purchasing has become almost frictionless.
- A rigid daily or weekly budget felt restrictive, which motivated a dynamic Safe to Spend number instead.
- Expenses can be logged through free-form text or a manual form.
- The AI parser produces amount, category, cleaned description, transaction date, and an emergency/buffer flag; the user confirms the structured expense before it is stored.
- Bank linking and SMS scraping were excluded to reduce permission and onboarding friction and keep the POC simpler.
- Web was the easier shared starting point across two different phone operating systems. The repository contains mobile work, but the portfolio should describe the currently used experience rather than imply a completed mobile product.
- The working features are considered functional; UI refinement and heavier AI capabilities remain incomplete.
- Supabase supports authentication and household data, with row-level policies limiting records to household members.
- The longer-term direction is a personal-finance copilot for spending analysis, sustainable planning, and investment guidance.
- Product principle: introduce AI only where it materially improves the experience.

### Repository-verified product logic

The connected private repository `fearfulsteel420/tandem-finance` confirms:

- A FastAPI backend, React web client, Expo/React Native mobile structure, and Supabase/PostgreSQL data model.
- Monetary values are stored in paise to avoid floating-point precision errors.
- Safe to Spend is a household-level number calculated as:

```text
(monthly income
 - fixed expenses
 - investments
 - active goal contributions
 - emergency buffer
 - variable spending so far)
÷ days remaining in the month
```

- The API returns daily and weekly views plus a transparent breakdown of every input.
- Household members share fixed expenses, investments, goals, transactions, and the Safe to Spend result. Transactions retain who logged them, but the implemented core calculation is household-level rather than separate personal allowances.
- Household invitations use expiring tokens, and Supabase row-level security scopes financial records to the authenticated member's household.
- Natural-language parsing is provider-agnostic and returns structured data for confirmation rather than writing an LLM response directly to the ledger.
- Text logging is implemented. Voice and receipt/photo logging are explicit future stubs and must not be described as working.
- The code supports a configurable emergency buffer, savings goals, recurring investments, fixed expenses, variable transactions, and rollover preferences.

### Draft narrative spine

**Signal**

> An opinionated household-finance POC that replaces restrictive budgets with one present-tense question: what is safe for us to spend today?

**Context**

> Ronak and his wife wanted to become more deliberate about spending, saving, and investing, but did not want daily finance administration or a suffocating budget. No existing app was being replaced; Tandem was built around their own household behaviour from the start.

**Key decisions**

1. Make Safe to Spend the primary output instead of another retrospective spending dashboard.
2. Calculate it at household level from income, commitments, investments, goals, buffer, actual spending, and days left.
3. Keep manual entry available and use AI only to reduce the friction of turning natural language into structured expense data.
4. Exclude bank linking and SMS scraping from the POC to avoid permission, privacy, and implementation overhead.
5. Start with a shared web experience across different phone ecosystems while leaving room for mobile work later.

**Current evidence**

> The working POC is used regularly by Ronak and his wife to log expenses and monitor Safe to Spend. The strongest result is behavioural rather than a fabricated financial percentage: routine visibility has made discretionary spending more deliberate.

**Honest next state**

> The current feature set works, with UI refinement still needed. The broader personal-finance copilot—analysis, planning, investment guidance, and heavier AI capabilities—remains a roadmap rather than a current claim.

**Retrospective**

> Keep the product simple and use AI only where it materially removes friction. The useful intelligence is not the presence of a model; it is helping two people make better decisions without making money management feel punitive.

## Crumbs — final role

Crumbs remains a compact homepage experiment rather than a primary case study.

### Rationale

- It is a completed experiment with a working POC and no planned active development.
- It demonstrates curiosity and technical range.
- It does not provide stronger hiring evidence than the enterprise platform, José, or Tandem.
- Giving it equal case-study weight would weaken the intentional three-project argument.

### Treatment

- Retain the existing compact “completed experiment” section.
- Do not create a primary project card or case-study route in this iteration.
- Do not mention future work, public repositories, or demos.
- Revisit only if a polished audio sample or pipeline artifact becomes available later.
