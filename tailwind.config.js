/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translate(0px, 50px)' },
          '100%': { opacity: 1, transform: 'translate(0px, 0px)' }
        },
        fadeIn: {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1.0 }
        }
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-in-out',
        'fade-in': 'fadeIn .7s ease-in-out'
      },
      backgroundImage: {
        'space': "url('./assets/img/carbon-min.png')"
      }
    }
  },
  plugins: []
}
