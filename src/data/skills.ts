export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "prompt-eval",
    category: "Prompt Engineering & Evaluation",
    description: "Systematic prompt design, structured outputs, and automated rubric scoring",
    skills: [
      "Zero/few-shot & CoT prompting",
      "System prompts & persona design",
      "Structured output (JSON mode)",
      "Prompt chaining",
      "Prompt versioning & A/B testing",
      "LLM-as-judge rubric scoring",
    ],
  },
  {
    id: "rag-retrieval",
    category: "RAG & Retrieval",
    description: "Hybrid vector search, chunking strategies, and source attribution",
    skills: [
      "Chunking strategies",
      "Embeddings",
      "Vector databases (ChromaDB)",
      "Hybrid search",
      "Re-ranking",
      "Citation & source attribution",
      "RAG evaluation (faithfulness/relevance/groundedness)",
    ],
  },
  {
    id: "ai-agents",
    category: "AI Agents",
    description: "Stateful multi-agent workflows, tool execution, and episodic memory",
    skills: [
      "Agent architecture (ReAct, Plan-and-Execute)",
      "Tool/function calling",
      "Agent memory (short/long-term/episodic)",
      "Multi-agent orchestration",
      "LangGraph",
      "State persistence & checkpointing",
      "Human-in-the-loop design",
    ],
  },
  {
    id: "advanced-retrieval",
    category: "Advanced / Agentic Retrieval",
    description: "Query planning, iterative refinement loops, and GraphRAG",
    skills: [
      "Query planning & decomposition",
      "Self-querying retrieval",
      "Iterative retrieve-refine loops",
      "Corrective RAG (CRAG)",
      "Lightweight GraphRAG",
    ],
  },
  {
    id: "observability-eval",
    category: "LLM Observability & Evaluation",
    description: "Production telemetry, cost tracking, latency logging, and drift detection",
    skills: [
      "Tracing LLM calls (Langfuse/LangSmith)",
      "Latency & cost logging",
      "Hallucination detection",
      "Drift monitoring",
      "A/B testing in production",
      "Dashboards & alerting",
      "User feedback loops",
    ],
  },
  {
    id: "finetuning-peft",
    category: "LLM Fine-tuning & PEFT",
    description: "Parameter-efficient adaptation, instruction tuning, and dataset prep",
    skills: [
      "LoRA & QLoRA",
      "Dataset preparation for fine-tuning",
      "Instruction tuning",
      "RLHF & DPO fundamentals",
      "HuggingFace / Together AI / Axolotl",
      "Evaluating fine-tuned models",
      "Fine-tune vs. RAG vs. prompting tradeoffs",
    ],
  },
  {
    id: "eval-testing",
    category: "Evaluation Design & Dataset Testing",
    description: "Golden datasets, benchmark frameworks, and regression testing suites",
    skills: [
      "Golden dataset design",
      "Per-sample metrics (exact match, ROUGE, semantic similarity)",
      "Human evaluation rubrics",
      "LLM-as-judge frameworks (Ragas, DeepEval, Promptfoo)",
      "Regression test suites for prompts",
      "Bias & safety evaluation",
    ],
  },
  {
    id: "api-integration",
    category: "API & Integration Engineering",
    description: "Resilient SDK integrations, rate limiting, and event streaming",
    skills: [
      "REST API design",
      "Authentication (API keys, OAuth 2.0)",
      "Rate limiting & exponential backoff",
      "Webhooks",
      "OpenAI / Anthropic SDKs",
      "Streaming responses",
      "Error handling & retries",
    ],
  },
  {
    id: "aeo-hardening",
    category: "AEO & Production Hardening",
    description: "Prompt injection defense, caching, structured data, and scale security",
    skills: [
      "Answer Engine Optimization fundamentals",
      "Schema markup & structured data",
      "Prompt/response caching",
      "Security (prompt-injection defense, PII redaction)",
      "Cost optimization at scale",
      "Load testing",
      "CI/CD for AI applications",
    ],
  },
  {
    id: "engineering-prod",
    category: "Engineering & Production",
    description: "Core Python development, automated testing, and cloud deployment",
    skills: [
      "Python",
      "Guardrails & safe tool execution",
      "Automated testing (pytest)",
      "Streamlit",
      "Deployment (Vercel/Streamlit Cloud)",
      "Git/GitHub",
    ],
  },
];
