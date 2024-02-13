/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      "bg-one": "#1E1E1E",
      "bg-two": "#141414",
      "text": "#f5f5f5",
      "squareHero": "#C4FEF3",
      "html": "#FED9C4",
      "css": "#C4FEF0",
      "javascript": "#FEF8C4",
      "card-bg": "#292929",
      "card-outline": "#3D3C3C",
      "card-formOne": "#1E1E1E",
      "card-formTwo": "#141414",
      "hours": "#8F8F8F",
      "hability": "#A3A3A3"
    }
  },
  plugins: [ require('flowbite/plugin'),],
}