/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          info: '#50F0FF',
          1: '#2F478D',
          2: '#1A3176',
          3: '#0B2161',
          5: '#051648',
          7: '#020C2B',
        },

        green: {
          success: '#00FF1F',
          1: '#28A03D',
          2: '#108625',
          3: '#006D13',
          5: '#00510E',
          7: '#003109',
        },

        brown: {
          1: '#D17F34',
          2: '#AF5F15',
          3: '#8F4500',
          5: '#6A3300',
          7: '#401F00',
        },

        red: {
          danger: '#FF0D00',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
