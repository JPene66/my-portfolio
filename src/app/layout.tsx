import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jordanpene.ai"),
  title: "Jordan Pene — AI Engineer | Prompt Engineering, RAG & Autonomous Agents",
  description:
    "Production-ready AI Engineering portfolio for Jordan Pene — specializing in Prompt Engineering & Evaluation, RAG systems, ChromaDB, and Autonomous Agents with LangGraph.",
  keywords: [
    "Jordan Pene",
    "AI Engineer",
    "Applied AI Engineer",
    "Prompt Engineering",
    "RAG",
    "Vector Database",
    "ChromaDB",
    "Autonomous Agents",
    "LangGraph",
    "LLM Evaluation",
    "AI Architecture",
  ],
  authors: [{ name: "Jordan Pene" }],
  openGraph: {
    title: "Jordan Pene — AI Engineer Portfolio",
    description:
      "I build AI systems that go from prompt to production — deployed applications with real evaluation, guardrails, and cited answers.",
    type: "website",
    locale: "en_US",
    siteName: "Jordan Pene AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Pene — AI Engineer",
    description:
      "I build AI systems that go from prompt to production — deployed applications with real evaluation, guardrails, and cited answers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--bg-main)] text-[var(--text-body)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
