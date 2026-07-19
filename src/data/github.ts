import type { PinnedRepo } from "@/types";

export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "usekit",
    description:
      "Forty zero-dependency React hooks — typed, tested, tree-shakeable.",
    language: "TypeScript",
    languageColor: "#38BDF8",
    stars: 1243,
    forks: 87,
  },
  {
    name: "nimbus-ui",
    description:
      "Accessible React component library — 38 primitives, fully themeable.",
    language: "TypeScript",
    languageColor: "#38BDF8",
    stars: 892,
    forks: 64,
  },
  {
    name: "pulseboard",
    description:
      "Real-time analytics dashboard UI rendering live streams at 60fps.",
    language: "TypeScript",
    languageColor: "#38BDF8",
    stars: 456,
    forks: 31,
  },
];

export const GITHUB_STATS = [
  { label: "Contributions this year", value: 2147, suffix: "" },
  { label: "Public repositories", value: 48, suffix: "" },
  { label: "Pull requests merged", value: 620, suffix: "+" },
  { label: "Current streak", value: 92, suffix: " days" },
] as const;

/**
 * Deterministic pseudo-random contribution levels (0–4) for a 52×7 grid,
 * shaped so weekdays trend busier than weekends.
 */
export function getContributionGrid(): number[][] {
  let seed = 20260718;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  return Array.from({ length: 52 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const weekendDamp = day >= 5 ? 0.45 : 1;
      const seasonal = 0.7 + 0.3 * Math.sin((week / 52) * Math.PI * 2);
      const r = rand() * weekendDamp * seasonal;
      if (r > 0.55) return 4;
      if (r > 0.42) return 3;
      if (r > 0.28) return 2;
      if (r > 0.14) return 1;
      return 0;
    })
  );
}
