module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', ...],
  theme: {
    extend: {},
  }, 
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}