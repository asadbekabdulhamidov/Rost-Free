/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        textColors: "#121212",
        borderColor: "#C6C6C6",
        hoverIcon: "#FF0026",
      },
    },
  },
  plugins: [],
};
