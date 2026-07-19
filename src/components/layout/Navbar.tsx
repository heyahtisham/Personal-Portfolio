import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { PERSONAL } from "@/data/personal";
import { NAV_ITEMS, NAVBAR } from "@/data/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EASE } from "@/animations/variants";
import { cn } from "@/lib/cn";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/**
 * Sticky Liquid Glass navbar — a floating frosted pill, always visible.
 * The active capsule slides between section links as you scroll.
 */
export function Navbar() {
  const { scrolled } = useScrollDirection();
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4">
      <div className="container">
        <nav
          aria-label="Primary"
          className={cn(
            "glass flex h-14 items-center justify-between rounded-full pl-4 pr-2 transition-shadow duration-300 sm:pl-5 sm:pr-2.5 md:h-16 md:pl-6 md:pr-3",
            scrolled && "shadow-glow-sm"
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
          >
            <span className="glass-chip flex h-8 w-8 items-center justify-center rounded-full text-accent">
              <Terminal className="h-4 w-4" aria-hidden />
            </span>
            {PERSONAL.firstName}
            <span className="hidden text-muted lg:inline">{NAVBAR.logoSuffix}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-sm transition-colors duration-200 lg:px-4",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-capsule"
                        transition={{ type: "spring", stiffness: 350, damping: 32 }}
                        className="glass-chip absolute inset-0 rounded-full"
                        aria-hidden
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Animated CTA */}
          <motion.a
            href={NAVBAR.ctaHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="glass-primary glass-sheen group relative hidden items-center gap-1.5 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold animate-pulse-glow md:inline-flex"
          >
            {NAVBAR.ctaLabel}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden
            />
          </motion.a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="glass-chip flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-5 bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-foreground"
            />
          </button>
        </nav>

        {/* Mobile menu — frosted sheet below the pill */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="glass mt-2 overflow-hidden rounded-3xl md:hidden"
            >
              <ul className="flex flex-col gap-1 p-3">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base transition-colors",
                        active === item.id
                          ? "glass-chip text-foreground"
                          : "text-muted"
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-1">
                  <a
                    href={NAVBAR.ctaHref}
                    onClick={() => setMenuOpen(false)}
                    className="glass-primary block rounded-2xl px-4 py-3 text-center font-medium"
                  >
                    {NAVBAR.ctaLabel}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
