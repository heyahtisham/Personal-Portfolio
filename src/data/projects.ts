import type { Project, SectionHeadingContent } from "@/types";
import { PERSONAL } from "./personal";

/** GitHub profile URL without a trailing slash, for building repo links. */
const GITHUB = PERSONAL.github.replace(/\/+$/, "");

/**
 * ─── PROJECTS SECTION ─────────────────────────────────────────────
 * Real projects only. Add new entries as you ship them — set
 * `featured: true` on the one that should take the large bento slot.
 * `tone` picks the mockup color (primary | accent | violet | emerald).
 */
export const PROJECTS_HEADING: SectionHeadingContent = {
  eyebrow: "Featured work",
  title: "Projects That Turn Ideas Into",
  highlight: "Products",
  description:
    "Each project is designed, developed, and deployed with a focus on performance, usability, and clean code.",
};

export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio",
    tagline: "Crafting Digital Experiences",
    description:
      "A modern, fully responsive portfolio designed and developed from scratch to showcase my work, skills, and experience. Built with a custom design system, smooth animations, and a strong focus on performance, accessibility, and maintainable code.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Custom glassmorphism design system",
      "Smooth scroll-driven animations",
      "Fully responsive across all devices",
      "Type-safe content management",
      "Optimized performance and accessibility",
    ],
    status: "Live",
    preview: "https://ahtishamshoukat.vercel.app/",
    image: "/projects/personal-portfolio.png",
    github: `${GITHUB}/personal-portfolio`,
    demo: "https://ahtishamshoukat.vercel.app/",
    featured: true,
    tone: "primary",
    bento: "md:col-span-6",
  },
  {
    title: "Neksio – Conversational AI Platform",
    tagline: "Modern AI Platform",
    description:
      "Contributed to the frontend development of a production-ready AI platform that enables businesses to automate customer support, sales, and engagement across multiple communication channels. Focused on building responsive interfaces, reusable UI components, and delivering a fast, accessible user experience.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Next.js", "REST APIs"],
    features: [
      "AI-powered SaaS platform",
      "Multi-platform messaging interface",
      "Clean and reusable React components",
      "Optimized performance and accessibility",
      "Production-ready frontend architecture",
    ],
    status: "Live",
    preview: "https://neksio.com/",
    image: "/projects/landing-page.png",
    github: `${GITHUB}/`,
    demo: "https://neksio.com/",
    tone: "accent",
    bento: "md:col-span-6",
  },
  {
    title: "React Web Applications",
    tagline: "App collection",
    description:
      "Interactive apps built while sharpening my React skills — data fetching with TanStack Query, routing, forms and state management patterns.",
    tech: ["React", "TypeScript", "React Router", "TanStack Query"],
    features: ["API-driven UIs", "Client-side routing"],
    status: "In Progress",
    preview: "https://ahtishamshoukat.vercel.app/",
    image: "/projects/personal-portfolio.png",
    github: GITHUB,
    demo: "https://ahtishamshoukat.vercel.app/",
    tone: "violet",
    bento: "md:col-span-6",
  },
];
