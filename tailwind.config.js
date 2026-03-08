/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8C7A6B',
        'background-light': '#F9F7F2',
        'background-dark': '#1A1918',
        accent: '#E5DACE',
        sand: '#F5F2ED',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'serif'],
        sans: ["'Inter'", 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};
