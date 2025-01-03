/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xl': '2176px',
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',

      'md': '768px',
      'sm': '640px',
      'xs': '475px',
      'xss': '375px',
      'base': '0px',

    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

