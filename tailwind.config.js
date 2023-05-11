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
          1: '#5C56C0',
          2: '#3D36B3',
          3: '#1F17A5',
          5: '#171183',
          7: '#0F0A66',
        },

        green: {
          success: '#00FF1F',
          1: '#4EFF64',
        },

        orange: {
          1: '#FFD95C',
          2: '#FFCE30',
          3: '#ECB500',
          5: '#BC9000',
          7: '#937000',
        },

        purple: {
          1: '#814DBC',
          2: '#692CAE',
          3: '#520DA0',
          5: '#40097F',
          7: '#310563',
        },

        red: {
          danger: '#FF0D00',
        },

        yellow: {
          warning: '#FFFD00',
          1: '#FFF35C',
          2: '#FFF030',
          3: '#ECDB00',
          5: '#BCAE00',
          7: '#938800',
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
};
