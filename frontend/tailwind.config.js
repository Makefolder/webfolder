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
        'card-bg': '#14141490',
        'dark-white': '#B5B3AD',
      },
    },
  },
  plugins: [],
};
