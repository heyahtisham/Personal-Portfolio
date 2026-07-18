import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Alternate background band for visual rhythm between sections */
  tinted?: boolean;
}

/** Semantic section wrapper — consistent vertical rhythm and anchor id. */
export function Section({ id, children, className, tinted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell relative scroll-mt-24",
        tinted && "bg-deep/30",
        className
      )}
    >
      <div className="container relative">{children}</div>
    </section>
  );
}
