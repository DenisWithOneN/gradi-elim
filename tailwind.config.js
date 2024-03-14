// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'yellow': "#EEC759",
        'green': "#B1C381",
        'darkblue': "#455663",
        'lightblue': "#9BB8CD",
        'white': "#f8fafc",
      },
      fontFamily: {
        heading: ['"Baloo 2"', 'sans-serif'],
        body: ['Itim']
      },
      height:{
        'normal': '35rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};