import { motion } from "framer-motion";
import { ArrowUp, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PERSONAL } from "@/data/personal";
import { NAV_ITEMS } from "@/data/navigation";
import { FOOTER } from "@/data/footer";
import { SOCIAL_LINKS } from "@/data/socials";
import { fadeUp, VIEWPORT } from "@/animations/variants";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-subtle bg-deep/40">
      <div className="container py-14 md:py-16">
        {/* CTA spotlight */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="glass glass-sheen relative overflow-hidden rounded-4xl border-glow bg-gradient-to-br from-primary/[0.1] via-transparent to-accent/[0.07] p-8 md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {FOOTER.cta.title}
              </h2>
              <p className="mt-2 text-sm text-muted md:text-base">
                {FOOTER.cta.subtitle}
              </p>
            </div>
            <Button href={FOOTER.cta.buttonHref} withArrow>
              {FOOTER.cta.buttonLabel}
            </Button>
          </div>
        </motion.div>

        {/* Columns */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
            >
              <span className="glass-chip flex h-9 w-9 items-center justify-center rounded-full text-accent">
                <Terminal className="h-[18px] w-[18px]" aria-hidden />
              </span>
              {PERSONAL.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {FOOTER.blurb}{" "}
              <span className="text-foreground">{FOOTER.availabilityNote}</span>.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass-chip flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground hover:shadow-glow-sm"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {FOOTER.navigateTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="link-underline text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {FOOTER.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="link-underline transition-colors hover:text-foreground"
                >
                  {PERSONAL.email}
                </a>
              </li>
              <li>{PERSONAL.location}</li>
              <li>{PERSONAL.timezone}</li>
              <li className="flex items-center gap-2 pt-1 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {PERSONAL.availability}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-subtle pt-7 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {PERSONAL.name}. {FOOTER.copyrightNote}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="glass-chip group flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted transition-all duration-300 hover:text-foreground hover:shadow-glow-sm"
          >
            {FOOTER.backToTopLabel}
            <ArrowUp
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
