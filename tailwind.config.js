/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bio-City-main-green": "#84CC16",
        "bio-City-green": "#B9DC81",
        "bio-City-light-green": "#B6CF8D",
        "bio-City-grey": "#ADB0A8",
      },
    },
  },
  plugins: [],
};
