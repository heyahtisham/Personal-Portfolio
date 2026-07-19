import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { PERSONAL } from "./personal";
import type { SocialLink } from "@/types";

/**
 * ─── SOCIAL LINKS ─────────────────────────────────────────────────
 * Shown in the hero, footer and contact section.
 * URLs come from personal.ts — edit them there.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: PERSONAL.github, icon: Github },
  { label: "LinkedIn", href: PERSONAL.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${PERSONAL.email}`, icon: Mail },
  { label: "Resume", href: PERSONAL.resumeUrl, icon: FileText },
];
