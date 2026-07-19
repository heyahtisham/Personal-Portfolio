import { PERSONAL } from "./personal";
import type { SectionHeadingContent } from "@/types";

/**
 * ─── GITHUB / OPEN SOURCE SECTION ─────────────────────────────────
 * This section shows REAL data fetched live from the GitHub API:
 *   - your profile stats (repos, followers, stars)
 *   - your most recently pushed repositories
 *   - your real contribution graph
 *
 * Set your username in personal.ts (`githubUsername`). If a request
 * fails (offline, rate limit, wrong username) the affected block is
 * hidden gracefully — nothing fake is ever shown.
 */
export const GITHUB_HEADING: SectionHeadingContent = {
  eyebrow: "Open source",
  title: "Building in",
  highlight: "public",
  description:
    "Live from my GitHub — real repositories, real commits, updated automatically.",
};

export const GITHUB_CONFIG = {
  username: PERSONAL.githubUsername,
  /** How many repositories to show. */
  repoCount: 3,
  profileCtaLabel: "Visit my GitHub",
} as const;
