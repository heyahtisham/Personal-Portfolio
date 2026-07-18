import { useEffect, useState } from "react";

/**
 * Tracks scroll direction for the hide-on-scroll navbar.
 * Returns "up" | "down" plus whether the page is scrolled at all.
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        if (Math.abs(y - lastY) > threshold) {
          setDirection(y > lastY && y > 120 ? "down" : "up");
          lastY = y;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrolled };
}
