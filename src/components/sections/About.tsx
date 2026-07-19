import { motion } from "framer-motion";
import { MapPin, UserRound } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { TiltCard } from "@/components/ui/TiltCard";
import { PERSONAL } from "@/data/personal";
import {
  ABOUT_HEADING,
  ABOUT_HIGHLIGHTS,
  ABOUT_STORY,
  ABOUT_TIMELINE,
} from "@/data/about";
import { ABOUT_STATS } from "@/data/stats";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  VIEWPORT,
} from "@/animations/variants";

export function About() {
  return (
    <Section id="about" tinted>
      <SectionHeading icon={UserRound} {...ABOUT_HEADING} />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Story */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-6"
        >
          {ABOUT_STORY.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden />
            {PERSONAL.location} · {PERSONAL.timezone}
          </div>

          {/* Timeline preview */}
          <div className="mt-2 border-l border-subtle pl-6">
            {ABOUT_TIMELINE.map((item) => (
              <div key={item.label} className="relative pb-5 last:pb-0">
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
            {ABOUT_STATS.map((stat) => (
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
          {ABOUT_HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
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
