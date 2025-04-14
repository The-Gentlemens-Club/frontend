
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
          elevated: '#2D2D2D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          disabled: '#666666',
        },
        game: {
          win: '#4CAF50',
          lose: '#F44336',
          draw: '#FFC107',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
