/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: [
          "VictorMonoVariable",
          "Victor Mono",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      backgroundImage: {
        hero: "url('../images/banner.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
