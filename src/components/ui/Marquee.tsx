import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
}

/**
 * Infinite marquee. Content is duplicated once (aria-hidden) so the
 * -50% translate loops seamlessly. Pauses on hover.
 */
export function Marquee({ children, className, slow, reverse }: MarqueeProps) {
  return (
    <div className={cn("group/marquee overflow-hidden mask-fade-edges", className)}>
      <div
        className={cn(
          "flex w-max gap-6 group-hover/marquee:[animation-play-state:paused]",
          slow ? "animate-marquee-slow" : "animate-marquee"
        )}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
