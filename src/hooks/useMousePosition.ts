import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Smoothed normalized mouse position (-0.5 to 0.5 from viewport center)
 * as spring motion values — used for subtle mouse parallax.
 */
export function useMouseParallax(strength = 1) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 50, damping: 20 });
  const y = useSpring(rawY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * strength);
      rawY.set((e.clientY / window.innerHeight - 0.5) * strength);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY, strength]);

  return { x, y };
}
