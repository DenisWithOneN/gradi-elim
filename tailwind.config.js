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
        'lgCustom': '28rem',
        'xlCustom': '35rem',
      },
      dropShadow: {
        'custom': '0px 4px 2px rgba(0, 0, 0, 0.25)',
        'aboutCard': '13px 15px rgba(69, 86, 99, 1)',
        'offerCard': '13px 15px rgba(177, 195, 129, 1)',
        'scheduleCardGreen': '0px 0px 5px rgba(177, 195, 129, 1)',
        'scheduleCardBlue': '0px 0px 5px rgba(155, 184, 205, 1)',
        'scheduleCardYellow': '0px 0px 5px rgba(238, 199, 89, 1)',
      },
      fontSize: {
        mobileHeading: ['2.5rem', '2.5rem']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
