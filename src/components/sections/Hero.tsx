import { motion } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/data/hero";
import { SOCIAL_LINKS } from "@/data/socials";
import { blurReveal, fadeUp, staggerContainer } from "@/animations/variants";
import { useMouseParallax } from "@/hooks/useMousePosition";
import { CodeWindow } from "./hero/CodeWindow";

export function Hero() {
  const parallax = useMouseParallax(24);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28">
      {/* Hero-only accents on top of the global background */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 animate-blob rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-1/4 h-80 w-80 animate-blob-delayed rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {HERO.availabilityBadge}
              </span>
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
                <Briefcase className="h-3 w-3 text-accent" aria-hidden />
                {HERO.secondaryBadge}
              </span>
            </motion.div>

            <motion.h1
              variants={blurReveal}
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[68px]"
            >
              {HERO.headline}{" "}
              <span className="animate-gradient-x text-gradient">
                {HERO.headlineHighlight}
              </span>
              .
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-lg text-base text-muted md:text-lg">
              {HERO.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Button href={HERO.primaryCta.href} withArrow>
                {HERO.primaryCta.label}
              </Button>
              <Button href={HERO.secondaryCta.href} variant="secondary">
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-2 flex items-center gap-5">
              <span className="h-px w-10 bg-white/10" aria-hidden />
              <div className="flex gap-2">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: parallax.x, y: parallax.y }}
            className="relative hidden lg:block"
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-foreground md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.24em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-subtle p-1.5">
          <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-accent" />
        </span>
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </motion.a>
    </section>
  );
}
