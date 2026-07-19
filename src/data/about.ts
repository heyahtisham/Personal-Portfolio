import { Code2, Layers, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SectionHeadingContent } from "@/types";

/**
 * ─── ABOUT SECTION ────────────────────────────────────────────────
 * Your story, highlight cards and the mini career timeline.
 */
export const ABOUT_HEADING: SectionHeadingContent = {
  eyebrow: "About me",
  title: "Designing experiences",
  highlight: "Engineering performance",
  description:
    "Based in Pakistan, I build fast, accessible, and modern web experiences that combine thoughtful design with clean engineering.",
};

export const ABOUT_STORY: string[] = [
  "I'm a frontend web developer focused on building modern, responsive web applications that feel fast, intuitive, and polished. I enjoy transforming ideas into products that not only look great but also deliver exceptional user experiences.",
  "Today I primarily work with React, TypeScript, and Tailwind CSS, turning UI designs into production-ready applications. I value clean architecture, reusable components, accessibility, and performance.",
];

export interface AboutTimelineEntry {
  year: string;
  label: string;
}

/** Compact preview timeline shown next to the story. */
export const ABOUT_TIMELINE: AboutTimelineEntry[] = [
  { year: "2026 — Present", label: "Frontend Web Developer · Neksio (Remote)" },
  { year: "2025 — 2026", label: "Web Design & Development · VTI Arifwala" },
  { year: "Updated Soon", label: "BS Computer Science · starting Soon" },
];

export interface AboutHighlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: Layers,
    title: "Pixel-perfect Development",
    text: "Transforming designs into polished, responsive interfaces with careful attention to spacing, typography, and consistency. Every layout is crafted to look and feel great across all screen sizes.",
  },
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    text: "Building reusable components, maintainable codebases, and well-structured architectures using modern development practices, making projects easier to scale and maintain over time.",
  },
  {
    icon: Zap,
    title: "Performance & Accessibility",
    text: "Optimizing websites for speed, accessibility, and smooth user interactions. I focus on fast loading times, semantic HTML, keyboard navigation, and responsive experiences that work for everyone.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    text: "The web evolves every day, and so do I. I'm constantly improving my skills, exploring modern technologies, and expanding into full-stack development to build complete end-to-end applications.",
  },
];
