/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: "hsl(0, 100%, 66%)",
      white: "hsl(0, 0%, 100%)",
      'violet': {
        "light-grayish": "hsl(270, 3%, 87%)",
        "dark-grayish": "hsl(279, 6%, 55%)",
        blueish: "hsl(249, 99%, 64%)",
        DEFAULT: "hsl(278, 94%, 30%)",
        dark: "hsl(278, 68%, 11%)",
      }
    },
    extend: {
      fontFamily: {
        Space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
