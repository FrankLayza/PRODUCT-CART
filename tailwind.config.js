/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Text", "serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        rose: "hsl(14, 86%, 42%)",
        "rose-400": "hsl(7, 20%, 60%)",
        "rose-300": "hsl(14, 25%, 72%)",
        "rose-100": "hsl(13, 31%, 94%)",
      },
    },
  },
  plugins: [],
};
