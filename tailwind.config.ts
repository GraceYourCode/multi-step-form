import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alabaster: "hsl(231, 100%, 99%)",
        magnolia: "hsl(217, 100%, 97%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        red: "hsl(354, 84%, 57%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "marine-blue": "hsl(213, 96%, 18%)"
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
