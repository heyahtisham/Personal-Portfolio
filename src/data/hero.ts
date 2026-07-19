import { PERSONAL } from "./personal";
import type { CodeToken } from "@/types";

/**
 * ─── HERO SECTION ─────────────────────────────────────────────────
 * Headline, intro, badges and the code-window illustration.
 */
export const HERO = {
  /** Small pills above the headline. First one shows the green pulse dot. */
  availabilityBadge: PERSONAL.availability,
  secondaryBadge: `${PERSONAL.role} @ ${PERSONAL.company}`,

  /** Headline: plain part + gradient-highlighted word. */
  headline: "Building modern web experiences that feel",
  headlineHighlight: "effortless",

  intro:
    `I'm ${PERSONAL.name}, a frontend web developer at ${PERSONAL.company}. ` +
    "I build clean, fast, accessible and responsive websites with React, " +
    "TypeScript and Tailwind CSS — focused on user experience and performance.",

  primaryCta: { label: "View my work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },

  /** Floating badges around the code window. */
  floatingBadges: {
    lighthouse: { label: "Lighthouse", value: "98 / 100" },
    deploy: { label: "Deploy successful —", value: "2s ago" },
  },

  codeWindowFileName: "developer.ts",
} as const;

/**
 * The "code" typed out in the hero window, line by line.
 * Each line is a list of colored tokens.
 */
export const CODE_LINES: CodeToken[][] = [
  [
    { text: "const", className: "text-accent" },
    { text: " developer", className: "text-foreground" },
    { text: " = {", className: "text-muted" },
  ],
  [
    { text: "  name", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'Ahtisham Shoukat'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  role", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'Frontend Developer @ Neksio'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  stack", className: "text-sky-300" },
    { text: ": [", className: "text-muted" },
    { text: "'React'", className: "text-emerald-300" },
    { text: ", ", className: "text-muted" },
    { text: "'TypeScript'", className: "text-emerald-300" },
    { text: ", ", className: "text-muted" },
    { text: "'Tailwind'", className: "text-emerald-300" },
    { text: "],", className: "text-muted" },
  ],
  [
    { text: "  learning", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'Node.js & MongoDB'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  focus", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'pixel-perfect UIs'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [{ text: "};", className: "text-muted" }],
  [{ text: "", className: "" }],
  [
    { text: "await", className: "text-accent" },
    { text: " developer.", className: "text-foreground" },
    { text: "build", className: "text-sky-300" },
    { text: "(", className: "text-muted" },
    { text: "yourIdea", className: "text-foreground" },
    { text: ");", className: "text-muted" },
  ],
];
