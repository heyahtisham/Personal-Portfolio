import { useEffect, useState } from "react";

/**
 * Tracks which section currently sits under the upper third of the
 * viewport — drives the navbar's active capsule.
 *
 * Elements are looked up on every scroll frame (cheap: a handful of
 * getElementById calls) so lazy-mounted sections are picked up as soon
 * as they appear, unlike an IntersectionObserver bound at mount time.
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const probe = window.innerHeight * 0.35;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        compute();
        ticking = false;
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return active;
}
