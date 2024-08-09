/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010217",
        secondary: "#F97316",
        tertiary: "#03a9f4",
      },
      screens: {
        lg: { max: "2023px" },
        // => @media (max-width: 1023px) { ... }

        sm: { max: "1000px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
