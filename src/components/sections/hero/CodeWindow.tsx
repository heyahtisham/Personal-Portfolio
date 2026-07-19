import { motion } from "framer-motion";
import { Braces, GitBranch, Zap } from "lucide-react";

interface CodeToken {
  text: string;
  className: string;
}

/** One line of syntax-highlighted "code" rendered from tokens. */
const CODE_LINES: CodeToken[][] = [
  [
    { text: "const", className: "text-accent" },
    { text: " developer", className: "text-foreground" },
    { text: " = {", className: "text-muted" },
  ],
  [
    { text: "  name", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'Ahtisham Shoukat'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  role", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'Frontend Developer'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  stack", className: "text-sky-300" },
    { text: ": [", className: "text-muted" },
    { text: "'React'", className: "text-emerald-300" },
    { text: ", ", className: "text-muted" },
    { text: "'TypeScript'", className: "text-emerald-300" },
    { text: "],", className: "text-muted" },
  ],
  [
    { text: "  passion", className: "text-sky-300" },
    { text: ": ", className: "text-muted" },
    { text: "'pixel-perfect UIs'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [
    { text: "  ships", className: "text-sky-300" },
    { text: ": () ", className: "text-muted" },
    { text: "=>", className: "text-accent" },
    { text: " 'on time'", className: "text-emerald-300" },
    { text: ",", className: "text-muted" },
  ],
  [{ text: "};", className: "text-muted" }],
  [{ text: "", className: "" }],
  [
    { text: "await", className: "text-accent" },
    { text: " developer.", className: "text-foreground" },
    { text: "build", className: "text-sky-300" },
    { text: "(", className: "text-muted" },
    { text: "yourIdea", className: "text-foreground" },
    { text: ");", className: "text-muted" },
  ],
];

/**
 * Hero illustration — a stylized editor window with staggered
 * line reveal and floating tech badges. No image assets needed.
 */
export function CodeWindow() {
  return (
    <div className="relative">
      {/* Glow behind the window */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[32px] bg-primary/10 blur-3xl"
      />

      <div className="card-base relative overflow-hidden rounded-3xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-subtle bg-deep/40 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]/80" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]/80" />
          <span className="ml-3 flex items-center gap-1.5 text-xs text-muted">
            <Braces className="h-3 w-3" aria-hidden />
            developer.ts
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-muted">
            <GitBranch className="h-3 w-3" aria-hidden />
            main
          </span>
        </div>

        {/* Code body */}
        <div className="bg-deep/30 p-6 font-mono text-[13px] leading-7">
          {CODE_LINES.map((tokens, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
              className="flex"
            >
              <span className="mr-5 w-4 select-none text-right text-muted/40">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {tokens.map((token, j) => (
                  <span key={j} className={token.className}>
                    {token.text}
                  </span>
                ))}
                {i === CODE_LINES.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.9, repeatType: "reverse" }}
                    className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-accent"
                    aria-hidden
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute -left-8 top-16 animate-float"
      >
        <div className="card-base flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Zap className="h-4 w-4" aria-hidden />
          </span>
          <div className="leading-tight">
            <p className="text-xs font-semibold">Lighthouse</p>
            <p className="text-xs text-emerald-400">98 / 100</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute -bottom-6 -right-4 animate-float-delayed"
      >
        <div className="card-base flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <p className="text-xs font-medium text-muted">
            Deploy successful — <span className="text-foreground">2s ago</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
