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
