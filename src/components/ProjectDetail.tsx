"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isCompleted = project.status === "completed";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden z-10 space-y-6 p-6 sm:p-8 my-8 text-left">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-color)] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              {isCompleted ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#1BA098]/15 text-[#1BA098] border border-[#1BA098]/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Deployed & Tested
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#B8860B]/15 text-[#B8860B] border border-[#B8860B]/30 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> In Progress
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] pt-1 tracking-tight">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-heading)] bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-[#1BA098] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tagline */}
        <p className="text-base text-[var(--text-body)] font-medium leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
          {project.tagline}
        </p>

        {/* Tech Stack Badges */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--color-navy)] text-white border border-[#1BA098]/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Features Breakdown */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Key Architecture & Features
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--text-body)]">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#1BA098] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Placeholder link warning note */}
        <div className="p-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] flex items-center gap-2 font-mono">
          <AlertCircle className="w-4 h-4 text-[#B8860B] shrink-0" />
          <span>Note: Links use <code>[LIVE DEMO URL]</code> placeholders until deployed.</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1BA098] hover:bg-[#148079] transition-all shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-[var(--text-heading)] bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-[#1BA098] hover:text-[#1BA098] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
