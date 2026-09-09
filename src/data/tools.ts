export interface ToolItem {
  id: string;
  name: string;
  category: "ai-frameworks" | "vector-retrieval" | "eval-obs" | "prod-engineering";
  categoryName: string;
  tagline: string;
  level: "Expert" | "Advanced" | "Proficient";
  iconName: string;
  accentColor?: string;
}

export const toolsData: ToolItem[] = [
  // AI Frameworks & Models
  {
    id: "langgraph",
    name: "LangGraph",
    category: "ai-frameworks",
    categoryName: "AI Frameworks & Agents",
    tagline: "Stateful multi-agent orchestration, checkpointing & cyclic graphs",
    level: "Expert",
    iconName: "LangChain",
    accentColor: "#1BA098",
  },
  {
    id: "openai",
    name: "OpenAI API",
    category: "ai-frameworks",
    categoryName: "AI Frameworks & Agents",
    tagline: "GPT-4o, O1, structured JSON outputs & function calling",
    level: "Expert",
    iconName: "OpenAI",
    accentColor: "#10A37F",
  },
  {
    id: "anthropic",
    name: "Anthropic Claude API",
    category: "ai-frameworks",
    categoryName: "AI Frameworks & Agents",
    tagline: "Claude 3.5 Sonnet, prompt caching & computer use agents",
    level: "Expert",
    iconName: "Anthropic",
    accentColor: "#D97706",
  },
  {
    id: "huggingface",
    name: "Hugging Face & PEFT",
    category: "ai-frameworks",
    categoryName: "AI Frameworks & Agents",
    tagline: "LoRA, QLoRA fine-tuning, dataset prep & model evaluation",
    level: "Advanced",
    iconName: "HuggingFace",
    accentColor: "#FFD21E",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ai-frameworks",
    categoryName: "AI Frameworks & Agents",
    tagline: "Tensor operations, fine-tuning scripts & model evaluation",
    level: "Proficient",
    iconName: "PyTorch",
    accentColor: "#EE4C2C",
  },
  {
    id: "langchain",
    name: "LangChain & LlamaIndex",
    category: "ai-frameworks",
    categoryName: "AI Frameworks & Agents",
    tagline: "Prompt templates, agent tool execution & document parsers",
    level: "Advanced",
    iconName: "LangChain",
    accentColor: "#1C3C3C",
  },

  // Vector DBs & Retrieval
  {
    id: "chromadb",
    name: "ChromaDB",
    category: "vector-retrieval",
    categoryName: "Vector DBs & Retrieval",
    tagline: "Local & cloud vector storage, embedding collections & hybrid search",
    level: "Expert",
    iconName: "ChromaDB",
    accentColor: "#1E88E5",
  },
  {
    id: "vector-search",
    name: "Hybrid & Semantic Search",
    category: "vector-retrieval",
    categoryName: "Vector DBs & Retrieval",
    tagline: "BM25 + vector similarity, re-ranking, and query decomposition",
    level: "Expert",
    iconName: "ChromaDB",
    accentColor: "#3B4A8C",
  },

  // Evaluation & Observability
  {
    id: "langfuse",
    name: "Langfuse & LangSmith",
    category: "eval-obs",
    categoryName: "Evaluation & Observability",
    tagline: "LLM call tracing, token cost tracking, latency logging & feedback",
    level: "Expert",
    iconName: "Langfuse",
    accentColor: "#1BA098",
  },
  {
    id: "ragas-deepeval",
    name: "Ragas & DeepEval",
    category: "eval-obs",
    categoryName: "Evaluation & Observability",
    tagline: "RAG faithfulness, answer relevance & LLM-as-judge scoring",
    level: "Advanced",
    iconName: "Langfuse",
    accentColor: "#B8860B",
  },

  // Engineering & Production
  {
    id: "python",
    name: "Python 3.11+",
    category: "prod-engineering",
    categoryName: "Engineering & Infrastructure",
    tagline: "Async IO, Pydantic data schemas, typing & pytest regression suites",
    level: "Expert",
    iconName: "Python",
    accentColor: "#3776AB",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "prod-engineering",
    categoryName: "Engineering & Infrastructure",
    tagline: "Production API wrappers, streaming endpoints, auth & rate limiting",
    level: "Advanced",
    iconName: "FastAPI",
    accentColor: "#009688",
  },
  {
    id: "streamlit",
    name: "Streamlit",
    category: "prod-engineering",
    categoryName: "Engineering & Infrastructure",
    tagline: "Interactive AI app dashboards, rapid demo deployment & state UI",
    level: "Expert",
    iconName: "Streamlit",
    accentColor: "#FF4B4B",
  },
  {
    id: "nextjs-ts",
    name: "Next.js & TypeScript",
    category: "prod-engineering",
    categoryName: "Engineering & Infrastructure",
    tagline: "App Router, modern UI components, server components & Tailwind",
    level: "Advanced",
    iconName: "Nextjs",
    accentColor: "#000000",
  },
  {
    id: "n8n",
    name: "n8n & Webhooks",
    category: "prod-engineering",
    categoryName: "Engineering & Infrastructure",
    tagline: "Workflow automation, API webhooks & Slack/Email integration",
    level: "Advanced",
    iconName: "N8n",
    accentColor: "#FF6D5A",
  },
  {
    id: "docker-vercel",
    name: "Docker & Vercel",
    category: "prod-engineering",
    categoryName: "Engineering & Infrastructure",
    tagline: "Containerization, CI/CD pipelines & serverless cloud deployment",
    level: "Advanced",
    iconName: "Docker",
    accentColor: "#2496ED",
  },
];
