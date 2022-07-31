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

    },
    fontFamily: {
      'sans': ['Inter var', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}
