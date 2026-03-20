/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F9F8F6',
        greige: '#D9D4CF',
        charcoal: '#4A4A4A',
        'pink-blush': '#F7E8E8',
        'pink-soft': '#E8B4B8',
        'pink-rose': '#D4869A',
        'gold': '#B8986A',
        'gold-light': '#D4B896',
        'gold-dark': '#8B6914',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
}
