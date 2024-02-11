/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        secondary: "#E27D60",
        cokolate: "#E8A87C",
        brown: "#C38D9E",
        pragreen: "#41B3A3",
      },
      fontFamily: {
        protest: ["Protest Strike", "sans-serif"],
      },
    },
  },
  plugins: [],
};
