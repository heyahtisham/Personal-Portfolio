import { Briefcase } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Career"
        icon={Briefcase}
        title="Where I've"
        highlight="worked"
        description="From freelance hustle to leading frontend at a product company — every step sharpened the craft."
      />
      <Timeline items={EXPERIENCE} />
    </Section>
  );
}
