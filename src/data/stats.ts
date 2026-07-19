/**
 * ─── STATS ────────────────────────────────────────────────────────
 * Counters shown in the About section. Edit values freely — keep
 * them honest and update them as your profile grows.
 */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const ABOUT_STATS: StatItem[] = [
  { value: 10, suffix: "+", label: "Projects built" },
  { value: 12, suffix: "+", label: "Technologies used" },
  { value: 1, suffix: "", label: "Certification earned" },
  { value: 2, suffix: "+", label: "Years learning web dev" },
];
