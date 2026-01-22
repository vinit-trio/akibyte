const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js,php}"],
  theme: {
    container: {
      center: true,
      padding: 'clamp(1rem, 0.825rem + 0.875vw, 1.875rem)',
      screens: {
        DEFAULT: '100%',
      },
    },
    screens: {
      'xsm': '450px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      '3xl': '1600px',
    },
    fontFamily: {
      'onest': ['Onest', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#E0E0E0',
        'secondary': '#1D1D1D',
        'yellow': '#009BDF',
        'black': '#0A0A0A',
        'blue': '#009BDF',
        'light-blue': '#009BDF75',
        'grey': '#CACACA',
      },
      spacing: {
        '100': "clamp(4.375rem, 4rem + 1.875vw, 6.25rem)",
      },
      fontSize: {
        'h1': ["clamp(3.375rem, 3.05rem + 1.625vw, 5rem)", { lineHeight: "clamp(3.375rem, 3.05rem + 1.625vw, 5rem)", }],
        'h2': ["clamp(2.5rem, 2.2875rem + 1.0625vw, 3.5625rem)", { lineHeight: "clamp(3rem, 2.745rem + 1.275vw, 4.275rem);" }],
        'h3': ["clamp(1.8125rem, 1.7rem + 0.5625vw, 2.375rem)", { lineHeight: "clamp(2.25rem, 2.125rem + 0.625vw, 2.875rem)" }],
        'h4': ["clamp(1.625rem, 1.575rem + 0.25vw, 1.875rem)", { lineHeight: "clamp(1.9375rem, 1.875rem + 0.3125vw, 2.25rem)" }],
        'h5': ["clamp(1.4375rem, 1.4125rem + 0.125vw, 1.5625rem)", { lineHeight: "clamp(2rem, 1.9625rem + 0.1875vw, 2.1875rem)" }],
        'h6': ["clamp(0.9375rem, 0.8375rem + 0.5vw, 1.4375rem)", { lineHeight: "clamp(1.5rem, 1.3375rem + 0.8125vw, 2.3125rem)" }],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transition-slow': {
          transitionProperty: 'all',
          transitionDuration: '300ms',
          transitionTimingFunction: 'linear',
        },
      });
    }),
  ],
}