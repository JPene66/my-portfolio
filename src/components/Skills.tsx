"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Cpu, Database, Activity, Terminal } from "lucide-react";
import { toolsData, ToolItem } from "@/data/tools";
import { fadeInUp, lineDrawVariant, customEase } from "@/lib/motion";
import {
  PythonLogo,
  OpenAILogo,
  AnthropicLogo,
  HuggingFaceLogo,
  PyTorchLogo,
  FastAPILogo,
  StreamlitLogo,
  NextjsLogo,
  TypeScriptLogo,
  DockerLogo,
  ChromaDBLogo,
  LangChainLogo,
  LangfuseLogo,
  N8nLogo,
} from "@/components/icons/TechLogos";

const renderToolIcon = (iconName: string, className = "w-6 h-6") => {
  switch (iconName) {
    case "Python":
      return <PythonLogo className={className} />;
    case "OpenAI":
      return <OpenAILogo className={className} />;
    case "Anthropic":
      return <AnthropicLogo className={className} />;
    case "HuggingFace":
      return <HuggingFaceLogo className={className} />;
    case "PyTorch":
      return <PyTorchLogo className={className} />;
    case "FastAPI":
      return <FastAPILogo className={className} />;
    case "Streamlit":
      return <StreamlitLogo className={className} />;
    case "Nextjs":
      return <NextjsLogo className={className} />;
    case "TypeScript":
      return <TypeScriptLogo className={className} />;
    case "Docker":
      return <DockerLogo className={className} />;
    case "ChromaDB":
      return <ChromaDBLogo className={className} />;
    case "LangChain":
      return <LangChainLogo className={className} />;
    case "Langfuse":
      return <LangfuseLogo className={className} />;
    case "N8n":
      return <N8nLogo className={className} />;
    default:
      return <Terminal className={className} />;
  }
};

type FilterCategory = "all" | "ai-frameworks" | "vector-retrieval" | "eval-obs" | "prod-engineering";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const categories: { id: FilterCategory; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All Stack", icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: "ai-frameworks", label: "AI & Agents", icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: "vector-retrieval", label: "Vector DBs & RAG", icon: <Database className="w-3.5 h-3.5" /> },
    { id: "eval-obs", label: "Eval & Observability", icon: <Activity className="w-3.5 h-3.5" /> },
    { id: "prod-engineering", label: "Engineering & Infra", icon: <Terminal className="w-3.5 h-3.5" /> },
  ];

  const displayedTools =
    activeCategory === "all"
      ? toolsData
      : toolsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
      {/* Animated section divider line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          variants={lineDrawVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[1px] w-full bg-gradient-to-r from-[#1BA098]/60 via-[#3B4A8C]/40 to-transparent origin-left"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1BA098]">
            Stack & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)]">
            Frameworks, APIs & Infrastructure
          </h2>
          <p className="text-base text-[var(--text-muted)] max-w-2xl">
            The modern AI engineering toolkit I use to design, evaluate, and ship production-grade intelligent systems.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[var(--border-color)] pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#1BA098] text-white shadow-md shadow-[#1BA098]/20"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-color)] hover:border-[#1BA098]/40"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tools & Frameworks Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {displayedTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, ease: customEase }}
                className="group relative p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#1BA098]/60 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4"
              >
                {/* Top Row: Icon + Level Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] group-hover:border-[#1BA098]/40 transition-colors shrink-0">
                    {renderToolIcon(tool.iconName)}
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                      tool.level === "Expert"
                        ? "bg-[#1BA098]/15 text-[#1BA098] border border-[#1BA098]/30"
                        : tool.level === "Advanced"
                        ? "bg-[#3B4A8C]/15 text-[#3B4A8C] dark:text-[#5668b5] border border-[#3B4A8C]/30"
                        : "bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)]"
                    }`}
                  >
                    {tool.level}
                  </span>
                </div>

                {/* Tool Name & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[var(--text-heading)] group-hover:text-[#1BA098] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed font-normal">
                    {tool.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
