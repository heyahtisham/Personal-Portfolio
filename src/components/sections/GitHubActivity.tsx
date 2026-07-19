import { motion } from "framer-motion";
import { BookMarked, GitFork, Github, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { PERSONAL } from "@/data/personal";
import { GITHUB_CONFIG, GITHUB_HEADING } from "@/data/github";
import { useGitHubData } from "@/hooks/useGitHubData";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

const LEVEL_CLASSES = [
  "bg-white/[0.05]",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-accent",
];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#38BDF8",
  JavaScript: "#FACC15",
  HTML: "#F97316",
  CSS: "#818CF8",
};

/**
 * Open-source section — everything here is real data fetched live
 * from GitHub (see useGitHubData). Blocks hide gracefully when a
 * request fails; nothing is ever faked.
 */
export function GitHubActivity() {
  const { profile, repos, totalStars, contributions, totalContributions, loading } =
    useGitHubData(GITHUB_CONFIG.username, GITHUB_CONFIG.repoCount);

  // Group the last year of days into columns of 7 for the graph.
  const weeks: (typeof contributions)[] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const hasAnyData = profile !== null || repos.length > 0 || weeks.length > 0;

  return (
    <Section id="github">
      <SectionHeading icon={Github} {...GITHUB_HEADING} />

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Contribution graph — real data */}
        {weeks.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="card-base overflow-x-auto p-6 md:p-8"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-semibold">
                {totalContributions.toLocaleString()} contributions in the last
                year
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
              {weeks.map((week, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {week.map((day) => (
                    <span
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className={`h-2.5 w-2.5 rounded-[3px] ${LEVEL_CLASSES[day.level]} hover:!bg-accent`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats — real numbers from the API */}
        {profile && (
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-2 gap-5 lg:grid-cols-4"
          >
            {[
              { value: profile.public_repos, suffix: "", label: "Public repositories" },
              { value: profile.followers, suffix: "", label: "GitHub followers" },
              { value: totalStars, suffix: "", label: "Stars earned" },
              { value: totalContributions, suffix: "", label: "Contributions this year" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="card-base p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow"
              >
                <Stat {...stat} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Top repositories — real, sorted by stars */}
        {repos.length > 0 && (
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid gap-5 md:grid-cols-3"
          >
            {repos.map((repo) => (
              <motion.a
                key={repo.name}
                variants={fadeUp}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="card-base group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-glow-sm"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <BookMarked className="h-4 w-4 text-accent" aria-hidden />
                  <span className="link-underline">{repo.name}</span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {repo.description ?? "No description yet."}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        aria-hidden
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            LANGUAGE_COLORS[repo.language] ?? "#94A3B8",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" aria-hidden />
                    {repo.stargazers_count.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" aria-hidden />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Fallback / profile link — always available */}
        {!loading && !hasAnyData && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-center text-sm text-muted"
          >
            Couldn&apos;t load GitHub data right now — visit my profile
            directly instead.
          </motion.p>
        )}

        <div className="flex justify-center">
          <Button href={PERSONAL.github} variant="secondary" withArrow>
            {GITHUB_CONFIG.profileCtaLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
