import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { blurReveal, fadeUp, staggerContainer, VIEWPORT } from "@/animations/variants";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Shared section header — eyebrow chip, headline with gradient
 * highlight word, optional description. Keeps every section consistent.
 */
export function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-4 md:mb-16",
        align === "center" ? "mx-auto items-center text-center" : "items-start"
      )}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent"
      >
        <Icon className="h-3.5 w-3.5" aria-hidden />
        {eyebrow}
      </motion.span>

      <motion.h2
        variants={blurReveal}
        className="text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl"
      >
        {title}{" "}
        {highlight && (
          <span className="animate-gradient-x text-gradient">{highlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p variants={fadeUp} className="text-base text-muted md:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
