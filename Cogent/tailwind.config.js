/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2196f3', // Light blue
          DEFAULT: '#1976d2', // Main blue
          dark: '#0d47a1', // Dark blue
        },
        secondary: {
          light: '#f9fafb',
          DEFAULT: '#f3f4f6',
          dark: '#1f2937',
        },
        dark: {
          light: '#374151',
          DEFAULT: '#1f2937',
          dark: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to right bottom, rgba(25, 118, 210, 0.8), rgba(13, 71, 161, 0.8))",
      },
    },
  },
  plugins: [],
}