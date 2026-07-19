import { BadgeCheck, GraduationCap } from "lucide-react";
import type { Certificate, SectionHeadingContent } from "@/types";

/**
 * ─── CERTIFICATES SECTION ─────────────────────────────────────────
 * Earned credentials — add new ones to the array as they arrive.
 */
export const CERTIFICATES_HEADING: SectionHeadingContent = {
  eyebrow: "Certificates",
  title: "Proof of",
  highlight: "learning",
  description:
    "Credentials I've earned — and the one I'm working toward next.",
};

export const CERTIFICATES: Certificate[] = [
  {
    title: "Web Design & Development",
    issuer: "Vocational Training Institute (VTI), Arifwala",
    year: "2026",
    icon: BadgeCheck,
  },
  {
    title: "BS Computer Science",
    issuer: "Enrolling September 2026",
    year: "Upcoming",
    icon: GraduationCap,
  },
];
