import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F5F1",
        surface: "#F3EEE8",
        ink: "#2E2A26",
        accent: "#8A6A4A",
        wood: "#A77C52",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
