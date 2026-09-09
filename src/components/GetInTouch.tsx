"use client";

import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import MagneticButton from "./MagneticButton";
import { fadeInUp, lineDrawVariant } from "@/lib/motion";

export default function GetInTouch() {
  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1BA098]">
            <Send className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)]">
            Let’s Build Next-Gen AI Together
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)] max-w-xl mx-auto leading-relaxed font-normal">
            I’m actively interviewing for AI Engineer, Applied AI Engineer, AI Solutions Architect, and AI Automation Specialist roles. Reach out directly to discuss opportunities.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          {/* Email */}
          <MagneticButton
            href="mailto:[EMAIL]"
            className="flex-1 w-full flex items-center justify-between p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#1BA098] hover:text-[#1BA098] transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[var(--color-navy)] text-[#1BA098]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-[var(--text-muted)]">Direct Email</div>
                <div className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[#1BA098]">
                  [EMAIL]
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#1BA098] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>

          {/* LinkedIn */}
          <MagneticButton
            href="[LINKEDIN URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full flex items-center justify-between p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#3B4A8C] hover:text-[#3B4A8C] transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[var(--color-navy)] text-[#3B4A8C]">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-[var(--text-muted)]">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[#3B4A8C]">
                  [LINKEDIN URL]
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#3B4A8C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>

          {/* GitHub */}
          <MagneticButton
            href="[GITHUB URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full flex items-center justify-between p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#1BA098] hover:text-[#1BA098] transition-all shadow-sm group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[var(--color-navy)] text-white">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-[var(--text-muted)]">GitHub Repos</div>
                <div className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[#1BA098]">
                  [GITHUB URL]
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#1BA098] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
