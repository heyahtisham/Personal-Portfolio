import { GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { EDUCATION, EDUCATION_HEADING } from "@/data/education";

export function Education() {
  return (
    <Section id="education" tinted>
      <SectionHeading icon={GraduationCap} {...EDUCATION_HEADING} />
      <Timeline items={EDUCATION} />
    </Section>
  );
}
