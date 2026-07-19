import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { PROCESS_HEADING, PROCESS_STEPS } from "@/data/process";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

/**
 * Process — five numbered glass cards linked by arrows on desktop,
 * a compact numbered stack on mobile. Watermark numerals + tinted
 * icon chips give each step its own identity.
 */
export function Process() {
  return (
    <Section id="process" tinted>
      <SectionHeading icon={Workflow} {...PROCESS_HEADING} />

      <motion.ol
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
      >
        {PROCESS_STEPS.map(({ number, title, description, icon: Icon }, i) => (
          <motion.li key={number} variants={fadeUp} className="relative">
            <TiltCard className="glass-sheen h-full overflow-hidden p-6">
              {/* Watermark numeral */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-3 select-none text-[64px] font-black leading-none text-white/[0.045] transition-colors duration-300 group-hover/tilt:text-accent/10"
              >
                {number}
              </span>

              <span className="glass-chip flex h-11 w-11 items-center justify-center rounded-2xl text-accent transition-transform duration-300 group-hover/tilt:scale-110 group-hover/tilt:rotate-6">
                <Icon className="h-5 w-5" aria-hidden />
              </span>

              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
                Step {number}
              </p>
              <h3 className="mt-1 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </TiltCard>

            {/* Connector arrow between cards on desktop */}
            {i < PROCESS_STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-[15px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-glow bg-surface text-accent lg:flex"
              >
                <ArrowRight className="h-3 w-3" />
              </span>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
