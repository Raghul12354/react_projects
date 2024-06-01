/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#f28ab2',
        grey: '#f1f5f8',
        blacky: '#102a42',
        blue: '#49a6e9',
        spl: '#b4345c',
        splGrey: '#eae6eb',
        gold: '#c59d5f',
        lightGrey: '#617d98',
        NewGray: '#324d67',
        // animation: {
        //   'bounce-slow': 'bounce 2s ease-in-out infinite',
        // }
      },
      translate: {
        'activeSlider': '0px',
        'nextSlider': '100%',
        'lastSlider': '-100%',
      },
      opacity: {
        'activeSlider': '1',
      }
    },
  },
  plugins: [],
}
