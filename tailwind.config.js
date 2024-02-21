  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
       colors: {
        'yellow': '#EEC759',
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }