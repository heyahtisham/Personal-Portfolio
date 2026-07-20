import { useRef, useState } from "react";
import { useInView } from "framer-motion";
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
  /** Live site URL — embedded as a scaled-down website preview. */
  preview?: string;
  /** Screenshot fallback, shown while the live preview loads. */
  image?: string;
  alt?: string;
}

/**
 * Project thumbnail in a browser frame.
 * Priority: live site embed (`preview`) → screenshot (`image`) →
 * abstract tinted skeleton. The iframe renders the real website at
 * desktop width, scaled to a third, and only mounts once the card
 * scrolls near the viewport so page load stays fast.
 */
export function ProjectVisual({ tone, large, preview, image, alt }: ProjectVisualProps) {
  const styles = TONE_STYLES[tone];
  const [imageFailed, setImageFailed] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const nearViewport = useInView(frameRef, { once: true, margin: "300px" });

  const showPreview = Boolean(preview);
  const showImage = !showPreview && Boolean(image) && !imageFailed;
  const isMedia = showPreview || showImage;

  return (
    <div
      ref={frameRef}
      aria-hidden={!isMedia || undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-subtle bg-deep/80",
        // Fixed heights only for the skeleton fallback — media keeps
        // a real aspect ratio so the whole page stays visible.
        !isMedia && (large ? "h-56 md:h-72" : "h-40 sm:h-44")
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent", styles.glow)} />

      {/* Browser chrome */}
      <div className="relative z-10 flex items-center gap-1.5 border-b border-subtle bg-deep/70 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        {showPreview ? (
          <span className="ml-2 max-w-[65%] truncate rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[10px] leading-4 text-muted">
            {preview!.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        ) : (
          <span className="ml-2 h-3.5 w-28 rounded-full bg-white/[0.06]" />
        )}
      </div>

      {showPreview ? (
        /* Live website embed — desktop viewport scaled to 1/3 */
        <div className="relative aspect-[16/10] overflow-hidden">
          {image && (
            <img
              src={image}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
          {nearViewport && (
            <iframe
              src={preview}
              title={alt ?? "Live website preview"}
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none relative h-[300%] w-[300%] origin-top-left scale-[0.3334] border-0 bg-deep"
            />
          )}
        </div>
      ) : showImage ? (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={alt ?? ""}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="block h-auto w-full transition-transform duration-500 group-hover/tilt:scale-[1.03]"
          />
        </div>
      ) : (
        /* Abstract skeleton fallback */
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
      )}
    </div>
  );
}
