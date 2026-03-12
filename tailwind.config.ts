import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        primary: {
          pink: "#ff2c55",
          red: "#f4295c",
        },
        cyan: {
          neon: "#00f0ff",
        },
        purple: {
          neon: "#9b30ff",
        },
        pink: {
          accent: "#ff2c55",
        },
        gray: {
          text: "#aaaaaa",
          dark: "#1a1a1a",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "rgb-sweep": {
          "0%": { color: "#00f0ff" },
          "33%": { color: "#9b30ff" },
          "66%": { color: "#ff2d78" },
          "100%": { color: "#00f0ff" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff",
          },
          "50%": {
            boxShadow: "0 0 10px #00f0ff, 0 0 40px #00f0ff, 0 0 80px #00f0ff",
          },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "rgb-sweep": "rgb-sweep 3s linear infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
