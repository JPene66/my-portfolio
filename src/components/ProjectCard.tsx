"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isCompleted = project.status === "completed";
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position within card for 3D tilt & spotlight glow
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth springs for 3D tilt physics
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsTouchDevice(isTouch || reducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPx = e.clientX - rect.left;
    const yPx = e.clientY - rect.top;

    rawX.set(xPx);
    rawY.set(yPx);

    mouseX.set(xPx / rect.width);
    mouseY.set(yPx / rect.height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isTouchDevice ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      onClick={() => onSelect(project)}
      className={`group relative p-7 rounded-2xl bg-[var(--bg-card)] border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 shadow-md hover:shadow-2xl overflow-hidden ${
        isCompleted
          ? "border-[var(--border-color)] hover:border-[#1BA098]/80"
          : "border-[var(--border-color)] opacity-90 hover:opacity-100 hover:border-[#B8860B]/70"
      }`}
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      {!isTouchDevice && isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${rawX.get()}px ${rawY.get()}px, ${
              isCompleted ? "rgba(27, 160, 152, 0.12)" : "rgba(184, 134, 11, 0.12)"
            }, transparent 80%)`,
          }}
        />
      )}

      {/* Content wrapper with 3D depth translation */}
      <div
        className="relative z-10 space-y-4"
        style={isTouchDevice ? {} : { transform: "translateZ(30px)" }}
      >
        {/* Status Badge Row */}
        <div className="flex items-center justify-between gap-2">
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1BA098]/10 text-[#1BA098] border border-[#1BA098]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1BA098] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1BA098]"></span>
              </span>
              Deployed & Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#B8860B]/15 text-[#B8860B] border border-[#B8860B]/40">
              <Clock className="w-3.5 h-3.5" />
              {project.badgeText || "In Progress"}
            </span>
          )}

          <div className="text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#1BA098]" /> Details
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)] group-hover:text-[#1BA098] transition-colors duration-300 flex items-center justify-between tracking-tight">
          <span>{project.name}</span>
          <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[#1BA098] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-2" />
        </h3>

        {/* Tagline */}
        <p className="text-sm text-[var(--text-body)] line-clamp-3 leading-relaxed font-normal">
          {project.tagline}
        </p>
      </div>

      {/* Tech Badges & Action Buttons */}
      <div
        className="relative z-10 space-y-4 pt-4 border-t border-[var(--border-color)]"
        style={isTouchDevice ? {} : { transform: "translateZ(20px)" }}
      >
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-main)] text-[var(--text-body)] border border-[var(--border-color)] group-hover:border-[#1BA098]/30 transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          className="flex items-center gap-3 pt-1"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#1BA098] hover:bg-[#148079] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--text-heading)] bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-[#1BA098] hover:text-[#1BA098] transition-all duration-300"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
