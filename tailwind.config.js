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
        "shard-back": "url('/src/Assets/background/shard_bg.svg')  ",
      },
      dropShadow: {
        blue: " 0  14px 14px rgba(70, 202, 238, 0.25)",
        orange: " 0  14px 14px #E2512B",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        bouncey: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      animation: {
        wiggle: "bouncey 4s ease-in-out infinite",
        wiggle_reverse: "wiggle 4s ease-in-out infinite reverse",
        ping_slow: "fade 3s ease-in-out infinite reverse",
        ping_medium: "fade 2s ease-in-out infinite ",
        ping_fast: "fade 1s ease-in-out infinite reverse",
        bounce_slow: "bouncey 4s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [require("daisyui")],
};
