import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_HEADING, PROCESS_STEPS } from "@/data/process";
import { fadeUp, staggerContainer, VIEWPORT, EASE } from "@/animations/variants";

export function Process() {
  return (
    <Section id="process" tinted>
      <SectionHeading icon={Workflow} {...PROCESS_HEADING} />

      <div className="relative mx-auto max-w-5xl">
        {/* Connector line, horizontal on desktop */}
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: EASE }}
          className="absolute left-[27px] top-0 hidden h-px w-0 origin-left bg-gradient-to-r from-primary via-accent/50 to-transparent lg:top-7 lg:block lg:h-px lg:w-[calc(100%-56px)]"
        />
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: EASE }}
          className="absolute left-7 top-2 h-[calc(100%-16px)] w-px origin-top bg-gradient-to-b from-primary via-accent/50 to-transparent lg:hidden"
        />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-10 lg:grid-cols-5 lg:gap-6"
        >
          {PROCESS_STEPS.map(({ number, title, description, icon: Icon }) => (
            <motion.li
              key={number}
              variants={fadeUp}
              className="relative flex gap-5 pl-0 lg:flex-col lg:gap-0"
            >
              <span className="glass relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-accent shadow-glow-sm">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="lg:mt-5">
                <p className="text-xs font-bold tracking-[0.24em] text-accent">
                  {number}
                </p>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}
