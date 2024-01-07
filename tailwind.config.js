/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        NSYellow:'#f5a900',
        NSBlue:'#33D8FF'
      }
    },
  },
  plugins: [],
}