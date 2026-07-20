import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  id: string;
}

export interface SectionHeadingContent {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

export interface HeroBadge {
  text: string;
}

export interface CodeToken {
  text: string;
  className: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
  /** Tailwind col/row span classes for the bento layout */
  bento: string;
}

export type ProjectTone = "primary" | "accent" | "violet" | "emerald";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  status: "Live" | "In Progress" | "Planned";
  /** Live site URL to embed as a scaled preview in the thumbnail.
      Takes priority over `image`. The site must allow iframing. */
  preview?: string;
  /** Screenshot path under public/, e.g. "/projects/personal-portfolio.png".
      Shown while the live preview loads, or as the thumbnail when no
      `preview` is set. Falls back to the abstract mockup otherwise. */
  image?: string;
  github: string;
  demo: string;
  caseStudy?: string;
  featured?: boolean;
  tone: ProjectTone;
  bento: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  orgInitials: string;
  description: string;
  points: string[];
  tags: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  bento: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  stars: number;
}

export interface TechCategory {
  label: string;
  icon: LucideIcon;
  items: string[];
}

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}
