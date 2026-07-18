import { motion } from "framer-motion";
import { ArrowUpRight, FileText, FolderGit2, Github, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { PROJECTS } from "@/data/projects";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "./projects/ProjectVisual";

export function Projects() {
  return (
    <Section id="projects" tinted>
      <SectionHeading
        eyebrow="Featured work"
        icon={FolderGit2}
        title="Projects I'm"
        highlight="proud of"
        description="Real products with real users — each one shipped end-to-end, from first sketch to production."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid gap-5 md:grid-cols-6"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.title} variants={fadeUp} className={cn(project.bento)}>
            <TiltCard className="flex h-full flex-col p-6 md:p-7" intensity={2}>
              {project.featured && (
                <span className="absolute right-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full border border-glow bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
                  <Star className="h-3 w-3 fill-accent" aria-hidden />
                  Featured
                </span>
              )}

              <ProjectVisual tone={project.tone} large={project.featured} />

              <div className="mt-6 flex flex-1 flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {project.tagline}
                </p>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="glass-chip rounded-full px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 border-t border-subtle pt-5 text-sm">
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
                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="ml-auto inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-foreground"
                    >
                      <FileText className="h-4 w-4" aria-hidden />
                      Case study
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
