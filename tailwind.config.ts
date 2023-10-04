import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      container: {
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        }
      },
      screens: {
        xs: "480px"
      },
      colors: {
        text: "var(--color-text)",
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)"
      },
      boxShadow: {
        "btn-p": "0 4px rgba(33, 253, 176, 1)",
        "btn-s": "0 4px rgba(1, 75, 49, 1)",
        "btn-pa": "0 2px rgba(33, 253, 176, 1)",
        "btn-sa": "0 2px rgba(1, 75, 49, 1)"
      }
    }
  },
  plugins: []
}
export default config
