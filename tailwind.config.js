/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          400: "hsl(176, 50%, 47%)",
          700: "hsl(176, 72%, 28%)",
        },
        gray: {
          500: "hsl(0, 0%, 48%)",
        },
      },
    },
  },
  plugins: [],
};
