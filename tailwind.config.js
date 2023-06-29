/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          night: "#151515",
          eerieBlack: "#202021",
        },

        blue: {
          info: "#23b5d3",
        },

        gray: {
          lavenderLight: "#eeeeff",
          lavenderDark: "#e2e2f2",
        },

        green: {
          success: "#00FF1F",
          malachite: "#0fe66c",
        },

        red: {
          danger: "#FF0D00",
        },
      },
    },
  },
  plugins: [],
}
