import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FolderGit2,
  Github,
  Star,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { PROJECTS, PROJECTS_HEADING } from "@/data/projects";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "./projects/ProjectVisual";
import type { Project } from "@/types";

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "text-emerald-400",
  "In Progress": "text-amber-400",
  Planned: "text-muted",
};

export function Projects() {
  return (
    <Section id="projects" tinted>
      <SectionHeading icon={FolderGit2} {...PROJECTS_HEADING} />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid gap-5 md:grid-cols-6"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.title} variants={fadeUp} className={cn(project.bento)}>
            <TiltCard
              className={cn(
                "h-full p-6 md:p-7",
                project.featured
                  ? "grid gap-6 md:grid-cols-[1.05fr_1fr] md:items-center"
                  : "flex flex-col"
              )}
              intensity={2}
            >
              {project.featured && (
                <span className="absolute right-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full border border-glow bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
                  <Star className="h-3 w-3 fill-accent" aria-hidden />
                  Featured
                </span>
              )}

              <ProjectVisual tone={project.tone} large={project.featured} />

              <div
                className={cn(
                  "flex flex-col",
                  project.featured ? "mt-2 md:mt-0" : "mt-6 flex-1"
                )}
              >
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {project.tagline}
                  </p>
                  <span
                    className={cn(
                      "glass-chip inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                      STATUS_STYLES[project.status]
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.featured && project.features.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-2 pt-1" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="glass-chip rounded-full px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center gap-4 border-t border-subtle pt-5 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      aria-hidden
                    />
                    Live demo
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
