import { PERSONAL } from "./personal";

/**
 * ─── FOOTER ───────────────────────────────────────────────────────
 * The copyright year updates automatically in the component.
 */
export const FOOTER = {
  cta: {
    title: "Have a project in mind?",
    subtitle:
      "I'm currently available for freelance work — let's turn your idea into a fast, beautiful website.",
    buttonLabel: "Start a conversation",
    buttonHref: "#contact",
  },
  blurb: `${PERSONAL.role} based in ${PERSONAL.location}, building clean, fast, responsive websites.`,
  availabilityNote: "Currently available for freelance projects",
  navigateTitle: "Navigate",
  contactTitle: "Get in touch",
  copyrightNote: "Designed and built with care.",
  backToTopLabel: "Back to top",
} as const;
