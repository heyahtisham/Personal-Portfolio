import {
  Globe,
  Figma,
  MousePointerClick,
  Atom,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    title: "Website Development",
    description:
      "Complete web products built from scratch — architecture, code, deployment and everything between. You bring the idea; I ship the product.",
    features: [
      "Full-stack builds with React & Node.js",
      "CMS or headless — your call",
      "SEO and analytics wired in from day one",
    ],
    icon: Globe,
    bento: "md:col-span-2 md:row-span-2",
    highlighted: true,
  },
  {
    title: "UI Design",
    description:
      "Interfaces that feel inevitable — clean hierarchy, honest spacing, no decoration for its own sake.",
    features: ["Figma design systems", "Interactive prototypes"],
    icon: Figma,
    bento: "md:col-span-2",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting pages that load in under a second and read like they were written by a human.",
    features: ["A/B-test ready", "Copy support included"],
    icon: MousePointerClick,
    bento: "md:col-span-2",
  },
  {
    title: "React Development",
    description:
      "Component architecture that scales — typed, tested and documented.",
    features: ["Legacy migration", "Performance profiling"],
    icon: Atom,
    bento: "md:col-span-2",
  },
  {
    title: "Performance Optimization",
    description:
      "I hunt slow renders, heavy bundles and layout shifts until Lighthouse turns green.",
    features: ["Core Web Vitals audits", "Bundle-size budgets"],
    icon: Gauge,
    bento: "md:col-span-1",
  },
  {
    title: "Maintenance",
    description:
      "Ongoing care for shipped products — updates, monitoring and small features on retainer.",
    features: ["Monthly reports", "Priority fixes"],
    icon: ShieldCheck,
    bento: "md:col-span-1",
  },
];
