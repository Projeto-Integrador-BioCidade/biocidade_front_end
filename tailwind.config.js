/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
      },
      colors: {
        "fundo-nav": "#F0EDE5",
        "fundo-botao": "#A9B298",
        "hover-botao": "#6D7761",

        "fundo-footer": "#000000",
        "texto-footer": "#FFFFFF",

        "bio-City-footer-navbar-color": "#426212",
        "bio-City-main-green": "#84CC16",
        "bio-City-text-900": "#3a5314",
        "bio-City-input-color": "#BEF264",
        "bio-City-green-100": "#D9F99D",
        "bio-City-green": "#B9DC81",
        "bio-City-light-green": "#B6CF8D",
        "bio-City-cream": "#e8ceb3",
        "verde-um": "#172B23",
        "verde-dois": "#436045",
        "verde-tres": "#7A9B7F",
        "verde-quatro": "#CFE0BC",
        "verde-cinco": "#EDF0E0",
      },

      padding: {
        "50p": "8%",
      },
    },
  },
  plugins: [],
};
