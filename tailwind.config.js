/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient(138.11deg, #fef452 0%, #942f70 121.92%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
