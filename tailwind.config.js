/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          info: '#23b5d3',
        },

        green: {
          success: '#00FF1F',
        },

        brown: {
          blackBean: '#3c1518',
          bloodRed: '#69140e',
          neutral: '#a44200',
          bronze: '#d58936',
          Vanilla: '#f2f3ae',
        },

        red: {
          danger: '#FF0D00',
        },
      },
    },
  },
  plugins: [],
}
