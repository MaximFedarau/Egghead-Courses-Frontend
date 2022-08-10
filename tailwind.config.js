/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'dark-background': "#252B42",
      'light-background': "#23A6F0",
      'white': '#ffffff',
      'black': '#000000',
      'danger': '#e53e3e',
      'secondary': '#737373'
    },
    fontFamily: {
      'sans': ['Inter var', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    padding: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      'greetings': 'min(11%, 200px) 0'
    }
  },
  plugins: [],
}
