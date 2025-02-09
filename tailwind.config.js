/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/pages/*.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}