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
      backgroundImage: {
        "img-header": "url('../assets/bg-header.svg')",
      },
      colors: {
        black: {
          night: "#151515",
          eerieBlack: "#202021",
          jet: "#303031",
        },

        blue: {
          info: "#23b5d3",
        },

        white: {
          babyPowder: "#fdfffc",
          whiteSmoke: "#eef0ed",
          platinum: "#dee0dd",
          silver: "#bec0be",
        },

        green: {
          success: "#00FF1F",
          malachite: "#0fe66c",
          malachiteDark: "#00a648",
        },

        red: {
          danger: "#FF0D00",
        },
      },
    },
  },
  plugins: [],
}
