"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { fadeInUp, lineDrawVariant } from "@/lib/motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1BA098]">
            Featured Engineering
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)]">
                Projects Archive
              </h2>
              <p className="text-base text-[var(--text-muted)] max-w-2xl mt-1">
                Deployed applications, agentic workflows, and RAG pipelines built with automated evaluation, guardrails, and cited answers.
              </p>
            </div>

            <div className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-3.5 py-2 rounded-xl border border-[var(--border-color)] flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#1BA098]" />
              <span>Interactive 3D Tilt · Click for architecture breakdown</span>
            </div>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
