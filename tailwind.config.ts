import type { Config } from "tailwindcss";

const config: Config = {
  plugins: [require('@tailwindcss/typography')],
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
        "esn-cyan": "#00AEEF",
        "esn-magenta": "#EC008C",
        "esn-green": "#7AC143",
        "esn-orange": "#F47B20",
        "esn-dark-blue": "#2E3192",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        kelson_sans: ["Kelson Sans", "sans-serif"],
      },
    },
  },
};
export default config;
