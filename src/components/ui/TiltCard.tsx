import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees */
  intensity?: number;
}

/**
 * Card with pointer-tracked 3D tilt and a cursor-following border glow.
 * Tilt is intentionally subtle — furniture, not a fairground ride.
 */
export function TiltCard({ children, className, intensity = 4 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(py, [0, 1], [intensity, -intensity]),
    { stiffness: 180, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-intensity, intensity]),
    { stiffness: 180, damping: 20 }
  );

  const onMouseMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    ref.current?.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group/tilt relative overflow-hidden card-base transition-shadow duration-300 hover:shadow-lift",
        className
      )}
    >
      {/* Cursor-following radial glow on the border layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(59,130,246,0.12), transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  );
}
