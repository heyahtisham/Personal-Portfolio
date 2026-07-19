import { Code2, Layers, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SectionHeadingContent } from "@/types";

/**
 * ─── ABOUT SECTION ────────────────────────────────────────────────
 * Your story, highlight cards and the mini career timeline.
 */
export const ABOUT_HEADING: SectionHeadingContent = {
  eyebrow: "About me",
  title: "A developer who cares about the",
  highlight: "details",
  description:
    "From Arifwala, Pakistan — turning designs into fast, responsive, interactive websites.",
};

export const ABOUT_STORY: string[] = [
  "I got into web development because I genuinely enjoy building websites and modern user interfaces. That interest took me through a Web Design & Development diploma at the Vocational Training Institute (VTI) in Arifwala, and into my current role as a Frontend Web Developer at Neksio.",
  "Day to day I work with React, TypeScript and Tailwind CSS, transforming designs into responsive, interactive websites. I care about clean code, maintainable architecture and smooth user experience — and I'm continuously learning, currently expanding toward full-stack development with Node.js and MongoDB.",
];

export interface AboutTimelineEntry {
  year: string;
  label: string;
}

/** Compact preview timeline shown next to the story. */
export const ABOUT_TIMELINE: AboutTimelineEntry[] = [
  { year: "2026", label: "Frontend Web Developer · Neksio (Remote)" },
  { year: "2025", label: "Web Design & Development · VTI Arifwala" },
  { year: "2026", label: "BS Computer Science · starting September" },
];

export interface AboutHighlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    icon: Layers,
    title: "Design to code",
    text: "I turn Figma designs into pixel-accurate, responsive React interfaces that work on every screen size.",
  },
  {
    icon: Code2,
    title: "Clean, maintainable code",
    text: "Typed components, sensible structure and readable naming — code the next developer can build on.",
  },
  {
    icon: Zap,
    title: "Performance & accessibility",
    text: "Fast loads, smooth interactions and keyboard-friendly markup are part of the job, not extras.",
  },
  {
    icon: Sparkles,
    title: "Always learning",
    text: "Currently deepening my React and TypeScript skills while expanding toward full-stack with Node.js.",
  },
];
