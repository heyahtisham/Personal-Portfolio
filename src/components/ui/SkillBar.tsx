import { motion } from "framer-motion";
import { EASE } from "@/animations/variants";

interface SkillBarProps {
  name: string;
  level: number;
}

/** Labeled progress bar that fills when scrolled into view. */
export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-xs tabular-nums text-muted">{level}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-card"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}
