import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PERSONAL } from "@/data/personal";
import { CONTACT, CONTACT_HEADING } from "@/data/contact";
import { SOCIAL_LINKS } from "@/data/socials";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  VIEWPORT,
} from "@/animations/variants";

const INPUT_CLASSES =
  "glass-chip w-full rounded-2xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-all duration-300 focus:border-glow focus:shadow-glow-sm focus:outline-none";

/** Abstract map illustration — dot grid with a glowing location pin. */
function MapIllustration() {
  return (
    <div
      aria-hidden
      className="relative h-36 overflow-hidden rounded-2xl border border-subtle bg-deep/70"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
      <div className="absolute left-1/3 top-0 h-full w-px bg-white/10" />
      <div className="absolute left-2/3 top-0 h-full w-px rotate-12 bg-white/[0.07]" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-primary/30" />
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-glow">
          <MapPin className="h-4 w-4 text-foreground" />
        </span>
      </span>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${CONTACT.form.subjectPrefix} ${form.name}`
    );
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" tinted>
      <SectionHeading icon={Send} {...CONTACT_HEADING} />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Form */}
        <motion.form
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          onSubmit={handleSubmit}
          className="card-base flex flex-col gap-5 p-6 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                {CONTACT.form.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                placeholder={CONTACT.form.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={INPUT_CLASSES}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                {CONTACT.form.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                placeholder={CONTACT.form.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={INPUT_CLASSES}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
              {CONTACT.form.messageLabel}
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              placeholder={CONTACT.form.messagePlaceholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${INPUT_CLASSES} flex-1 resize-none`}
            />
          </div>

          <div>
            <Button withArrow className="w-full sm:w-auto">
              {CONTACT.form.submitLabel}
            </Button>
          </div>
        </motion.form>

        {/* Info stack */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-5"
        >
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-5"
          >
            <motion.a
              variants={fadeUp}
              href={`mailto:${PERSONAL.email}`}
              className="card-base group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-glow hover:shadow-glow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-accent ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 leading-tight">
                <p className="text-sm font-semibold">{CONTACT.emailCard.title}</p>
                <p className="truncate text-sm text-muted">{CONTACT.emailCard.value}</p>
              </div>
            </motion.a>

            <motion.div variants={fadeUp} className="card-base p-5">
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-accent ring-1 ring-primary/25">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{CONTACT.locationCard.title}</p>
                  <p className="text-sm text-muted">{CONTACT.locationCard.subtitle}</p>
                </div>
              </div>
              <MapIllustration />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="card-base flex items-center gap-4 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/25">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">{CONTACT.availabilityCard.title}</p>
                <p className="text-sm text-muted">{CONTACT.availabilityCard.subtitle}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass-chip flex h-12 flex-1 items-center justify-center rounded-2xl text-muted transition-all duration-300 hover:-translate-y-1 hover:text-foreground hover:shadow-glow-sm"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
