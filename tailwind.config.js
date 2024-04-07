/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Geist-Light": "Geist-Light",
        "Geist-Regular": "Geist-Regular",
        "Geist-Medium": "Geist-Medium",
        "Geist-SemiBold": "Geist-SemiBold",
        "Geist-Bold": "Geist-Bold",
        "Geist-Black": "Geist-Black",
        "Geist-UltraBlack": "Geist-UltraBlack",
        "Inter-Thin": "Inter-Thin",
        "Inter-Light": "Inter-Light",
        "Inter-Regular": "Inter-Regular",
        "Inter-Medium": "Inter-Medium",
        "Inter-SemiBold": "Inter-SemiBold",
        "Inter-Bold": "Inter-Bold",
        "Inter-Black": "Inter-Black",
        "Inter-UltraBlack": "Inter-UltraBlack",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
