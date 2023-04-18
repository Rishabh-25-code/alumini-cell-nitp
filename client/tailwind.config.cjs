

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tw-elements/dist/plugin.cjs"),
    require('flowbite/plugin')],
    darkMode: "class"
}

