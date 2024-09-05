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
        "esn-cyan": "#00AEEF",
        "esn-magenta": "#EC008C",
        "esn-green": "#7AC143",
        "esn-orange": "#F47B20",
        "esn-dark-blue": "#2E3192",
      },
    },
  },
  plugins: [],
};
export default config;
