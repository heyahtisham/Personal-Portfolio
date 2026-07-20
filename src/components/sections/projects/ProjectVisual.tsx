import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  MousePointerClick,
  RotateCw,
} from "lucide-react";
import type { ProjectTone } from "@/types";
import { cn } from "@/lib/cn";

/** Virtual browser viewport the live sites render at (kept ~16:10). */
const VIRTUAL_W_DESKTOP = 1440;
const VIRTUAL_W_MOBILE = 1180; // slightly narrower → larger, more legible text
const ASPECT = 1.6; // 16:10

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
  preview?: string;
  image?: string;
  alt?: string;
}

/** True while the viewport is at least Tailwind's `md` breakpoint. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}

/** macOS Safari-style top bar — full controls at every screen size. */
function MacChrome({ url }: { url?: string }) {
  const domain = url?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative z-10 grid grid-cols-[auto_1fr_auto] items-center gap-2 border-b border-subtle bg-deep/70 px-3 py-2 sm:gap-3 sm:px-3.5">
      {/* Traffic lights + nav */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] shadow-[inset_0_0_1px_rgba(0,0,0,0.3)] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] shadow-[inset_0_0_1px_rgba(0,0,0,0.3)] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] shadow-[inset_0_0_1px_rgba(0,0,0,0.3)] sm:h-3 sm:w-3" />
        </div>
        <div className="flex items-center gap-1 text-muted/50">
          <ChevronLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
        </div>
      </div>

      {/* Centered URL pill */}
      <div className="flex min-w-0 justify-center">
        {domain ? (
          <span className="flex max-w-full min-w-0 items-center gap-1.5 rounded-lg bg-white/[0.07] px-2.5 py-1 text-[10px] leading-4 text-muted sm:px-3">
            <Lock className="h-2.5 w-2.5 shrink-0 text-emerald-400/80" aria-hidden />
            <span className="truncate">{domain}</span>
          </span>
        ) : (
          <span className="h-5 w-24 rounded-lg bg-white/[0.06] sm:w-32" />
        )}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2 text-muted/50">
        <RotateCw className="h-3 w-3" aria-hidden />
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="Open site in a new tab"
            className="text-muted/60 transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * Project thumbnail in a macOS-style browser frame.
 *
 * The live site renders at a fixed virtual viewport, scaled to fit the
 * card width exactly — a true miniature, never zoomed or cropped.
 *
 * Desktop: click to interact; control returns to the page when the
 * cursor leaves, so page scroll is never hijacked.
 *
 * Mobile: the live preview stays non-interactive (so a touch never gets
 * trapped inside the embed and page scroll stays perfectly smooth) and
 * the whole frame becomes a tap-to-open link to the real site.
 */
export function ProjectVisual({ tone, large, preview, image, alt }: ProjectVisualProps) {
  const styles = TONE_STYLES[tone];
  const [imageFailed, setImageFailed] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [scale, setScale] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const nearViewport = useInView(frameRef, { once: true, margin: "300px" });
  const isDesktop = useIsDesktop();

  const virtualW = isDesktop ? VIRTUAL_W_DESKTOP : VIRTUAL_W_MOBILE;
  const virtualH = Math.round(virtualW / ASPECT);

  const showLive = Boolean(preview);
  const showImage = !showLive && Boolean(image) && !imageFailed;
  const isMedia = showLive || showImage;

  // Keep the iframe scale locked to the card width (exact fit, no zoom).
  useEffect(() => {
    if (!showLive) return;
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / virtualW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [showLive, virtualW]);

  return (
    <div
      ref={frameRef}
      aria-hidden={!isMedia || undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-subtle bg-deep/80",
        !isMedia && (large ? "h-56 md:h-72" : "h-40 sm:h-44")
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent", styles.glow)} />

      <MacChrome url={preview} />

      {showLive ? (
        /* Live miniature — fixed virtual viewport, scaled to fit exactly */
        <div
          ref={viewportRef}
          className="relative aspect-[16/10] overflow-hidden"
          onMouseLeave={() => setInteractive(false)}
        >
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
          {nearViewport && scale > 0 && (
            <iframe
              src={preview}
              title={alt ?? "Live website preview"}
              loading="lazy"
              width={virtualW}
              height={virtualH}
              style={{ transform: `scale(${scale})` }}
              className={cn(
                "relative origin-top-left border-0 bg-deep",
                // Interactive only on desktop after a click; never on
                // touch, where it would trap page scrolling.
                isDesktop && interactive ? "pointer-events-auto" : "pointer-events-none"
              )}
            />
          )}

          {/* Desktop: click-to-interact shield */}
          {isDesktop && !interactive && (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              aria-label="Interact with the live website preview"
              className="group/shield absolute inset-0 z-20 flex cursor-pointer items-end justify-center bg-transparent pb-4"
            >
              <span className="glass-chip pointer-events-none flex translate-y-2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground opacity-0 transition-all duration-300 group-hover/shield:translate-y-0 group-hover/shield:opacity-100">
                <MousePointerClick className="h-3.5 w-3.5 text-accent" aria-hidden />
                Click to browse this site
              </span>
            </button>
          )}

          {/* Mobile: whole frame is a tap-to-open link (no scroll trap) */}
          {!isDesktop && preview && (
            <a
              href={preview}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${alt ?? "site"} in a new tab`}
              className="absolute inset-0 z-20 flex items-end justify-center pb-3"
            >
              <span className="glass-chip flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-foreground shadow-glow-sm">
                <ExternalLink className="h-3 w-3 text-accent" aria-hidden />
                Tap to open live site
              </span>
            </a>
          )}
        </div>
      ) : showImage ? (
        /* Screenshot at its natural ratio — full page visible */
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
