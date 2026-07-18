/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: "#050816",
        deep: "#0B1220",
        surface: "#111827",
        card: "#1E293B",
        primary: "#2563EB",
        accent: "#38BDF8",
        foreground: "#F8FAFC",
        muted: "#94A3B8",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.08)",
        subtle: "rgba(255,255,255,0.08)",
        glow: "rgba(59,130,246,0.25)",
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.25)",
        "glow-sm": "0 0 20px rgba(59,130,246,0.2)",
        lift: "0 24px 48px -12px rgba(2,6,23,0.6)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px -8px rgba(2,6,23,0.5)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.15), transparent)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 12px))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -32px) scale(1.05)" },
          "66%": { transform: "translate(-16px, 24px) scale(0.97)" },
        },
        "scroll-dot": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "40%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(16px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.4), 0 0 14px rgba(59,130,246,0.35)",
          },
          "50%": {
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.4), 0 0 30px rgba(59,130,246,0.65)",
          },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        blob: "blob 14s ease-in-out infinite",
        "blob-delayed": "blob 18s ease-in-out 4s infinite",
        "scroll-dot": "scroll-dot 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
