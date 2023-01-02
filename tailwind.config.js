/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["AvenirLTStd"],
      bold: ["AvenirLTStd-Bold"],
      roman: ["AvenirLTStd-Roman"],
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#4F46F8",
      cream: "FAF9F6",
      gray: "#E5E4E2",
      teal: "#1DC997",
      red: "#C91D3E",
      black: "#000000",
    },
  },
  plugins: [],
};
