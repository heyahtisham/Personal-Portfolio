import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import {
  TESTIMONIALS,
  TESTIMONIALS_EMPTY_STATE,
  TESTIMONIALS_HEADING,
} from "@/data/testimonials";
import { fadeUp, VIEWPORT } from "@/animations/variants";
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

/** Elegant placeholder shown until real testimonials exist. */
function ComingSoon() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="card-base mx-auto flex max-w-xl flex-col items-center gap-5 p-10 text-center md:p-12"
    >
      <span className="glass-chip flex h-14 w-14 items-center justify-center rounded-full text-accent">
        <MessageSquareQuote className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="text-xl font-bold tracking-tight">
        {TESTIMONIALS_EMPTY_STATE.title}
      </h3>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        {TESTIMONIALS_EMPTY_STATE.text}
      </p>
      <Button href={TESTIMONIALS_EMPTY_STATE.ctaHref} withArrow>
        {TESTIMONIALS_EMPTY_STATE.ctaLabel}
      </Button>
    </motion.div>
  );
}

export function Testimonials() {
  const hasTestimonials = TESTIMONIALS.length > 0;
  const firstRow = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondRow = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <Section id="testimonials" className="overflow-hidden">
      <SectionHeading icon={MessageSquareQuote} {...TESTIMONIALS_HEADING} />

      {hasTestimonials ? (
        <div className="space-y-6">
          <Marquee slow>
            {firstRow.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
          {secondRow.length > 0 && (
            <Marquee slow reverse>
              {secondRow.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </Marquee>
          )}
        </div>
      ) : (
        <ComingSoon />
      )}
    </Section>
  );
}
