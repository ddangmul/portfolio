/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [],
};
