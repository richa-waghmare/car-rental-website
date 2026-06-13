/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F7A7A',
          dark: '#006060',
        },
        surface: '#F8FAF9',
        tertiary: '#824625',
      },
      fontFamily: {
        heading: ['Poppins', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
