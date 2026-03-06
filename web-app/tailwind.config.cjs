/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "**/*.html",
    "*.html",
    "src/**/*.{js,ts,jsx,tsx}",
    "*.js",
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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out forwards',
      }
    },
  },
  plugins: [],
};
