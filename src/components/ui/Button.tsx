import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-foreground shadow-glow-sm hover:shadow-glow hover:bg-primary/90",
  secondary:
    "border border-subtle bg-surface/80 text-foreground hover:border-glow hover:bg-card/80",
  ghost: "text-muted hover:text-foreground",
};

/**
 * Magnetic button — gently follows the cursor within its bounds,
 * springs back on leave. Arrow nudges right on hover.
 */
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  withArrow = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 16 });
  const y = useSpring(my, { stiffness: 200, damping: 16 });

  const onMouseMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    my.set((e.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const inner = (
    <span className="inline-flex items-center gap-2">
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </span>
  );

  const base = cn(
    "group inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    VARIANTS[variant],
    className
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={base} aria-label={ariaLabel} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type="button" className={base} aria-label={ariaLabel} onClick={onClick}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
