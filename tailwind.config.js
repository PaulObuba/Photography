/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'clr_light': '#fff',
        'clr_dark': '#303030',
        'clr_accent': '#16e0bd',
      },
    },
  },
  plugins: [],
}
