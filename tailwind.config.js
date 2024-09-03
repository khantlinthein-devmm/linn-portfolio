/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        redhat : ["Red Het Display", "sans-serif"],
        Montserrat : ["Montserrat", "sans-serif"],
        amsterdam : ['New Amsterdam', "sans-serif"],
        padauk : ['Padauk']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
