/** @type {import('tailwindcss').Config} */

import rippleui from "rippleui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#FEBC0AB2",
          500: "#FDCA09",
          600: "#FEC00A",
        },
        black: "#101010",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [rippleui],
}