/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 10px 2px rgba(6, 182, 212, 0.2)',
          },
          '50%': {
            opacity: '0.7',
            boxShadow: '0 0 20px 6px rgba(6, 182, 212, 0.4)',
          },
        },
      },
      backgroundImage: {
        'grid-slate-700': 'linear-gradient(to right, rgb(51, 65, 85) 1px, transparent 1px), linear-gradient(to bottom, rgb(51, 65, 85) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      cursor: {
        'none': 'none',
      },
    },
  },
  plugins: [],
};