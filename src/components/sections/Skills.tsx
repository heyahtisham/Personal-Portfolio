import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { TiltCard } from "@/components/ui/TiltCard";
import { SKILL_GROUPS } from "@/data/skills";
import { fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/cn";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        icon={Cpu}
        title="Tools I've"
        highlight="mastered"
        description="A focused stack, honed over five years — deep in the things that matter, honest about the rest."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="grid auto-rows-auto gap-5 md:grid-cols-4"
      >
        {SKILL_GROUPS.map((group) => (
          <motion.div key={group.title} variants={fadeUp} className={cn(group.bento)}>
            <TiltCard className="h-full p-6 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-accent ring-1 ring-primary/25 transition-transform duration-300 group-hover/tilt:rotate-6 group-hover/tilt:scale-110">
                  <group.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted">
                {group.description}
              </p>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
