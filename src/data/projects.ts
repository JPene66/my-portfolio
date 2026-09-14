export interface Project {
  id: string;
  name: string;
  tagline: string;
  tech: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  status: "completed" | "in-progress";
  badgeText?: string;
}

export const projects: Project[] = [
  {
    id: "persuasion-arena",
    name: "The Persuasion Arena",
    tagline: "An AI debate and negotiation coach that argues back and scores you.",
    tech: ["Python", "OpenAI API", "Streamlit"],
    features: [
      "4 distinct negotiation personas, each with A/B-testable prompt versions",
      "Live rubric scoring on every reply — logic, evidence, clarity, persuasiveness — via an LLM-as-judge",
      "Session leaderboard tracking performance across rounds",
      "Exportable Markdown performance report",
      "Shared guardrails and prompt-injection resistance across every persona",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "completed",
  },
  {
    id: "case-file-ai",
    name: "Case File AI",
    tagline: "A multi-source investigation assistant that cites its sources and flags when they disagree.",
    tech: ["Python", "OpenAI (chat + embeddings)", "ChromaDB", "Streamlit"],
    features: [
      "Multi-source ingestion — PDFs, web articles, and plain text, all parsed into one consistent format",
      "Hybrid search blending vector similarity with keyword matching",
      "An LLM-as-judge contradiction detector that flags genuine factual disagreements between sources, with severity ratings",
      "Transparent, explainable confidence scoring based on source agreement",
      "Every claim in the final report is traceable to a specific source",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "completed",
  },
  {
    id: "apex-sales-agent",
    name: "Apex, Autonomous Sales Agent",
    tagline: "An autonomous multi-stage agent that sources, qualifies, and closes leads — and knows when to call in a human.",
    tech: ["Python", "LangGraph", "OpenAI", "ChromaDB", "Streamlit"],
    features: [
      "Real, live web search sourcing across user-defined target demographics (industry + location)",
      "BANT + MEDICC-style lead scoring with self-querying retrieval against historical deal data for calibration",
      "Persistent, resumable state via LangGraph checkpointing — conversations survive restarts",
      "Negotiation guardrails with automatic human escalation above a discount threshold",
      "Objection handling via an iterative retrieve-refine loop grounded in case studies and past deal outcomes",
      "Short-term, long-term, and episodic memory; a lightweight knowledge graph for multi-hop account relationship queries",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "completed",
  },
  {
    id: "chief-of-staff-ai",
    name: "Chief of Staff AI",
    tagline: "[Update once built — planned: an AI-powered workflow automation that triages email, Slack, and calendar, drafting responses and escalating what actually needs a human.]",
    tech: ["n8n", "APIs", "OpenAI"],
    features: [
      "Planned: Automated email, Slack, and calendar triage with intelligent priority routing",
      "Planned: Contextual draft responses generated from workspace memory and historical interactions",
      "Planned: Human-in-the-loop escalation pipeline for high-risk or ambiguous requests",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "in-progress",
    badgeText: "In Progress",
  },
  {
    id: "built-by-vibes",
    name: "Built By Vibes",
    tagline: "[Update once built — planned: a real micro-SaaS product built and deployed end-to-end using AI-assisted \"vibe coding\" workflows.]",
    tech: ["Cursor/Claude Code", "Next.js", "Vercel"],
    features: [
      "Planned: Micro-SaaS built end-to-end leveraging spec-driven AI generation workflows",
      "Planned: Integrated authentication, subscription billing, and serverless architecture",
      "Planned: Zero-downtime deployment pipeline with automated testing on pull requests",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "in-progress",
    badgeText: "In Progress",
  },
  {
    id: "mission-control",
    name: "Mission Control",
    tagline: "[Update once built — planned: an observability and evaluation dashboard instrumenting every project above with tracing, cost monitoring, and automated regression testing.]",
    tech: ["Langfuse/LangSmith", "Ragas/DeepEval"],
    features: [
      "Planned: Real-time telemetry, token cost breakdown, and latency tracking across all deployed agents",
      "Planned: Automated regression testing suite measuring RAG faithfulness and agent tool selection accuracy",
      "Planned: Live evaluation dashboards powered by Ragas and DeepEval frameworks",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "in-progress",
    badgeText: "In Progress",
  },
  {
    id: "domain-expert-engine",
    name: "Domain Expert Engine (Capstone)",
    tagline: "[Update once built — planned: a fine-tuned, domain-specialized model served behind a hardened, production-ready API.]",
    tech: ["HuggingFace PEFT/LoRA", "FastAPI"],
    features: [
      "Planned: Parameter-Efficient Fine-Tuning (PEFT/LoRA) on custom domain datasets",
      "Planned: Production FastAPI wrapper with rate limiting, input validation, and streaming responses",
      "Planned: Benchmarks evaluating fine-tuned model precision vs general baseline models",
    ],
    demoUrl: "[LIVE DEMO URL]",
    githubUrl: "[GITHUB REPO URL]",
    status: "in-progress",
    badgeText: "In Progress",
  },
];
