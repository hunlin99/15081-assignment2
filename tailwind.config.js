/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // For HTML files in the root directory
    "./src/**/*.html", // For HTML files in the `src` folder
    "./src/**/*.{js,ts,jsx,tsx}", // For JavaScript/TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};