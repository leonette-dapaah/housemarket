/** @type {import('tailwindcss').Config} */
export default {
  // remove unused styles in production
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#070058", 
        secondary: "#FFEA58", 
        customGray: "#EAECF0" 
      },
      /* hide scrollbar */
      '.no-scrollbar::-webkit-scrollbar': {
        display: 'none',
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      fontFamily: {
        "sans": ["Poppins", "Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        "faustina": ["Faustina", "serif"],
        "jost": ["Jost", "sans-serif"],
      }
    },
  },
  plugins: [],
}

