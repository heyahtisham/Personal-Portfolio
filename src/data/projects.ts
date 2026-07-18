import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Pulseboard",
    tagline: "Analytics SaaS",
    description:
      "A real-time analytics dashboard for product teams — live event streams, funnels and retention cohorts rendered at 60fps. Handles 2M+ events per day on a lean Node.js pipeline.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    github: "https://github.com/ahtisham/pulseboard",
    demo: "https://pulseboard.demo",
    caseStudy: "#",
    featured: true,
    tone: "primary",
    bento: "md:col-span-3 md:row-span-2",
  },
  {
    title: "Forma",
    tagline: "Headless form builder",
    description:
      "Drag-and-drop form builder with a headless API, conditional logic and 40+ field types. Used by 3k+ makers.",
    tech: ["Next.js", "Prisma", "tRPC", "Tailwind"],
    github: "https://github.com/ahtisham/forma",
    demo: "https://forma.demo",
    tone: "accent",
    bento: "md:col-span-3",
  },
  {
    title: "Shelfwise",
    tagline: "E-commerce platform",
    description:
      "Storefront + inventory admin for indie bookshops. Sub-second search across 120k titles.",
    tech: ["React", "Express", "Redis", "Stripe"],
    github: "https://github.com/ahtisham/shelfwise",
    demo: "https://shelfwise.demo",
    tone: "emerald",
    bento: "md:col-span-3",
  },
  {
    title: "Relay CLI",
    tagline: "Developer tooling",
    description:
      "Zero-config deployment CLI with preview environments for every branch. 1.2k GitHub stars.",
    tech: ["Node.js", "TypeScript", "Docker"],
    github: "https://github.com/ahtisham/relay-cli",
    demo: "https://relay.demo",
    tone: "violet",
    bento: "md:col-span-2",
  },

  {
    title: "Nimbus UI",
    tagline: "Open-source design system",
    description:
      "Accessible React component library with 38 primitives, full keyboard support and themeable tokens.",
    tech: ["React", "Radix", "Storybook"],
    github: "https://github.com/ahtisham/nimbus-ui",
    demo: "https://nimbus.demo",
    tone: "accent",
    bento: "md:col-span-4",
  },
];
