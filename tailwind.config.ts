import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla Variable", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        "source-sans-pro": ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: "#869977",
        black: "#111",
        "light-black": "#1F1F1F",
        "dark-gray": "#7D7D7D",
        "medium-gray": "C7C7C7",
        gray: "#DDD",
        "light-gray": "#E6E6E6",
        white: "#FAFAFA",
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: "1" },
          '50%': { opacity: '0' },
        },
        wave: {
          '0%': { backgroundPosition: "100% 50%" },
          '100%': { opacity: '0 50%' },
        }
      },
      animation: {
        'fade': 'fade 1.5s ease-in-out infinite',
        "wave": 'wave 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
