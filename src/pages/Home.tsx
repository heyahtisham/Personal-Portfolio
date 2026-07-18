import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundFX } from "@/components/layout/BackgroundFX";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

// Below-the-fold sections are code-split — they load while the user
// is still reading the hero.
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills }))
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience }))
);
const Education = lazy(() =>
  import("@/components/sections/Education").then((m) => ({ default: m.Education }))
);
const Services = lazy(() =>
  import("@/components/sections/Services").then((m) => ({ default: m.Services }))
);
const Process = lazy(() =>
  import("@/components/sections/Process").then((m) => ({ default: m.Process }))
);
const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const TechStack = lazy(() =>
  import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack }))
);
const GitHubActivity = lazy(() =>
  import("@/components/sections/GitHubActivity").then((m) => ({
    default: m.GitHubActivity,
  }))
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
);

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <BackgroundFX />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Services />
          <Process />
          <Testimonials />
          <TechStack />
          <GitHubActivity />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
