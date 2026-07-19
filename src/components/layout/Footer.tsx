import { ArrowUp, Terminal } from "lucide-react";
import { PERSONAL } from "@/data/personal";
import { NAV_ITEMS } from "@/data/navigation";
import { FOOTER } from "@/data/footer";
import { SOCIAL_LINKS } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-subtle bg-deep/30 backdrop-blur-xl">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
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
            <p className="mt-4 text-sm text-muted">
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              {FOOTER.navigateTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
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
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-subtle pt-8 sm:flex-row">
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
