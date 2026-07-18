import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { TECH_CATEGORIES } from "@/data/techstack";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

const ALL_TECH = TECH_CATEGORIES.flatMap((category) => category.items);

export function TechStack() {
  return (
    <Section id="stack" tinted className="overflow-hidden">
      <SectionHeading
        eyebrow="Tech stack"
        icon={Layers}
        title="The stack behind the"
        highlight="work"
        description="Chosen deliberately, learned deeply — boring where boring wins, modern where it matters."
      />

      {/* Logo cloud marquee */}
      <Marquee className="mb-14">
        {ALL_TECH.map((tech) => (
          <span
            key={tech}
            className="glass-chip flex shrink-0 items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            {tech}
          </span>
        ))}
      </Marquee>

      {/* Categorized grid */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
      >
        {TECH_CATEGORIES.map(({ label, icon: Icon, items }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="card-base group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-glow"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-accent ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold">{label}</h3>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="glass-chip rounded-full px-2.5 py-1 text-xs text-muted"
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
