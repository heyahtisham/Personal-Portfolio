import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { TECH_CATEGORIES, TECHSTACK_HEADING } from "@/data/techstack";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

/**
 * Tech stack — animated marquee up top, then a single compact glass
 * panel where each category is one tight row: label left, chips right.
 * No stretched cards, no dead space.
 */
export function TechStack() {
  return (
    <Section id="stack" tinted className="overflow-hidden">
      <SectionHeading icon={Layers} {...TECHSTACK_HEADING} />

      {/* Logo cloud marquee */}
      <Marquee className="mb-12">
        {TECH_CATEGORIES.flatMap((category) => category.items).map((tech) => (
          <span
            key={tech}
            className="glass-chip flex shrink-0 items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            {tech}
          </span>
        ))}
      </Marquee>

      {/* Categorized panel — one row per category */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="card-base mx-auto max-w-4xl divide-y divide-white/[0.06] overflow-hidden"
      >
        {TECH_CATEGORIES.map(({ label, icon: Icon, items }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="group flex flex-col gap-3 p-5 transition-colors duration-300 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:gap-6 md:px-7"
          >
            <div className="flex w-full shrink-0 items-center gap-3 sm:w-40">
              <span className="glass-chip flex h-9 w-9 items-center justify-center rounded-xl text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold">{label}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="glass-chip rounded-full px-3 py-1.5 text-xs text-muted transition-colors duration-300 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
