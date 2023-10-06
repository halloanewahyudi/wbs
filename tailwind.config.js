/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          '50': '#f9fbea',
          '100': '#f0f6d1',
          '200': '#e1eea8',
          '300': '#cbe175',
          '400': '#afce3e',
          '500': '#96b62c',
          '600': '#75911f',
          '700': '#596f1c',
          '800': '#48591b',
          '900': '#3d4c1b',
          '950': '#1f290a',
        },
        'kedua':'#31352B',
        'ketiga':'#40c0e0',
        'keempat':'#2f2235'
      }
    },
    container:{
      center:true,
      padding:'2rem'
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
}

