/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "sans": "'Poppins', Arial, sans-serif"
    },
    extend: {
      colors: {
        'steam': {
          100: '#c7d5e0',
          200: '#66c0f4',
          300: '#2a475e',
          400: '#1b2838',
          500: '#171a21'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
