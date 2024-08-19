/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '90': '90deg',
        '-90': '-90deg',
      },
    },
  },
  plugins: [],
}