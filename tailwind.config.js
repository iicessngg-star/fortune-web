/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          900: '#1a0b2e',
          800: '#2d1b4e',
          700: '#432874',
          600: '#5b3a9d',
          500: '#754dc9',
          400: '#916cf6',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(145, 108, 246, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(145, 108, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
