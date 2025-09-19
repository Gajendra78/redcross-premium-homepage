module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        redcross: {
          light: "#f87171",
          DEFAULT: "#dc2626",
          dark: "#7f1d1d"
        }
      }
    }
  },
  plugins: []
}