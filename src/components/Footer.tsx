import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--bg-main)] text-[var(--text-muted)] text-sm border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[var(--color-navy)] border border-[#1BA098]/30 flex items-center justify-center text-[#1BA098] font-mono text-xs font-bold">
            JP
          </div>
          <div>
            <span className="font-semibold text-[var(--text-heading)]">Jordan Pene</span>
            <span className="mx-2 text-[var(--border-color)]">•</span>
            <span>© {currentYear} All rights reserved</span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-[var(--text-muted)]">
          <a
            href="mailto:[EMAIL]"
            className="hover:text-[#1BA098] transition-colors p-1.5 rounded-lg hover:bg-[var(--bg-card)]"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="[LINKEDIN URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3B4A8C] transition-colors p-1.5 rounded-lg hover:bg-[var(--bg-card)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="[GITHUB URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1BA098] transition-colors p-1.5 rounded-lg hover:bg-[var(--bg-card)]"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Credit line */}
        <div className="text-xs font-mono text-[var(--text-muted)]">
          Built with <span className="text-[#1BA098]">Next.js</span> & <span className="text-[#3B4A8C]">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
