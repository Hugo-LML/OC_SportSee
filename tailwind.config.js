/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        yellow: {
          DEFAULT: '#FFD15B',
        },
        black: {
          DEFAULT: '#1B1B1B',
        },
        gray: {
          DEFAULT: '#7A7A7A',
          light: '#EDEDED',
        },
      }
    },
  },
  plugins: [
    "prettier-plugin-tailwind",
  ]
}
