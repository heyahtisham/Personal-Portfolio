import type { SectionHeadingContent, Testimonial } from "@/types";

/**
 * ─── TESTIMONIALS SECTION ─────────────────────────────────────────
 * Real client reviews only — never invented.
 *
 * While this array is EMPTY the section shows an elegant
 * "coming soon" card instead of the marquee. As soon as you add a
 * real testimonial below, the marquee comes back automatically.
 */
export const TESTIMONIALS_HEADING: SectionHeadingContent = {
  eyebrow: "Testimonials",
  title: "What clients",
  highlight: "say",
  description:
    "I'm at the start of my freelance journey — real reviews will appear here as projects wrap up.",
};

export const TESTIMONIALS_EMPTY_STATE = {
  title: "Reviews coming soon",
  text: "I'm currently collecting feedback from my first freelance clients. Want to be one of them?",
  ctaLabel: "Start a project",
  ctaHref: "#contact",
} as const;

export const TESTIMONIALS: Testimonial[] = [
  // Add real testimonials like this:
  // {
  //   quote: "…",
  //   name: "Client Name",
  //   role: "Founder",
  //   company: "Company",
  //   initials: "CN",
  //   stars: 5,
  // },
];
