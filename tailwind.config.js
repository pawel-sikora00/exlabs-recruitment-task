/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      rg: "1000px",
      lg: "1330px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
