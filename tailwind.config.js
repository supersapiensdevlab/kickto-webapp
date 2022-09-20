/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kickto-dark": "#151515",
        "kickto-primary": "#E2512B",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/hero.JPG')",
      },
    },
  },
  plugins: [require("daisyui")],
};
