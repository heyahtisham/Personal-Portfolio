import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { TimelineItem } from "@/types";
import { fadeUp, staggerContainer, VIEWPORT, EASE } from "@/animations/variants";
import { cn } from "@/lib/cn";

interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Vertical timeline — the spine draws itself on scroll, entries
 * alternate sides on desktop and stack on mobile.
 * Shared between Experience and Education.
 */
export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Animated spine */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute left-5 top-2 h-[calc(100%-16px)] w-px origin-top bg-gradient-to-b from-primary via-accent/50 to-transparent md:left-1/2"
      />

      <motion.ol
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="space-y-12 md:space-y-16"
      >
        {items.map((item, i) => {
          const onRight = i % 2 === 1;
          return (
            <motion.li
              key={`${item.org}-${item.period}`}
              variants={fadeUp}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >
              {/* Node: org initials chip, centered on the spine */}
              <span
                aria-hidden
                className="absolute left-5 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-2xl border border-glow bg-surface text-xs font-bold text-accent shadow-glow-sm md:left-1/2"
              >
                {item.orgInitials}
              </span>

              <div
                className={cn(
                  "pl-14 md:pl-0",
                  onRight
                    ? "md:col-start-2 md:pl-0"
                    : "md:col-start-1 md:text-right"
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-muted">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                {item.points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "flex items-start gap-2",
                          !onRight && "md:flex-row-reverse md:text-right"
                        )}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags.length > 0 && (
                  <ul
                    className={cn(
                      "mt-4 flex flex-wrap gap-2",
                      !onRight && "md:justify-end"
                    )}
                    aria-label="Technologies"
                  >
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-lg border border-subtle bg-surface/70 px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}
