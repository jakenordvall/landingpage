/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue50: "#eef2ff",
        customBlue100: "#e0e7ff",
        customBlue200: "#c7d2fe",
        customBlue300: "#a5b4fc",
        customBlue400: "#818df8",
        customBlue500: "#6367f1",
        customBlue600: "#4e46e5",
        customBlue700: "#3e34c2",
        customBlue800: "#3630a3",
        customBlue900: "#312e81",
        customBlue950: "#1e1b4b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
