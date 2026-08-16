/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spider: {
          red: '#E23636',
          blue: '#2B3784',
          gold: '#EAB308',
          silver: '#94A3B8',
          dark: '#08080E',
          card: '#0F0F1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'web-pulse': 'webPulse 8s ease-in-out infinite',
        'hint-pulse': 'hintPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        webPulse: {
          '0%, 100%': { opacity: '0.08', transform: 'scale(1)' },
          '50%': { opacity: '0.16', transform: 'scale(1.02)' },
        },
        hintPulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}