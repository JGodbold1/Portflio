/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      //code below is for fonts, look @ 5:30 forrest Knight video
      fontFamily:{iter: ['inter','serif'],},
      fontSize:{
        'mega': '10rem'
      },
    },
  },
  plugins: [],
}

