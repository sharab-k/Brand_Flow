/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.html",
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "donau-blue": "#2563EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
