import type { NavItem } from "@/types";

/** Navbar texts besides the links. */
export const NAVBAR = {
  logoSuffix: "/ dev",
  ctaLabel: "Let's talk",
  ctaHref: "#contact",
} as const;

/** ─── NAVBAR LINKS ─── ids must match section ids on the page. */
export const NAV_ITEMS: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];
