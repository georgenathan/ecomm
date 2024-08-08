/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#404868",
        secondary: "#f42c37",
        brandYellow: "#4A274f",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      // colors2: {
      //   'waikawa-gray': {
      //     '50': '#f4f7fa',
      //     '100': '#e6ebf3',
      //     '200': '#d3dcea',
      //     '300': '#b5c5db',
      //     '400': '#91a7c9',
      //     '500': '#768cbb',
      //     '600': '#6476ac',
      //     '700': '#5a68a0',
      //     '800': '#4c5581',
      //     '900': '#404868',
      //     '950': '#2a2e41',
      // },
      
      //},
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
   // require('@tailwindcss/aspect-ratio'),
  ],
}