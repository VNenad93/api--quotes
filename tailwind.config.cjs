/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dakrBlue: 'hsl(218, 23%, 16%)',
      darkGray: 'hsl(217, 19%, 24%)',
      grayBlue: 'hsl(217, 19%, 38%)',
      lightCyan: 'hsl(193, 38%, 86%)',
      neonGreen: 'hsl(150, 100%, 66%)'
    },
    fontFamily: {
      manrope: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap'
    },
    boxShadow: {
      neon: '1px 1px 70px -5px hsl(150, 100%, 66%)'
    }
  },
  plugins: [],
}
