/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
  ],
  theme: {
      extend: {
        backgroundImage:{
          'MangasHome': "url('./assets/images/MangasHome.png')"
        }
      }
  },
  variants: {},
  plugins: []
}
