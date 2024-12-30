/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1'
        },
        secondary: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          600: '#4b5563',
          900: '#111827'
        }
      },
      spacing: {
        section: '6rem',
        component: '2rem',
        element: '1.5rem',
        text: '1rem'
      }
    },
  },
  plugins: [],
}