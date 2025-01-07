import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "mobile-hero-img": "url('/images/mobile-hero-img.webp')",
        "tablet-hero-img": "url('/images/tablet-hero-img.webp')",
        "big-tablet-hero-img":
          "url('/images/big-tablet-hero-img.webp')",
        "hero-img": "url('/images/hero-img.webp')",
      },
      rotate: {
        "90.139": "90.139deg",
      },
    },
  },
  plugins: [],
} satisfies Config;
