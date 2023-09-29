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
      }
    }
  },
  plugins: []
}
export default config
