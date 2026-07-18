import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EASE } from "@/animations/variants";
import { cn } from "@/lib/cn";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const { direction, scrolled } = useScrollDirection();
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const hidden = direction === "down" && !menuOpen;

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-subtle bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="container flex h-16 items-center justify-between md:h-[72px]"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-accent ring-1 ring-primary/30">
            <Terminal className="h-4 w-4" aria-hidden />
          </span>
          {SITE.name}
          <span className="hidden text-muted sm:inline">/ dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "relative block rounded-xl px-4 py-2 text-sm transition-colors duration-200",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-primary to-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-xl border border-subtle bg-surface/70 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-glow hover:shadow-glow-sm"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-subtle bg-surface/70 md:hidden"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-b border-subtle bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
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
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base",
                      active === item.id
                        ? "bg-surface text-foreground"
                        : "text-muted"
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 px-4">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl bg-primary px-4 py-3 text-center font-medium"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
