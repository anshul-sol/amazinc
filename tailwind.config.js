/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FF9900",
        customGray: "#131921",
      },
      height: {
        img: "600px",
        product: "400px",
      },
      plugins: [],
    },
  },
};
