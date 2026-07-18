import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SITE } from "@/constants/site";
import type { SocialLink } from "@/types";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: SITE.github, icon: Github },
  { label: "LinkedIn", href: SITE.linkedin, icon: Linkedin },
  { label: "Twitter", href: SITE.twitter, icon: Twitter },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];
