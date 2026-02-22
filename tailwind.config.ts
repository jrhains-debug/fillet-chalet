import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rainbow trout inspired palette
        // Silver-gray base tones
        silver: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#0f0f11",
        },
        // Cool slate blues
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Iridescent coral/pink accents (trout's lateral stripe)
        coral: {
          50: "#fff5f5",
          100: "#ffe0e4",
          200: "#ffc7cf",
          300: "#ffa3b1",
          400: "#ff7086",
          500: "#f94565",
          600: "#e6234d",
          700: "#c21841",
          800: "#a1173b",
          900: "#891938",
          950: "#4c0818",
        },
        // Olive greens (back coloring)
        olive: {
          50: "#f6f7f4",
          100: "#e3e7dc",
          200: "#c8d0bc",
          300: "#a6b394",
          400: "#859672",
          500: "#687a56",
          600: "#516043",
          700: "#404b36",
          800: "#353e2e",
          900: "#2e3529",
          950: "#181c14",
        },
        // Subtle orange highlights (like trout spots)
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
      backgroundImage: {
        // Subtle speckled texture like trout spots
        speckle: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
