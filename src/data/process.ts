import {
  Search,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";
import type { ProcessStep, SectionHeadingContent } from "@/types";

/**
 * ─── PROCESS SECTION ──────────────────────────────────────────────
 * How you work, step by step.
 */
export const PROCESS_HEADING: SectionHeadingContent = {
  eyebrow: "Process",
  title: "From idea to",
  highlight: "launch",
  description:
    "A simple, transparent process — you always know what's happening and what comes next.",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Research",
    description:
      "I start by understanding the goal, the audience and the content — asking honest questions before touching any code.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Layout and structure first. Whether we start from your Figma file or a simple wireframe, we agree on the direction early.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, typed code shipped in small increments — with a preview link you can check at every step. No black boxes.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Cross-browser and cross-device checks, keyboard navigation and performance passes before anything goes live.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Launch on Vercel or Netlify with analytics wired in — plus a simple handover so you're never locked in.",
    icon: Rocket,
  },
];
