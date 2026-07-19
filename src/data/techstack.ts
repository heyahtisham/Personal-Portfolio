import {
  Layout,
  Package,
  Wrench,
  Server,
  CloudUpload,
} from "lucide-react";
import type { SectionHeadingContent, TechCategory } from "@/types";

/**
 * ─── TECH STACK SECTION ───────────────────────────────────────────
 * The marquee + categorized grid. Only technologies you really use.
 */
export const TECHSTACK_HEADING: SectionHeadingContent = {
  eyebrow: "Tech stack",
  title: "The stack behind the",
  highlight: "work",
  description:
    "The tools I reach for every day — plus what I'm actively learning next.",
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    icon: Layout,
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    label: "Libraries",
    icon: Package,
    items: ["Framer Motion", "React Router", "TanStack Query"],
  },
  {
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Vite", "Canva"],
  },
  {
    label: "Learning",
    icon: Server,
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    label: "Deployment",
    icon: CloudUpload,
    items: ["Vercel", "Netlify"],
  },
];
