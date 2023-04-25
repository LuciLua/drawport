/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    maxWidth: {
      'max-w-content': '1400px',
    },
    height: {
      'heightMenu': '100px'
    }
  },
  plugins: [],
  darkMode: 'class'
}

