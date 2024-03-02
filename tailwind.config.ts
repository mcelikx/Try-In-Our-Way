import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: {
          light: "#63b3ed",
          DEFAULT: "#4299e1",
          dark: "#3182ce",
        },
        // Secondary palette
        secondary: {
          light: "#fbd38d",
          DEFAULT: "#f6ad55",
          dark: "#ed8936",
        },
        // Tertiary and additional palettes can be defined similarly
        // Neutral palette
        neutral: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        // UI colors
        success: {
          light: "#9ae6b4",
          DEFAULT: "#48bb78",
          dark: "#38a169",
        },
        info: {
          light: "#bee3f8",
          DEFAULT: "#4299e1",
          dark: "#3182ce",
        },
        warning: {
          light: "#fbd38d",
          DEFAULT: "#f6ad55",
          dark: "#ed8936",
        },
        danger: {
          light: "#feb2b2",
          DEFAULT: "#fc8181",
          dark: "#f56565",
        },
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
