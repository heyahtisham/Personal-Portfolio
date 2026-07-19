import { Briefcase } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { EXPERIENCE, EXPERIENCE_HEADING } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading icon={Briefcase} {...EXPERIENCE_HEADING} />
      <Timeline items={EXPERIENCE} />
    </Section>
  );
}
