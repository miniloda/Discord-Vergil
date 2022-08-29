const { colors } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '.65rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors:{
        primary: "#202225",
        secondary: "#5865f2",
        gray: colors.trueGray,
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        }
      },
      spacing: {
        "13": "3.2rem",
        "120": "18rem",
        "18": "4.5rem",
        "90": "360px",
      },
      backgroundImage: {
        'vergil' : "url('/vergil.jpg')",
      }
    },
  },
  plugins: [],
}
