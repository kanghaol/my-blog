/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./blog/**/*.{js,ts,jsx,tsx}",   
    "./anime/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}",
    "./about/**/*.{js,ts,jsx,tsx}",
    "./tool/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
