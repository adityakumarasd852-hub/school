import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0B5D3B",
        leaf: "#3FAE5A",
        cream: "#F8F8F3",
        gold: "#D9B44A"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(11, 93, 59, 0.15)",
        glow: "0 0 30px rgba(63, 174, 90, 0.35)"
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
        wave: "wave 8s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(217, 180, 74, 0.2)" },
          "50%": { boxShadow: "0 0 26px rgba(217, 180, 74, 0.65)" }
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;

