/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        red: {
          DEFAULT: '#FF0101',
        },
        black: {
          DEFAULT: '#020203',
        },
        gray: {
          DEFAULT: '#FBFBFB',
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwind'],
};
