import {
  Layout,
  Server,
  Palette,
  Wrench,
  Rocket,
  Users,
} from "lucide-react";
import type { SkillGroup } from "@/types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layout,
    description:
      "Component-driven interfaces with obsessive attention to detail, motion and accessibility.",
    bento: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 88 },
      { name: "State Management", level: 90 },
    ],
  },
  {
    title: "Integration",
    icon: Server,
    description: "Wiring interfaces to any backend, cleanly.",
    bento: "md:col-span-2",
    skills: [
      { name: "REST / GraphQL APIs", level: 88 },
      { name: "Firebase / Supabase", level: 82 },
      { name: "Node.js Basics", level: 74 },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    description: "From wireframe to polished UI.",
    bento: "md:col-span-1",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Design Systems", level: 88 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "A sharp, boring, reliable toolchain.",
    bento: "md:col-span-1",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "Vite / Testing", level: 85 },
    ],
  },
  {
    title: "Deployment",
    icon: Rocket,
    description: "Ship early, ship safely, roll back in seconds.",
    bento: "md:col-span-2",
    skills: [
      { name: "Vercel / Netlify", level: 92 },
      { name: "GitHub Actions", level: 82 },
      { name: "Web Performance / SEO", level: 88 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    description:
      "Clear writing, honest estimates, and calm communication with stakeholders.",
    bento: "md:col-span-2",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Product Thinking", level: 88 },
      { name: "Mentoring", level: 82 },
    ],
  },
];
