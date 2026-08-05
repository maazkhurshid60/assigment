/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-flip"),
    require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-contact-forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-opentype'),
    require("tw-elements/plugin.cjs"),
    require('@formkit/tailwindcss'),
    require("tailwindcss-radix")(),
    require('tailwindcss-fluid-type')
  ],
}
