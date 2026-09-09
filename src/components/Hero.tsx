"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import CursorGlow from "./CursorGlow";
import NeuronNetwork from "./NeuronNetwork";
import MagneticButton from "./MagneticButton";
import { textRevealContainer, textRevealWord, customEase } from "@/lib/motion";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const headlineWords = "Jordan Pene".split(" ");

  return (
    <section
      id="hero-container"
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 border-b border-[var(--border-color)] bg-[var(--bg-main)] min-h-[85vh] flex items-center"
    >
      {/* Interactive Neural Network Background Animation */}
      <NeuronNetwork />

      {/* Cursor reactive glowing spotlight */}
      <CursorGlow />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 lg:gap-16">
          {/* Content Left */}
          <div className="flex-1 space-y-6 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: customEase }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#1BA098]/10 text-[#1BA098] border border-[#1BA098]/30 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1BA098] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1BA098]"></span>
              </span>
              Available for AI Engineer & Architect Roles
            </motion.div>

            {/* Word-by-word Staggered Text Reveal Headline */}
            <div className="space-y-3">
              <motion.h1
                variants={textRevealContainer}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] flex flex-wrap gap-x-4"
              >
                {headlineWords.map((word, i) => (
                  <motion.span key={i} variants={textRevealWord} className="inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: customEase }}
                className="text-lg sm:text-xl font-semibold text-[#1BA098] tracking-tight font-mono"
              >
                AI Engineer
              </motion.p>
            </div>

            {/* One-sentence Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: customEase }}
              className="text-base sm:text-lg text-[var(--text-body)] max-w-2xl leading-relaxed font-normal"
            >
              I design and ship production AI systems, agentic workflows, retrieval-augmented pipelines, and the evaluation, observability, and guardrails that keep them trustworthy.
            </motion.p>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-muted)] pt-1"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1BA098]" /> Production Guardrails
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#3B4A8C]" /> End-to-End Evaluation
              </span>
            </motion.div>

            {/* Action Buttons with Magnetic Pull */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease: customEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <MagneticButton
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#1BA098] hover:bg-[#148079] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1BA098] focus:ring-offset-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              {/* Résumé Download Button (links to /resume.pdf placeholder file) */}
              <MagneticButton
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[var(--text-heading)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#1BA098] hover:text-[#1BA098] transition-all shadow-sm focus:outline-none"
              >
                <Download className="w-4 h-4" />
                Download Résumé
              </MagneticButton>
            </motion.div>
          </div>

          {/* Profile Photo Right / Top on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
            className="flex justify-start md:justify-end"
          >
            <div className="relative group">
              {/* Clean offset frame styling */}
              <div className="absolute -inset-2 rounded-2xl border border-[#1BA098]/30 group-hover:border-[#1BA098]/60 transition duration-300" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-3xl overflow-hidden bg-[var(--color-navy)] border-2 border-[var(--border-color)] shadow-2xl flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/images/profile.jpeg"
                    alt="Jordan Pene Profile Photo"
                    width={600}
                    height={600}
                    priority
                    className="object-cover object-top w-full h-full"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback initials avatar when image is missing */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#1F2A44] text-[#1BA098] p-4 text-center">
                    <span className="text-6xl font-extrabold tracking-wider">JP</span>
                    <span className="text-sm text-[var(--text-muted)] mt-2 font-mono uppercase tracking-widest">Jordan Pene</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
