import { MessageSquareQuote, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Testimonial } from "@/types";

function TestimonialCard({ quote, name, role, company, initials, stars }: Testimonial) {
  return (
    <figure className="card-base w-[340px] shrink-0 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-glow-sm sm:w-[400px]">
      <div className="flex gap-1" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-subtle pt-5">
        <span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-accent/30 text-xs font-bold text-foreground ring-1 ring-primary/30"
        >
          {initials}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted">
            {role} · {company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3);

  return (
    <Section id="testimonials" className="overflow-hidden">
      <SectionHeading
        eyebrow="Testimonials"
        icon={MessageSquareQuote}
        title="What clients"
        highlight="say"
        description="Kind words from founders, product leads and engineering managers I've shipped with."
      />

      <div className="space-y-6">
        <Marquee slow>
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee slow reverse>
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
