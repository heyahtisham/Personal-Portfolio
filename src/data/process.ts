import {
  Search,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";
import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Research",
    description:
      "I start by understanding the problem, the users and the business — not the tech. Short discovery calls, honest questions, a written brief we both sign off on.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes first, pixels second. You see clickable prototypes early, so we iterate on ideas before a single line of code exists.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Typed, tested, reviewed code shipped in small increments. You get a preview link that updates with every commit — no black boxes.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Cross-browser, cross-device, keyboard-only and screen-reader passes. Performance budgets enforced before anything ships.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Zero-downtime launches with monitoring, analytics and a rollback plan. Then a handover doc your team can actually read.",
    icon: Rocket,
  },
];
