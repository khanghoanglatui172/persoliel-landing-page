/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1400px",
    },
    colors: {
      ...colors,
      "app-bg": "#ECE4D1",
      layer: "#FBF1D4",
      "layer-blue": "#385d7d",
      "app-blue": "#385D7D",
      "app-amber": "#9E513F",
      "app-dark": "#444",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      content: "#385D7D",
      whiteBg: "#FDF8E9",
      content: "#385D7D",
      whiteBg: "#FDF8E9",
      bgInput: "rgba(56, 93, 125, 0.04)",
      bgButton: "#9E513F",
      cardContent: "#444444",
      bgBottom: "#fbf1d440",
    },
    extend: {
      fontFamily: {
        brother1816: ["var(--font-brother1816)"],
        larken: ["var(--font-larken)"],
      },
      backgroundPosition: {
        "who-we-are-percentage": "5% 35%",
        "testimonials-percentage": "5% 50%",
        "discover-perq-soleil": "26rem -9rem",
        "left-center": "center left 5rem",
        "advisor-bg": "center 100%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      objectPosition: {
        "banner-video": "11.7rem",
      },
    },
  },
  extend: {
    backgroundPosition: {
      "who-we-are-percentage": "5% 35%",
      "testimonials-percentage": "5% 170%",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
};
