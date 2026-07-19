import { PERSONAL } from "./personal";

/**
 * ─── SEO ──────────────────────────────────────────────────────────
 * Document title + meta description. Applied at runtime by App.tsx;
 * keep index.html in sync for the initial static load.
 */
export const SEO = {
  title: `${PERSONAL.name} — ${PERSONAL.role}`,
  description:
    "Ahtisham Shoukat — Frontend Web Developer at Neksio. I build clean, fast, accessible and responsive websites with React, TypeScript and Tailwind CSS.",
} as const;
