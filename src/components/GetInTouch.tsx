"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  ArrowUpRight,
  Github,
  User,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import MagneticButton from "./MagneticButton";
import { fadeInUp, lineDrawVariant, staggerContainer } from "@/lib/motion";
import { useRef, useState, useEffect, FormEvent } from "react";

// ─── Animation Variants ────────────────────────────────────────────────────────

const cardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const orbVariant = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const glowPulse = {
  animate: {
    opacity: [0.3, 0.7, 0.3],
    scale: [1, 1.08, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const formFieldVariant = {
  hidden: { opacity: 0, x: -18 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── Floating Label Input ──────────────────────────────────────────────────────

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
  delay?: number;
  error?: string;
  multiline?: boolean;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon,
  delay = 0,
  error,
  multiline = false,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const inputClass = `
    peer w-full bg-transparent pt-6 pb-2 px-4 text-sm text-[var(--text-heading)]
    placeholder-transparent outline-none resize-none
    transition-colors duration-200
  `;

  return (
    <motion.div
      custom={delay}
      variants={formFieldVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      <div
        className={`relative rounded-xl border transition-all duration-300 overflow-hidden
          ${focused
            ? "border-[#1BA098] shadow-[0_0_0_2px_rgba(27,160,152,0.18)]"
            : error
            ? "border-red-500/60 shadow-[0_0_0_2px_rgba(239,68,68,0.10)]"
            : "border-[var(--border-color)] hover:border-[var(--text-muted)]"
          }
          bg-[var(--bg-card)]
        `}
      >
        {/* Teal glow bar at top */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#1BA098] to-[#3B4A8C] origin-left"
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="flex items-start gap-3 px-1">
          {/* Icon */}
          <div
            className={`mt-[22px] ml-3 transition-colors duration-200 ${
              focused ? "text-[#1BA098]" : "text-[var(--text-muted)]"
            }`}
          >
            {icon}
          </div>

          {/* Input wrapper */}
          <div className="flex-1 relative">
            {multiline ? (
              <textarea
                id={id}
                rows={4}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={label}
                className={inputClass + " min-h-[110px]"}
              />
            ) : (
              <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={label}
                className={inputClass}
              />
            )}

            {/* Floating label */}
            <label
              htmlFor={id}
              className={`absolute left-0 transition-all duration-200 pointer-events-none select-none font-medium
                ${active
                  ? "top-2 text-[10px] tracking-wide uppercase " + (focused ? "text-[#1BA098]" : "text-[var(--text-muted)]")
                  : multiline ? "top-[22px] text-sm text-[var(--text-muted)]" : "top-[18px] text-sm text-[var(--text-muted)]"
                }`}
            >
              {label}
            </label>
          </div>
        </div>
      </div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 ml-1 text-xs text-red-400 flex items-center gap-1"
          >
            <XCircle className="w-3 h-3" /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Contact Form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
    if (!message.trim()) errs.message = "Message cannot be empty.";
    else if (message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 overflow-hidden"
    >
      {/* Corner glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#1BA098]/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#3B4A8C]/10 blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="mb-6 flex items-center gap-2.5">
        <div className="p-2 rounded-lg bg-[#1BA098]/10 text-[#1BA098]">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--text-heading)]">Send a Message</h3>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">I usually reply within 24 hours</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 flex flex-col items-center gap-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-[#1BA098]/15 flex items-center justify-center"
            >
              <CheckCircle2 className="w-8 h-8 text-[#1BA098]" />
            </motion.div>
            <div>
              <p className="text-base font-semibold text-[var(--text-heading)]">Message sent!</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-xs text-[#1BA098] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FloatingField
                id="contact-name"
                label="Your Name"
                value={name}
                onChange={(v) => { setName(v); if (errors.name) setErrors((e) => ({ ...e, name: undefined })); }}
                icon={<User className="w-4 h-4" />}
                delay={0}
                error={errors.name}
              />
              <FloatingField
                id="contact-email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(v) => { setEmail(v); if (errors.email) setErrors((e) => ({ ...e, email: undefined })); }}
                icon={<Mail className="w-4 h-4" />}
                delay={1}
                error={errors.email}
              />
            </div>

            <FloatingField
              id="contact-message"
              label="Your Message"
              value={message}
              onChange={(v) => { setMessage(v); if (errors.message) setErrors((e) => ({ ...e, message: undefined })); }}
              icon={<MessageSquare className="w-4 h-4" />}
              delay={2}
              error={errors.message}
              multiline
            />

            {/* Error banner */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                >
                  <XCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <motion.button
              id="contact-submit-btn"
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl
                font-semibold text-sm text-white
                bg-gradient-to-r from-[#1BA098] to-[#3B4A8C]
                hover:from-[#18908a] hover:to-[#33407a]
                disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-300 shadow-lg shadow-[#1BA098]/20
                relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={status !== "loading" ? { translateX: ["−100%", "200%"] } : {}}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />

              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Social Link Card ──────────────────────────────────────────────────────────

interface SocialCardProps {
  href: string;
  target?: string;
  rel?: string;
  icon: React.ReactNode;
  accentColor: string;
  label: string;
  sublabel: string;
  index: number;
}

function SocialCard({ href, target, rel, icon, accentColor, label, sublabel, index }: SocialCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-1 min-w-0"
    >
      <MagneticButton
        href={href}
        target={target}
        rel={rel}
        className="w-full flex items-center justify-between p-4 rounded-xl
          bg-[var(--bg-card)] border border-[var(--border-color)]
          hover:border-[var(--text-muted)] transition-all duration-300
          shadow-sm group relative overflow-hidden"
      >
        {/* Hover glow background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 20% 50%, ${accentColor}12 0%, transparent 70%)`,
          }}
        />

        <div className="flex items-center gap-3 relative z-10">
          <motion.div
            className="p-2.5 rounded-lg text-white/90 shrink-0"
            style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
          <div className="text-left min-w-0">
            <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {label}
            </div>
            <div
              className="text-sm font-semibold text-[var(--text-heading)] truncate transition-colors duration-200"
              style={{ color: undefined }}
            >
              <span className="group-hover:hidden">{sublabel}</span>
              <span className="hidden group-hover:block" style={{ color: accentColor }}>
                {sublabel}
              </span>
            </div>
          </div>
        </div>

        <ArrowUpRight
          className="w-4 h-4 text-[var(--text-muted)] transition-all duration-200 shrink-0 relative z-10
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: undefined }}
        />
      </MagneticButton>
    </motion.div>
  );
}

// ─── Animated Heading ──────────────────────────────────────────────────────────

function AnimatedHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = ["Let's", "Build", "Next-Gen", "AI", "Together"];

  return (
    <h2
      ref={ref}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-heading)] leading-tight"
      aria-label="Let's Build Next-Gen AI Together"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em] last:mr-0"
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.08 * i, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {word === "Next-Gen" || word === "AI" ? (
            <span className="bg-gradient-to-r from-[#1BA098] to-[#3B4A8C] bg-clip-text text-transparent">
              {word}
            </span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </h2>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function GetInTouch() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 border-b border-[var(--border-color)] bg-[var(--bg-main)] overflow-hidden"
    >
      {/* Background ambient orbs */}
      <motion.div
        variants={orbVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27,160,152,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <motion.div
        variants={orbVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,74,140,0.08) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Pulsing glow accent */}
      <motion.div
        variants={glowPulse}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(27,160,152,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Section divider line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          variants={lineDrawVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[1px] w-full bg-gradient-to-r from-[#1BA098]/60 via-[#3B4A8C]/40 to-transparent origin-left"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-5"
        >
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#1BA098]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            Get In Touch
          </motion.div>

          <AnimatedHeading />

          <motion.p
            className="text-base sm:text-lg text-[var(--text-body)] max-w-xl mx-auto leading-relaxed font-normal"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            I'm actively interviewing for AI Engineer, Applied AI Engineer, AI
            Solutions Architect, and AI Automation Specialist roles. Reach out
            directly to discuss opportunities.
          </motion.p>
        </motion.div>

        {/* Social Link Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-stretch gap-3"
        >
          <SocialCard
            href="mailto:clintoncaspa86@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            accentColor="#1BA098"
            label="Direct Email"
            sublabel="clintoncaspa86@gmail.com"
            index={0}
          />
          <SocialCard
            href="https://github.com/JPene66"
            target="_blank"
            rel="noopener noreferrer"
            icon={<GithubIcon className="w-5 h-5" />}
            accentColor="#94a3b8"
            label="GitHub Repos"
            sublabel="github.com/JPene66"
            index={1}
          />
          <SocialCard
            href="[LINKEDIN URL]"
            target="_blank"
            rel="noopener noreferrer"
            icon={<LinkedinIcon className="w-5 h-5" />}
            accentColor="#3B4A8C"
            label="LinkedIn Profile"
            sublabel="Connect on LinkedIn"
            index={2}
          />
        </motion.div>

        {/* Divider with OR */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--text-muted)] px-2">
            or send a message
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
        </motion.div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}
