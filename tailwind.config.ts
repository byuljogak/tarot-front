import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "stars-img": "url('/stars.webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "flower-island": "var(--font-flower-island)",
        "kopub-batang": "var(--font-kopub-batang)",
      },
      keyframes: {
        "card-slide": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-40%)" },
        },
      },
      animation: {
        "card-slide": "card-slide 10s linear infinite",
      },
      boxShadow: {
        'card-mini': '2px 12px 20px 0px #E3FFF840',
        'card': '0px 0px 15px 0px #E3FFF8B2',
      },
    },
  },
  // scroll bar hide plugin
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-stroke": {
          textShadow: "0 0 0.4px #FFFFFF, 0 0 0.4px #FFFFFF, 0 0 0.4px #FFFFFF",
        },
        ".full-size": {
          width: "100%",
          height: "100%",
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE */
          "-ms-overflow-style": "none",
          /* WebKit */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
} satisfies Config;
