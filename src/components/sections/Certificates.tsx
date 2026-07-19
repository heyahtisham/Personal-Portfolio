import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { CERTIFICATES, CERTIFICATES_HEADING } from "@/data/certificates";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";

/**
 * Standalone certificates showcase — wide spotlight cards with a
 * tinted glass ribbon so credentials stand out from the timelines.
 */
export function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeading icon={Award} {...CERTIFICATES_HEADING} />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2"
      >
        {CERTIFICATES.map(({ title, issuer, year, icon: Icon }) => (
          <motion.div key={title} variants={fadeUp}>
            <TiltCard className="glass-sheen h-full overflow-hidden border-glow bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.06] p-6 md:p-7">
              {/* Corner sparkle */}
              <Sparkles
                aria-hidden
                className="absolute right-5 top-5 h-4 w-4 text-accent/40 transition-transform duration-300 group-hover/tilt:rotate-12 group-hover/tilt:scale-125"
              />

              <div className="flex items-start gap-4">
                <span className="glass-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-foreground shadow-glow-sm transition-transform duration-300 group-hover/tilt:scale-110 group-hover/tilt:rotate-3">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <span className="glass-chip inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                    {year}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{issuer}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
