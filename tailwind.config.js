/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      colors: {
        "vue-green": "#42b983",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
