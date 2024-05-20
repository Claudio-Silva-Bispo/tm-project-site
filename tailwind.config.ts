import { Cinzel } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // Definição dos breakpoints
      screens: {
        'ss': '375px',
        'sm': '579px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xx': '1440px',
        
      },

      fontFamily: {
        orelega: ['FonteOrelega', 'sans-serif'],
        sen: ['FonteSen', 'sans-serif'],
        manrope: ['FonteManrope', 'sans-serif'],
      },

      backgroundColor: {
        primeira: "#2484e4",
        segunda: "#f9ac72",
        terceira: "#134784",
        quarta: "#5d71a5",
        quinta:"#99a9cc",
        sexta: "E9ECEF",
        setima:"#DEE2E6",
        oitavo: "#CED4DA",
        nono: "#ADB5BD",
        cinza:"#F8F9FA",
        cinzadois:"#E9ECEF",
        cinzatres:"#DEE2E6",
        cinzaquatro:"#CED4DA",
        cinzacinco:"#ADB5BD",
        cinzaseis:"#6C757D",
        cinzasete:"#495057",
        cinzaoito:"#343A40",
        cinzanove:"#212529",

        
      },
    },
  },
  plugins: [],
};
export default config;
