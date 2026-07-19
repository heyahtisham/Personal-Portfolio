import type { Project, SectionHeadingContent } from "@/types";
import { PERSONAL } from "./personal";

/**
 * ─── PROJECTS SECTION ─────────────────────────────────────────────
 * Real projects only. Add new entries as you ship them — set
 * `featured: true` on the one that should take the large bento slot.
 * `tone` picks the mockup color (primary | accent | violet | emerald).
 */
export const PROJECTS_HEADING: SectionHeadingContent = {
  eyebrow: "Featured work",
  title: "Projects I'm",
  highlight: "proud of",
  description:
    "Work from my GitHub — built, polished and shipped by me. More landing on this grid as I ship them.",
};

export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio",
    tagline: "This website",
    description:
      "The site you're looking at — a fully responsive portfolio with a liquid-glass design system, scroll-driven animations and centralized, editable content. Built from scratch, no templates.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Liquid-glass UI with custom design tokens",
      "Scroll-aware navbar and section reveals",
      "All content driven by typed data files",
    ],
    status: "Live",
    github: `${PERSONAL.github}/personal-portfolio`,
    demo: "#top",
    featured: true,
    tone: "primary",
    bento: "md:col-span-6",
  },
  {
    title: "Landing Page Collection",
    tagline: "Responsive landing pages",
    description:
      "A growing set of landing pages built from designs — pixel-accurate, responsive and fast, covering product, agency and personal-brand layouts.",
    tech: ["React", "Tailwind CSS", "HTML5", "CSS3"],
    features: ["Mobile-first layouts", "Reusable section patterns"],
    status: "Live",
    github: `${PERSONAL.github}/landing-pages`,
    demo: "#",
    tone: "accent",
    bento: "md:col-span-3",
  },
  {
    title: "React Web Applications",
    tagline: "App collection",
    description:
      "Interactive apps built while sharpening my React skills — data fetching with TanStack Query, routing, forms and state management patterns.",
    tech: ["React", "TypeScript", "React Router", "TanStack Query"],
    features: ["API-driven UIs", "Client-side routing"],
    status: "In Progress",
    github: PERSONAL.github,
    demo: "#",
    tone: "violet",
    bento: "md:col-span-3",
  },
];
