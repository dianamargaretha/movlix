/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    'primary-300': '#9C92F8',
    'white': '#fff',
    'grey-50': '#EBEEF5',
    'grey-100': '#C3C8D4',
    'grey-300': '#8E95A9',
    'grey-400': '#767E94',
    'grey-600': '#475069',
    'grey-700': '#323B54',
    'black-10': 'rgba(0, 0, 0, 0.1)'
  }
}

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: colors
    }
  },
  plugins: [],
}
