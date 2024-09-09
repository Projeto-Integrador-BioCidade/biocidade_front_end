/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
      },
      colors: {
        "bio-City-footer-navbar-color": "#1b2a03",
        "bio-City-main-green": "#84CC16",
        "bio-City-text-900": "#3a5314",
        "bio-City-input-color": "#BEF264",
        "bio-City-green-100": "#D9F99D",
        "bio-City-green": "#B9DC81",
        "bio-City-light-green": "#B6CF8D",
        "bio-City-cream": "#e8ceb3",
      },

      padding: {
        "50p": "8%",
      },
    },
  },
  plugins: [],
};
