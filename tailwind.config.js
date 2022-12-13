/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors:{
      primary: '#009ee3',
      secondary: '#f2f0ea',
      black: '#2d3748',
      orange: '#f6ad55',
      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [],
}
