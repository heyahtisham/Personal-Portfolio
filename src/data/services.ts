import {
  Globe,
  Atom,
  Smartphone,
  MousePointerClick,
  UserRound,
  RefreshCw,
  Figma,
  Gauge,
} from "lucide-react";
import type { SectionHeadingContent, Service } from "@/types";

/**
 * ─── SERVICES SECTION ─────────────────────────────────────────────
 * Services you actually offer. `bento` controls card size in the
 * 4-column grid; exactly one card should be `highlighted`.
 */
export const SERVICES_HEADING: SectionHeadingContent = {
  eyebrow: "Services",
  title: "How I can",
  highlight: "help",
  description:
    "Clear scope, honest timelines and careful execution — focused on what I do best: the frontend.",
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Web Development",
    description:
      "Complete website frontends built from scratch — responsive, accessible and fast on every device. You bring the idea or design; I build the interface.",
    features: [
      "React, TypeScript & Tailwind builds",
      "Semantic, accessible markup",
      "Deployed on Vercel or Netlify",
    ],
    icon: Globe,
    bento: "md:col-span-2 md:row-span-2",
    highlighted: true,
  },
  {
    title: "React Development",
    description:
      "Component-based apps with clean structure — routing, data fetching and state handled properly.",
    features: ["Reusable component patterns", "TanStack Query & React Router"],
    icon: Atom,
    bento: "md:col-span-2",
  },
  {
    title: "Responsive Websites",
    description:
      "Mobile-first layouts that look right on every screen, from small phones to wide desktops.",
    features: ["Fluid layouts & breakpoints", "Cross-browser testing"],
    icon: Smartphone,
    bento: "md:col-span-2",
  },
  {
    title: "Landing Pages",
    description:
      "Fast, focused pages that load quickly and guide visitors to act.",
    features: ["Speed-first builds"],
    icon: MousePointerClick,
    bento: "md:col-span-2",
  },
  {
    title: "Portfolio Websites",
    description:
      "Personal sites that present your work with the polish it deserves.",
    features: ["Custom design & motion"],
    icon: UserRound,
    bento: "md:col-span-2",
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-accurate conversion of Figma or design files into living, interactive interfaces.",
    features: ["Design-faithful spacing & type", "Smooth micro-interactions"],
    icon: Figma,
    bento: "md:col-span-2",
  },
  {
    title: "Website Redesign",
    description:
      "Modernize an outdated site — new look, better structure, same content where it counts.",
    features: ["Modern stack migration", "Improved mobile experience"],
    icon: RefreshCw,
    bento: "md:col-span-2",
  },
  {
    title: "Performance Optimization",
    description:
      "Faster loads and smoother interactions — image optimization, code splitting and Lighthouse-guided fixes.",
    features: ["Core Web Vitals improvements", "Bundle-size cleanup"],
    icon: Gauge,
    bento: "md:col-span-4",
  },
];
