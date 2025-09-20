/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#F7F6F4',
        textPrimary: '#2D2D2D',
        textSecondary: '#6E6E6E',
        card: '#FFFFFF',
        border: '#E3E3E3',
        accent: '#F2C98C', // warm beige highlight
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        subtle: '0 2px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};