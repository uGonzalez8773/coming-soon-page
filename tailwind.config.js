/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["'Josefin Sans'"],
      },
      colors: {
        primaryColor: "#CE9898",
        secondColor: "#423A3A",
        thirdColor: "#F96464",
      },
    },
  },
  plugins: [],
}

