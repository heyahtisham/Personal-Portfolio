import {
  Layout,
  Package,
  Wrench,
  Server,
  Rocket,
} from "lucide-react";
import type { SectionHeadingContent, SkillGroup } from "@/types";

/**
 * ─── SKILLS SECTION ───────────────────────────────────────────────
 * Only real skills. Levels are honest self-assessments (0–100) —
 * adjust them as you grow. `bento` controls the card's grid size.
 */
export const SKILLS_HEADING: SectionHeadingContent = {
  eyebrow: "Skills",
  title: "Tools I build",
  highlight: "with",
  description:
    "An honest snapshot of my stack — strongest where I work daily, transparent about what I'm still learning.",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layout,
    description:
      "My core — component-driven, responsive interfaces with attention to detail and accessibility.",
    bento: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "JavaScript (ES6+)", level: 84 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Libraries",
    icon: Package,
    description: "The ecosystem I reach for in React projects.",
    bento: "md:col-span-2",
    skills: [
      { name: "Framer Motion", level: 75 },
      { name: "React Router", level: 82 },
      { name: "TanStack Query", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "My daily workflow.",
    bento: "md:col-span-1",
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Vite", level: 80 },
      { name: "Canva", level: 75 },
    ],
  },
  {
    title: "Deployment",
    icon: Rocket,
    description: "Shipping sites to production.",
    bento: "md:col-span-1",
    skills: [
      { name: "Vercel", level: 82 },
      { name: "Netlify", level: 78 },
    ],
  },
  {
    title: "Backend — currently learning",
    icon: Server,
    description:
      "Expanding toward full-stack development. These are in progress, not mastered — and I'm honest about that.",
    bento: "md:col-span-4",
    skills: [
      { name: "Node.js", level: 45 },
      { name: "Express", level: 40 },
      { name: "MongoDB", level: 40 },
    ],
  },
];
