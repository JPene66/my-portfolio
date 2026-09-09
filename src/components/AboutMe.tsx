"use client";

import { motion } from "framer-motion";
import { UserCheck, Cpu, Code2, Rocket } from "lucide-react";
import { fadeInUp, lineDrawVariant } from "@/lib/motion";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-16 md:py-24 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
      {/* Animated top section divider line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          variants={lineDrawVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[1px] w-full bg-gradient-to-r from-[#1BA098]/60 via-[#3B4A8C]/40 to-transparent origin-left"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1BA098]">
              <UserCheck className="w-3.5 h-3.5" />
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)]">
              Engineering AI Systems for Production
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* First-person narrative */}
              <div className="text-base sm:text-lg text-[var(--text-body)] leading-relaxed space-y-4 font-normal">
                <p>
                  I design and ship AI systems that solve real problems. From agentic workflows and RAG pipelines to fine-tuned models and evaluation frameworks. I build production applications with guardrails, observability, and measurable outcomes.
                </p>
                <p>
                  I don't treat AI as a black box. I treat it as a system that needs testing, monitoring, and continuous improvement. Every application I ship has automated evaluation, safety guardrails, and clear source attribution because AI should be reliable, not just impressive.
                </p>
                <p>
                  I'm looking for roles where I can build systems that automate complex workflows, reason over unstructured documents, and deliver trusted, explainable answers at scale.
                </p>
              </div>
            </div>

            {/* Core Focus Specs */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-sm">
                <h3 className="text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider font-mono border-b border-[var(--border-color)] pb-2">
                  Engineering Principles
                </h3>

                <ul className="space-y-3.5 text-sm text-[var(--text-body)]">
                  <li className="flex items-start gap-2.5">
                    {/* <Cpu className="w-4 h-4 text-[#1BA098] shrink-0 mt-0.5" /> */}
                    <span><strong>LLM Systems:</strong> Prompt chaining, persona design & LLM-as-judge scoring</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    {/* <Code2 className="w-4 h-4 text-[#3B4A8C] shrink-0 mt-0.5" /> */}
                    <span><strong>RAG & Vector Search:</strong> Hybrid retrieval, ChromaDB, citation attribution</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    {/* <Rocket className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" /> */}
                    <span><strong>Agents & Memory:</strong> LangGraph multi-agent loops & checkpointing</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#1F2A44]/30 border border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-1">
                <div className="font-mono text-[#1BA098] font-medium">Target Roles:</div>
                <div className="text-[var(--text-heading)] font-medium">AI Engineer · Applied AI Engineer · AI Solutions Architect · AI Automation Specialist</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
