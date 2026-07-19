import type { SectionHeadingContent, TimelineItem } from "@/types";

/**
 * ─── EXPERIENCE SECTION ───────────────────────────────────────────
 * Real experience only. Add new roles to the top of the array.
 */
export const EXPERIENCE_HEADING: SectionHeadingContent = {
  eyebrow: "Experience",
  title: "Where I",
  highlight: "work",
  description:
    "My professional journey is just beginning — here's where I am and what I do.",
};

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "Feb 2026 — Present",
    title: "Frontend Web Developer",
    org: "Neksio · Remote",
    orgInitials: "NX",
    description:
      "Building and maintaining responsive web interfaces as part of a remote team.",
    points: [
      "Turn designs into responsive, interactive React interfaces",
      "Write typed, reusable components with TypeScript and Tailwind CSS",
      "Collaborate remotely with designers and developers on real client work",
      "Focus on performance, accessibility and clean, maintainable code",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    period: "Jul 2025 — Feb 2026",
    title: "Web Design & Development Trainee",
    org: "Vocational Training Institute (VTI), Arifwala",
    orgInitials: "VT",
    description:
      "Hands-on diploma program where I built my foundation — from semantic HTML and modern CSS to JavaScript and React.",
    points: [
      "Built responsive websites from scratch as course projects",
      "Learned modern JavaScript, Git workflows and deployment",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
  },
];
