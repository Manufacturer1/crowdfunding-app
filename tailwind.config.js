/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          moderateCyan:'hsl(176, 50%, 47%)',
          darkCyan: 'hsl(176, 72%, 28%)'
        },
        neutral:{
          darkGray:'hsl(0, 0%, 48%)'
        }
      },
      boxShadow: {
        equal: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px -4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px -2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}

