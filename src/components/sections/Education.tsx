import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { TiltCard } from "@/components/ui/TiltCard";
import { CERTIFICATES, EDUCATION } from "@/data/education";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

export function Education() {
  return (
    <Section id="education" tinted>
      <SectionHeading
        eyebrow="Education"
        icon={GraduationCap}
        title="Learning never"
        highlight="stops"
        description="A CS degree laid the foundation — deliberate, continuous learning keeps it sharp."
      />

      <Timeline items={EDUCATION} />

      {/* Certificates */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CERTIFICATES.map(({ title, issuer, year, icon: Icon }) => (
          <motion.div key={title} variants={fadeUp}>
            <TiltCard className="h-full p-5">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-accent ring-1 ring-primary/25 transition-transform duration-300 group-hover/tilt:scale-110">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold leading-snug">{title}</h3>
              <p className="mt-1.5 text-xs text-muted">
                {issuer} · {year}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
