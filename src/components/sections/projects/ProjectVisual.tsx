import type { ProjectTone } from "@/types";
import { cn } from "@/lib/cn";

const TONE_STYLES: Record<
  ProjectTone,
  { glow: string; bar: string; chip: string }
> = {
  primary: {
    glow: "from-primary/25 via-primary/5",
    bar: "bg-primary/60",
    chip: "bg-primary/30",
  },
  accent: {
    glow: "from-accent/20 via-accent/5",
    bar: "bg-accent/60",
    chip: "bg-accent/30",
  },
  violet: {
    glow: "from-violet-500/20 via-violet-500/5",
    bar: "bg-violet-400/60",
    chip: "bg-violet-400/30",
  },
  emerald: {
    glow: "from-emerald-500/20 via-emerald-500/5",
    bar: "bg-emerald-400/60",
    chip: "bg-emerald-400/30",
  },
};

interface ProjectVisualProps {
  tone: ProjectTone;
  large?: boolean;
}

/**
 * Abstract product mockup — a browser frame with skeleton UI blocks
 * tinted per project. Replaces screenshots with something intentional
 * that never breaks or pixelates.
 */
export function ProjectVisual({ tone, large }: ProjectVisualProps) {
  const styles = TONE_STYLES[tone];

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-2xl border border-subtle bg-deep/80",
        large ? "h-56 md:h-72" : "h-40"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent", styles.glow)} />

      {/* Browser chrome */}
      <div className="relative flex items-center gap-1.5 border-b border-subtle px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 h-3.5 w-28 rounded-full bg-white/[0.06]" />
      </div>

      {/* Skeleton UI */}
      <div className="relative grid gap-3 p-4 transition-transform duration-500 group-hover/tilt:scale-[1.03]">
        <div className="flex items-center justify-between">
          <span className={cn("h-3 w-24 rounded-full", styles.bar)} />
          <span className={cn("h-6 w-16 rounded-lg", styles.chip)} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className="col-span-2 h-16 rounded-xl bg-white/[0.05]" />
          <span className={cn("h-16 rounded-xl", styles.chip)} />
        </div>
        {large && (
          <div className="grid grid-cols-4 gap-3">
            <span className="h-12 rounded-xl bg-white/[0.05]" />
            <span className="h-12 rounded-xl bg-white/[0.05]" />
            <span className={cn("h-12 rounded-xl", styles.chip)} />
            <span className="h-12 rounded-xl bg-white/[0.05]" />
          </div>
        )}
        <div className="flex gap-2">
          <span className="h-2.5 w-full rounded-full bg-white/[0.06]" />
          <span className="h-2.5 w-2/3 rounded-full bg-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}
