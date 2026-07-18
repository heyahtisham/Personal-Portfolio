import { motion } from "framer-motion";
import {
  Code2,
  Compass,
  Heart,
  MapPin,
  UserRound,
  Zap,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { TiltCard } from "@/components/ui/TiltCard";
import { SITE } from "@/constants/site";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  VIEWPORT,
} from "@/animations/variants";

const STATS = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 25, suffix: "+", label: "Happy clients" },
  { value: 98, suffix: "", label: "Avg. Lighthouse score" },
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Craft over shortcuts",
    text: "Every component typed, tested and documented — code the next engineer will thank me for.",
  },
  {
    icon: Zap,
    title: "Performance obsessed",
    text: "Sub-second loads aren't a nice-to-have. I budget every kilobyte and every render.",
  },
  {
    icon: Compass,
    title: "Product thinking",
    text: "I ask why before how — the best feature is often the one you don't build.",
  },
  {
    icon: Heart,
    title: "Design empathy",
    text: "Fluent in Figma and design systems, so handoff feels like collaboration, not translation.",
  },
];

export function About() {
  return (
    <Section id="about" tinted>
      <SectionHeading
        eyebrow="About me"
        icon={UserRound}
        title="A developer who thinks like a"
        highlight="designer"
        description="Five years of turning ambitious ideas into products people actually enjoy using."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Story */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-6"
        >
          <p className="text-lg leading-relaxed text-muted">
            My path started in a university dorm, reverse-engineering the
            websites I admired until the view-source ran out. That curiosity
            became a freelance career, then agency work, and now a senior role
            leading frontend at{" "}
            <span className="text-foreground">Neksio Tech</span>.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            What hasn&apos;t changed: I care about the last 10% — the easing
            curve on a dropdown, the empty state nobody specced, the loading
            skeleton that makes 400ms feel instant. That&apos;s where good
            products become great ones.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            {SITE.location} · {SITE.timezone}
          </div>

          {/* Timeline preview */}
          <div className="mt-2 border-l border-subtle pl-6">
            {[
              { year: "2024", label: "Senior Frontend Engineer · Neksio Tech" },
              { year: "2022", label: "Full-Stack Developer · Bytecraft Studio" },
              { year: "2021", label: "Freelance Frontend Developer" },
            ].map((item) => (
              <div key={item.year} className="relative pb-5 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-accent/15"
                />
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.year}
                </p>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-subtle pt-8 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <Stat {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Highlight cards — offset bento */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-5 sm:grid-cols-2"
        >
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <TiltCard
              key={title}
              className={i % 2 === 1 ? "p-6 sm:translate-y-6 md:p-7" : "p-6 md:p-7"}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-accent ring-1 ring-primary/25 transition-transform duration-300 group-hover/tilt:scale-110 group-hover/tilt:rotate-3">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
