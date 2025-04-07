/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          purple: '#7546E8',
          'purple-100': '#9747FF',
          'purple-900': '#2D1C7F',
          white: '#fff',
          lilas: '#B0A9E5',
          black: '#1E1E1E'
        }
      }
    },
    plugins: [],
  };
  