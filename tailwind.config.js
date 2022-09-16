/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'smooth-appearance': {
          // using colors instead of opacity, because opacity causes bugs in Safari with react-icons
          '0%': { backgroundColor: 'transparent', color: 'transparent' },
          '100%': { backgroundColor: 'default', color: 'default' }, // * LITM - default is a color of the element (e.g. white), which is set by developer, or initial (transparent)
        },
        'smooth-scaling': {
          '0%': { transform: 'scale(0)', display: 'block'}, // ! display: block is for Safari
          '100%': { transform: 'scale(1)' },
        }
      }
    },
    colors: {
      'transparent': 'transparent',
      'dark-background': "#252B42",
      'light-background': "#23A6F0",
      'white': '#ffffff',
      'black': '#000000',
      'light-gray': '#e6e6e6',
      'lightest-gray': '#f9f9f9',
      'danger': '#e53e3e',
      'success': '#40BB15',
      'alert': '#E77C40',
      'secondary': '#737373',
      'panel-star': '#FFCE31',
      'panel-price': '#BDBDBD', 
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
      'greetings': 'min(11%, 200px)'
    },
    margin: {
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
      'greetings': 'min(11%, 200px)'
    },
    animation: {
      'smooth-appearance': 'smooth-appearance 0.5s ease-in-out',
      'smooth-scaling': 'smooth-scaling 0.3s forwards', // ! forwards is for Safari
      'spin': 'spin 1s linear infinite',
      'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'bounce': 'bounce 1s infinite',
      'fade-in': 'fade-in 1s ease-in-out',
      'fade-out': 'fade-out 1s ease-in-out',
      'fade-in-out': 'fade-in-out 1s ease-in-out',
      'slide-in': 'slide-in 1s ease-in-out',
      'slide-out': 'slide-out 1s ease-in-out',
      'none': 'none',
    }
  },
  plugins: [],
}
