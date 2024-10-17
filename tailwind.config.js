/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C2F96", // Original color
          50: "#F2F2FB", // Lightest variant
          100: "#E1E4FA",
          200: "#BFC3F4",
          300: "#9EA3EF",
          400: "#7C82E9",
          500: "#1C2F96", // Main color
          600: "#1A2A87",
          700: "#162373",
          800: "#121B5F",
          900: "#0F154F", // Darkest variant
        },
      },
    },
  },
  plugins: [],
};
