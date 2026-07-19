import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { TimelineItem } from "@/types";
import { fadeUp, staggerContainer, VIEWPORT, EASE } from "@/animations/variants";

interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Compact vertical timeline — a glowing spine on the left with
 * content-fit glass cards. Cards only take the height their content
 * needs. Shared between Experience and Education.
 */
export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Animated spine */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute left-5 top-2 h-[calc(100%-16px)] w-px origin-top bg-gradient-to-b from-primary via-accent/50 to-transparent"
      />

      <motion.ol
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="space-y-6"
      >
        {items.map((item) => (
          <motion.li
            key={`${item.org}-${item.period}`}
            variants={fadeUp}
            className="relative pl-12 sm:pl-14"
          >
            {/* Node: org initials chip on the spine */}
            <span
              aria-hidden
              className="glass absolute left-5 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-xs font-bold text-accent shadow-glow-sm"
            >
              {item.orgInitials}
            </span>

            <div className="card-base group p-5 transition-all duration-300 hover:border-glow hover:shadow-glow-sm md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-base font-bold tracking-tight md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-muted">{item.org}</p>
                </div>
                <span className="glass-chip shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.period}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              {item.points.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {item.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="glass-chip rounded-full px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
