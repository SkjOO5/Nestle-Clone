/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nestle: {
          red: '#E31837',
          darkRed: '#B71430',
          gold: '#D4A853',
          blue: '#005CA9'
        },
        brand: {
          maggi: '#FFD700',
          nescafe: '#8B4513',
          kitkat: '#E53935',
          munch: '#FF9800', 
          milkybar: '#00BCD4',
          aplus: '#2196F3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
