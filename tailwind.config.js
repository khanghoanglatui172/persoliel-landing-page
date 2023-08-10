/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            ...colors,
            layer: '#FBF1D4',
            'layer-blue': '#385d7d',
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
                brother1816: ['var(--font-brother1816)'],
                larken: ['var(--font-larken)'],
            },
            backgroundPosition: {
                'who-we-are-percentage': '5% 35%',
                'testimonials-percentage': '5% 170%',
                'discover-perq-soleil': '26rem -9rem',
                'left-center': 'center left 5rem'
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
