const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
