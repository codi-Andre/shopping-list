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
        1: '#A28BF1',
        2: '#8061EB',
        3: '#633DE5',
        5: '#4519DE',
        7: '#320CB4',
      },
      
      green: {
        success: '#00FF1F',
        1: '#4EFF64',
      },

      orange: {
        1: '#FFD585',
        2: '#FFC555',
        3: '#FFB72B',
        5: '#FFA900',
      },
      
      purple: {
        1: '#C783F0',
        2: '#B357E9',
        3: '#A131E3',
        5: '#8E0CDB',
        7: '#7005B0',
      },

      red: {
        danger: '#FF0D00',
      },
      
      yellow: {
        warning: '#FFFD00',
        1: '#FFFE85',
        2: '#FFFE55',
        3: '#FFFE2B',
      }
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
