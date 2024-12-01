import { screens } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './layouts/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  screens: {
    xs: '480px',
    ...screens,
  },
  extend: {
    typography: {
      DEFAULT: {
        css: {
          color: '#333',
          a: {
            color: '#3b82f6',
            '&:hover': {
              color: '#60a5fa',
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      tiny: '0.66rem',
      bigger: '0.80rem',
    },
  },
}
export const plugins = [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
