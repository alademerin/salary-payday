/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FC8900",
        primaryBlue: "#1C468A",
        grey: "#A4A4A4",
        grey2: "#919EAB",
        primaryLight: "#A7BBDC",
        primaryLighterAlt: "#F2F5FA",
        secondaryLighterAlt: "#FFFAF5",
        textColorLight: "#637381",
        subtextGrey: '#595959',
        borderGrey:'#9999'
      },
    },
  },
  plugins: [],
};
