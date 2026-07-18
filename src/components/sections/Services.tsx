import { motion } from "framer-motion";
import { Check, Handshake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { SERVICES } from "@/data/services";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        icon={Handshake}
        title="How I can"
        highlight="help"
        description="Clear scope, honest timelines, senior-level execution — whether it's a landing page or a full product."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid gap-5 md:grid-cols-4"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.title} variants={fadeUp} className={cn(service.bento)}>
            <TiltCard
              className={cn(
                "flex h-full flex-col p-6 md:p-7",
                service.highlighted && "border-glow bg-gradient-to-b from-primary/[0.08] to-transparent"
              )}
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-accent ring-1 ring-primary/25 transition-transform duration-300 group-hover/tilt:rotate-6 group-hover/tilt:scale-110">
                <service.icon className="h-5 w-5" aria-hidden />
              </span>

              <h3 className="text-lg font-bold tracking-tight">{service.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-subtle pt-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
