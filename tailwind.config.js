/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kickto-darker": "#111111",
        "kickto-dark": "#151515",
        "kickto-primary": "#E2512B",
        "kickto-secondary": "#FA803C",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/hero.JPG')",
        "shard-back": "url('/src/Assets/background/shard_bg.svg')",
        "shard-back2": "url('/src/Assets/background/bg_shard.svg')",
        "abstract-back": "url('/src/Assets/background/abstract_pattern.svg')",
        "blur-bg": "url('/src/Assets/background/blur-bg.svg')",
      },
      dropShadow: {
        blue: " 0  14px 14px rgba(70, 202, 238, 0.6)",
        orange: " 0  14px 14px #E2512B",
        orangelight: " 0  7px 7px #E2512B",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        fade: {
          "0%,100%": { opacity: "0" },
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
        wiggle_fast: "wiggle 1s ease-in-out infinite",

        wiggle_reverse: "wiggle 4s ease-in-out infinite reverse",
        ping_slow: "fade 3s ease-in-out infinite reverse",
        ping_medium: "fade 2s ease-in-out infinite ",
        ping_fast: "fade 1s ease-in-out infinite reverse",
        bounce_slow: "bouncey 4s ease-in-out infinite reverse",
        ping_ultraSlow: "fade 2s ease-in-out infinite reverse",
        ping_ultraSlower: "fade 3s ease-in-out infinite reverse",
        ping_ultraSlowest: "fade 4s ease-in-out infinite reverse",
        ping_ultraSloweest: "fade 5s ease-in-out infinite reverse",
        ping_ultraSloweesta: "fade 6s ease-in-out infinite reverse",
        ping_ultraSloweestb: "fade 7s ease-in-out infinite reverse",
        ping_ultraSloweestc: "fade 8s ease-in-out infinite reverse",
        ping_ultraSloweestd: "fade 9s ease-in-out infinite reverse",
        ping_ultraSloweeste: "fade 10s ease-in-out infinite reverse",
        ping_ultraSloweestf: "fade 11s ease-in-out infinite reverse",
        ping_ultraSloweestg: "fade 12s ease-in-out infinite reverse",
        ping_ultraSloweesth: "fade 13s ease-in-out infinite reverse",
        ping_ultraSloweesti: "fade 14s ease-in-out infinite reverse",
        ping_ultraSloweestj: "fade 15s ease-in-out infinite reverse",
        ping_ultraSloweestk: "fade 16s ease-in-out infinite reverse",
        ping_ultraSloweestl: "fade 17s ease-in-out infinite reverse",
        ping_ultraSloweestm: "fade 18s ease-in-out infinite reverse",
        ping_ultraSloweestn: "fade 19s ease-in-out infinite reverse",
        ping_ultraSloweesto: "fade 20s ease-in-out infinite reverse",
        ping_ultraSloweestp: "fade 21s ease-in-out infinite reverse",
        ping_ultraSloweestq: "fade 22s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [require("daisyui")],
};
