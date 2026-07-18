import { useMemo } from "react";
import { motion } from "framer-motion";
import { BookMarked, GitFork, Github, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { SITE } from "@/constants/site";
import { getContributionGrid, GITHUB_STATS, PINNED_REPOS } from "@/data/github";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

const LEVEL_CLASSES = [
  "bg-white/[0.05]",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-accent",
];

export function GitHubActivity() {
  const grid = useMemo(getContributionGrid, []);

  return (
    <Section id="github">
      <SectionHeading
        eyebrow="Open source"
        icon={Github}
        title="Always"
        highlight="shipping"
        description="A year of consistent commits — side projects, open-source contributions and client work."
      />

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Contribution graph */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="card-base overflow-x-auto p-6 md:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-semibold">
              2,147 contributions in the last year
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              Less
              {LEVEL_CLASSES.map((cls) => (
                <span key={cls} className={`h-2.5 w-2.5 rounded-[3px] ${cls}`} aria-hidden />
              ))}
              More
            </div>
          </div>

          <div
            className="flex min-w-[720px] gap-[3px]"
            role="img"
            aria-label="GitHub contribution graph for the last year"
          >
            {grid.map((week, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {week.map((level, d) => (
                  <motion.span
                    key={d}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: w * 0.008, duration: 0.25 }}
                    className={`h-2.5 w-2.5 rounded-[3px] ${LEVEL_CLASSES[level]} transition-colors hover:!bg-accent`}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {GITHUB_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="card-base p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow"
            >
              <Stat {...stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pinned repos */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-5 md:grid-cols-3"
        >
          {PINNED_REPOS.map((repo) => (
            <motion.a
              key={repo.name}
              variants={fadeUp}
              href={`${SITE.github}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className="card-base group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-glow-sm"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <BookMarked className="h-4 w-4 text-accent" aria-hidden />
                <span className="link-underline">{repo.name}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {repo.description}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" aria-hidden />
                  {repo.stars.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" aria-hidden />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
