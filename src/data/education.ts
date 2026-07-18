import { Award, BadgeCheck, BookOpen, GraduationCap } from "lucide-react";
import type { Certificate, TimelineItem } from "@/types";

export const EDUCATION: TimelineItem[] = [
  {
    period: "2017 — 2021",
    title: "BS Computer Science",
    org: "University of the Punjab",
    orgInitials: "PU",
    description:
      "Graduated with distinction. Focused on algorithms, databases and human-computer interaction.",
    points: [
      "Final-year project: real-time collaboration editor (CRDT-based)",
      "Led the university web development society for two years",
    ],
    tags: ["Algorithms", "Databases", "HCI"],
  },
  {
    period: "2021",
    title: "Meta Frontend Professional Certificate",
    org: "Coursera",
    orgInitials: "CO",
    description:
      "Nine-course specialization covering advanced React patterns, testing and UX principles.",
    points: [],
    tags: ["React", "Testing", "UX"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: BadgeCheck,
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    year: "2023",
    icon: BookOpen,
  },
  {
    title: "TypeScript Deep Dive",
    issuer: "Total TypeScript",
    year: "2022",
    icon: Award,
  },
  {
    title: "UI Design Foundations",
    issuer: "Designlab",
    year: "2022",
    icon: GraduationCap,
  },
];
