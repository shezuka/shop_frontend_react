import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f6f7f9",
          100: "#eceff2",
          200: "#d4dbe3",
          300: "#aebccb",
          400: "#8297ae",
          500: "#637b94",
          600: "#4e637b",
          700: "#405064",
          800: "#384454",
          900: "#323c48",
          950: "#222831",
        },
        secondary: {
          50: "#ebfffc",
          100: "#cdfffb",
          200: "#a1fffa",
          300: "#60fff9",
          400: "#18f8f4",
          500: "#00dede",
          600: "#00adb5",
          700: "#088c96",
          800: "#10707a",
          900: "#125d67",
          950: "#053e47",
        },
      },
    },
  },
  plugins: [],
};
export default config;
