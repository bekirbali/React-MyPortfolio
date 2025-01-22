/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#60A5FA",
          dark: "#3B82F6",
        },
        background: {
          light: "#ffffff",
          dark: "#111827",
          alt: {
            light: "#F9FAFB",
            dark: "#1F2937",
          },
        },
        text: {
          light: "#1F2937",
          dark: "#F9FAFB",
        },
        card: {
          light: "#F3F4F6",
          dark: "#1F2937",
        },
        hover: {
          light: "#E5E7EB",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
