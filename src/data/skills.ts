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
  title: "Technologies I Work",
  highlight: "with",
  description:
    "The technologies and tools I use to build fast, responsive, and modern web applications.",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layout,
    description:
      "Building responsive, accessible, and interactive user interfaces with modern frontend technologies.",
    bento: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & CSS3", level: 98 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 85 },
      { name: "Web Animations", level: 90 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: Package,
    description: "Tools and libraries that help me create scalable, interactive, and maintainable React applications.",
    bento: "md:col-span-2",
    skills: [
      { name: "Framer Motion", level: 75 },
      { name: "React Router", level: 88 },
      { name: "TanStack Query", level: 80 },
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description: "My Toolkit for development.",
    bento: "md:col-span-1",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Canva", level: 98 },
    ],
  },
  {
    title: "Deployment & Hosting",
    icon: Rocket,
    description: "Deploying with modern platforms.",
    bento: "md:col-span-1",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 90 },
      { name: "Hostinger", level: 80 },
    ],
  },
  {
    title: "UI & Design",
    icon: Server,
    description:
      "Creating clean, intuitive interfaces with a strong focus on visual design and user experience.",
    bento: "md:col-span-4",
    skills: [
      { name: "UI Design", level: 82 },
      { name: "Canva", level: 98 },
      { name: "Figma", level: 70   },
    ],
  },
];