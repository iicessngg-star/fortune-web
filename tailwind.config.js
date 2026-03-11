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
          900: '#14121c',
          800: '#1e1b29',
          700: '#2a2438',
          600: '#483d63',
          500: '#6d5a99',
          400: '#9b84d4',
        },
        gold: {
          DEFAULT: '#fbbf24',
          500: '#fbbf24',
          400: '#fcd34d',
        }
      },
      fontFamily: {
        sarabun: ['Sarabun', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
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
          '0%': { boxShadow: '0 0 15px rgba(155, 132, 212, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(155, 132, 212, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
