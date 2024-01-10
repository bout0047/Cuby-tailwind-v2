/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      somePaleGreen: '#FBFFF1',
      backgroundBlue: '#B4C5E4',
      darkestBlue: '#090C9B',
      salmonLikeColor: '#ffe1d9',
      Navbarblue: '#99a8c2',
      royalBlue: '#0A2463',
      cream: 'fffdd0',
      'black': '#000000',
      'white': '#ffffff',
      'blue': '#090C9B',
    },
    shadow: {
    'shadow-2xl': 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);',
    },
    extend: {},
  },
  plugins: [],
}

