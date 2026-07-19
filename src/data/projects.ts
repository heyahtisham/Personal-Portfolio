import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Pulseboard",
    tagline: "Analytics dashboard UI",
    description:
      "The complete frontend for a real-time analytics SaaS — live event streams, funnels and retention cohorts rendered at 60fps from a WebSocket feed. Virtualized tables keep 100k-row datasets scrolling smoothly.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts", "WebSockets"],
    github: "https://github.com/ahtishamshoukat/pulseboard",
    demo: "https://pulseboard.demo",
    caseStudy: "#",
    featured: true,
    tone: "primary",
    bento: "md:col-span-3 md:row-span-2",
  },
  {
    title: "Forma",
    tagline: "Drag-and-drop form builder",
    description:
      "Visual form builder with conditional logic, 40+ field types and pixel-perfect drag interactions. Used by 3k+ makers.",
    tech: ["React", "TypeScript", "Zustand", "dnd-kit"],
    github: "https://github.com/ahtishamshoukat/forma",
    demo: "https://forma.demo",
    tone: "accent",
    bento: "md:col-span-3",
  },
  {
    title: "Shelfwise",
    tagline: "E-commerce storefront",
    description:
      "Headless storefront for indie bookshops — instant search across 120k titles, optimistic cart and a 98 Lighthouse score.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    github: "https://github.com/ahtishamshoukat/shelfwise",
    demo: "https://shelfwise.demo",
    tone: "emerald",
    bento: "md:col-span-3",
  },
  {
    title: "usekit",
    tagline: "React hooks library",
    description:
      "Forty zero-dependency React hooks — typed, tested and tree-shakeable. 1.2k GitHub stars.",
    tech: ["React", "TypeScript", "Vitest"],
    github: "https://github.com/ahtishamshoukat/usekit",
    demo: "https://usekit.demo",
    tone: "violet",
    bento: "md:col-span-2",
  },
  {
    title: "Nimbus UI",
    tagline: "Open-source design system",
    description:
      "Accessible React component library with 38 primitives, full keyboard support and themeable design tokens.",
    tech: ["React", "Radix", "Storybook", "Framer Motion"],
    github: "https://github.com/ahtishamshoukat/nimbus-ui",
    demo: "https://nimbus.demo",
    tone: "accent",
    bento: "md:col-span-4",
  },
];
