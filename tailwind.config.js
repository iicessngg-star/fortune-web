/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50:  '#e8ecf5',
          100: '#c5cfe7',
          200: '#9aaed6',
          300: '#6e8dc5',
          400: '#4a73b8',
          500: '#2558aa',
          600: '#1a4a9a',
          700: '#0f3a86',
          800: '#072a70',
          900: '#021a56',
          950: '#00102e',
        },
        mystic: {
          50:  '#f3e8ff',
          100: '#e4c6fe',
          200: '#d09efd',
          300: '#b975f8',
          400: '#a254f1',
          500: '#8b35e0',
          600: '#7128bf',
          700: '#591e9e',
          800: '#40157d',
          900: '#2a0d5c',
          950: '#15073a',
        },
        gold: {
          50:  '#fffbe8',
          100: '#fff4c5',
          200: '#ffe98a',
          300: '#ffd84e',
          400: '#ffc825',
          500: '#f0a800',
          600: '#cc8500',
          700: '#a36200',
          800: '#7a4800',
          900: '#4f2e00',
          950: '#2a1600',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sarabun: ['Sarabun', 'sans-serif'],
        display: ['Cinzel Decorative', 'serif'],
      },
      backgroundImage: {
        'cosmic-gradient':
          'radial-gradient(ellipse at top, #0f0733 0%, #030118 40%, #000008 100%)',
        'gold-shimmer':
          'linear-gradient(135deg, #ffd84e 0%, #f0a800 30%, #ffd84e 60%, #cc8500 100%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        'mystic-radial':
          'radial-gradient(circle at 50% 50%, #2a0d5c 0%, #0f0733 50%, #000008 100%)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(174, 109, 255, 0.25) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-glow':  '0 0 20px rgba(240, 168, 0, 0.4), 0 0 60px rgba(240, 168, 0, 0.15)',
        'gold-glow-lg': '0 0 40px rgba(240, 168, 0, 0.5), 0 0 100px rgba(240, 168, 0, 0.2)',
        'mystic-glow': '0 0 20px rgba(174, 109, 255, 0.4), 0 0 60px rgba(174, 109, 255, 0.15)',
        'glass':      '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg':   '0 16px 48px 0 rgba(31, 38, 135, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(174, 109, 255, 0.1)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 10s ease-in-out infinite',
        'twinkle':      'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle 5s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'shimmer':      'shimmer 3s linear infinite',
        'spin-slow':    'spin 20s linear infinite',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
        'slide-up':     'slideUp 0.5s ease-out forwards',
        'fade-in':      'fadeIn 0.8s ease-out forwards',
        'card-flip':    'cardFlip 0.6s ease-in-out forwards',
        'ritual-fill':  'ritualFill 3s ease-in-out forwards',
        'typing':       'typing 1.5s steps(40, end)',
        'bounce-gentle':'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.3', transform: 'scale(0.7)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(240, 168, 0, 0.4)' },
          '50%':      { boxShadow: '0 0 50px rgba(240, 168, 0, 0.8), 0 0 80px rgba(240, 168, 0, 0.3)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%':      { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        cardFlip: {
          '0%':   { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        ritualFill: {
          '0%':   { strokeDashoffset: '283' },
          '100%': { strokeDashoffset: '0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
