import type { TimelineItem } from "@/types";

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    org: "Neksio Tech",
    orgInitials: "NT",
    description:
      "Leading the frontend guild across three product squads, owning the design system and performance budget.",
    points: [
      "Cut LCP from 4.1s to 1.3s across the flagship SaaS product",
      "Built a 40-component design system now used by 12 engineers",
      "Mentored 4 junior developers to mid-level promotions",
    ],
    tags: ["React", "TypeScript", "Next.js", "Design Systems"],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    org: "Bytecraft Studio",
    orgInitials: "BS",
    description:
      "Shipped client products end-to-end — from Figma handoff to production deploys — for fintech and e-commerce clients.",
    points: [
      "Delivered 14 client projects with a 100% on-time record",
      "Introduced CI/CD pipelines that cut release time from days to minutes",
      "Scaled an e-commerce API to 50k daily orders",
    ],
    tags: ["Node.js", "PostgreSQL", "React", "Docker"],
  },
  {
    period: "2021 — 2022",
    title: "Frontend Developer",
    org: "Freelance",
    orgInitials: "FL",
    description:
      "Built marketing sites and dashboards for startups across four time zones, learning to communicate as sharply as I code.",
    points: [
      "Completed 20+ contracts with a 5.0 average client rating",
      "Specialized in converting Figma designs into pixel-perfect React",
    ],
    tags: ["React", "Tailwind", "Figma"],
  },
];
