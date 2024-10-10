/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "montserrat"
      },
      colors: {
        "login-input": "#CCCCCC",
        "login-botao": "#202D11",
        "login-fundo": "#737D62",
        "login-perfil": "#B2B2B2",
        "fundo-base": "#DADADA",
        "fundo-nav": "#F0EDE5",
        
        "fundo-nav-cart": "#FFFFFF",
        "fundo-botao-nav-cart": "#A9B298",
        "hover-botao-nav-cart": "#6D7761",
        
        "fundo-card": "#F0EDE5",

        "hover-botao-card": "#F0EDE5",
        "fundo-lista-produtos": "#DADADA",

        "fundo-footer": "#000000",
        "texto-footer": "#FFFFFF",

        "cor-um": "#6d7761",
        "cor-dois": "#a9b298",
        "cor-tres": "#87b7a0",
        "cor-quatro": "#dadada",
        "cor-cinco": "#f0ede5",

      },

      padding: {
        "50p": "8%",
      },
    },
  },
  plugins: [],
};
