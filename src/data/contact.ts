import { PERSONAL } from "./personal";
import type { SectionHeadingContent } from "@/types";

/**
 * ─── CONTACT SECTION ──────────────────────────────────────────────
 * Form labels, info cards and availability note.
 */
export const CONTACT_HEADING: SectionHeadingContent = {
  eyebrow: "Contact",
  title: "Let's build something",
  highlight: "together",
  description:
    "Tell me about your project — I reply to every message, usually within 24 hours.",
};

export const CONTACT = {
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Project details",
    messagePlaceholder:
      "What are you building? Share as much or as little as you like.",
    submitLabel: "Send message",
    /** Subject line used for the mailto handoff. */
    subjectPrefix: "Project inquiry from",
  },
  emailCard: {
    title: "Email me",
    value: PERSONAL.email,
  },
  locationCard: {
    title: PERSONAL.location,
    subtitle: PERSONAL.timezone,
  },
  availabilityCard: {
    title: PERSONAL.availability,
    subtitle: `${PERSONAL.role} @ ${PERSONAL.company} · open to freelance`,
  },
} as const;
