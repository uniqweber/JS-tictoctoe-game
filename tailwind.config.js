/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
        // Add more custom font families as needed
      },
      colors: {
        dark: "#0d1b2a",
        "dark-accent": "#1b263b",
        light: "#e0e1dd",
        "light-accent": "#415a77",
      },
    },
  },
  plugins: [],
};
