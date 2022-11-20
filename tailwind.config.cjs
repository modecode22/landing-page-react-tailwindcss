/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        greeny: "#22c55e3f",
        skyy:"#0ea4e94f"
      }
    },
  },
  plugins: [],
}
