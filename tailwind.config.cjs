/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", ...defaultTheme.fontFamily.sans], //title
        // serif: ["Lato", ...defaultTheme.fontFamily.serif], //body
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans], //logo
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
