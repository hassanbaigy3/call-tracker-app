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
      offWhite: "FAF9F6",
    },
  },
  plugins: [],
};
