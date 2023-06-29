/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0.01, transform: 'translate(0px, 25px)' },
          '100%': { opacity: 1, transform: 'translate(0px, 0px)' }
        },
        fadeDown: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0.01 }
        },
        fadeIn: {
          '0%': { opacity: 0.1 },
          '100%': { opacity: 1 }
        },
        cardUp: {
          '100%': { opacity: 0.1, transform: 'translate(-50%, -50%)' },
          '0%': { opacity: 1, transform: 'translate(0, 0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-in-out',
        'fade-down': 'fadeDown .4s ease-in-out',
        'fade-in': 'fadeIn .7s ease-in-out',
        'card-up': 'cardUp .5s ease-in-out'
      },
      backgroundImage: {
        space: "url('./assets/carbon-min.png')"
      }
    }
  },
  plugins: []
}
