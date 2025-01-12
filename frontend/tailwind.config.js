/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#191918',
        white: '#EEEEEC',
        accent: '#FFC259',
        'card-stroke': '#4A4A4A',
        'card-bg': '#141414',
        'dark-white': '#B5B3AD',
      },
    },
  },
  plugins: [],
};
