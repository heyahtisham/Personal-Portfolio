import type { SectionHeadingContent, TimelineItem } from "@/types";

/**
 * ─── EDUCATION SECTION ────────────────────────────────────────────
 * Real education timeline (newest first) + earned certificates.
 */
export const EDUCATION_HEADING: SectionHeadingContent = {
  eyebrow: "Education",
  title: "Learning never",
  highlight: "stops",
  description:
    "Formal education, hands-on training — and a degree on the horizon.",
};

export const EDUCATION: TimelineItem[] = [
  {
    period: "Starting Sep 2026",
    title: "BS Computer Science",
    org: "Enrolling this fall",
    orgInitials: "CS",
    description:
      "Beginning a computer science degree to deepen my fundamentals — algorithms, data structures and software engineering.",
    points: [],
    tags: ["Upcoming"],
  },
  {
    period: "Jul 2025 — Feb 2026",
    title: "Web Design & Development",
    org: "Vocational Training Institute (VTI), Arifwala",
    orgInitials: "VT",
    description:
      "Practical diploma covering the full frontend path: HTML, CSS, JavaScript, React and responsive design — capped with real projects.",
    points: [],
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    period: "Completed",
    title: "Intermediate — FSc Pre-Engineering",
    org: "Frontier Group of Colleges, Arifwala",
    orgInitials: "FC",
    description:
      "Pre-engineering studies with a focus on mathematics and physics — where structured problem-solving clicked for me.",
    points: [],
    tags: ["Mathematics", "Physics"],
  },
  {
    period: "Completed",
    title: "Matriculation",
    org: "Govt. M.C. High School for Boys, Arifwala",
    orgInitials: "MC",
    description: "Secondary education with a science concentration.",
    points: [],
    tags: ["Science"],
  },
];
