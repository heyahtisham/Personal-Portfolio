import {
  Layout,
  Server,
  Wrench,
  Palette,
  CloudUpload,
} from "lucide-react";
import type { TechCategory } from "@/types";

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    icon: Layout,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
  },
  {
    label: "Tools",
    icon: Wrench,
    items: ["Git", "Vite", "Vitest", "Playwright", "Storybook"],
  },
  {
    label: "Design",
    icon: Palette,
    items: ["Figma", "Design Tokens", "Prototyping"],
  },
  {
    label: "Deployment",
    icon: CloudUpload,
    items: ["Vercel", "Docker", "GitHub Actions", "AWS"],
  },
];
