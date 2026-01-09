/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sh-offwhite': '#F5F4F1',
        'sh-stone': '#D6D4CF',
        'sh-gray-medium': '#8E8C88',
        'sh-black-soft': '#1E1E1C',
        'sh-sand': '#CFC6B8',
        'sh-taupe': '#6F6A63',
        'sh-accent': '#7E857C',
      },
      fontFamily: {
        'display': ['NT Valentino', 'serif'], 
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}