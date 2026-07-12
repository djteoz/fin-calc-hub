import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eefbff",
          100: "#d6f4ff",
          200: "#b5ecff",
          300: "#83e0ff",
          400: "#48cbff",
          500: "#1eaff5",
          600: "#0892db",
          700: "#0874b1",
          800: "#0c6191",
          900: "#105078",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        ink: {
          950: "#060b14",
          900: "#0c1220",
          800: "#151d2e",
          700: "#1f2937",
          600: "#374151",
        },
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.12)",
        "card-hover":
          "0 0 0 1px rgba(30,175,245,0.2), 0 12px 40px rgba(0,0,0,0.2)",
        glow: "0 0 60px rgba(30,175,245,0.15)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(30,175,245,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(16,185,129,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(99,102,241,0.1) 0px, transparent 50%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
