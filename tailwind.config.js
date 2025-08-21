/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      colors: {
        // Soft pastels
        mint: {
          50: '#f0fdf5',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        blush: {
          50: '#fef7f7',
          100: '#feeaea',
          200: '#fdd8d8',
          300: '#fbb5b5',
          400: '#f78a8a',
          500: '#ef4444',
          600: '#dc2626',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        sand: {
          50: '#fefaf8',
          100: '#fef3e8',
          200: '#fde4c7',
          300: '#fbc997',
          400: '#f7a766',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Ethiopian-inspired accents
        ochre: {
          50: '#fefcf3',
          100: '#fef5d3',
          200: '#fce7a6',
          300: '#f9d072',
          400: '#f5b342',
          500: '#f1975a',
          600: '#d97706',
        },
        terra: {
          50: '#fef6f3',
          100: '#feeae3',
          200: '#fcd4c7',
          300: '#f9b69e',
          400: '#f4936d',
          500: '#ea580c',
          600: '#c2410c',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
