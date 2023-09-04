/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paragraph: "#233642",
        main: "#d80c77",
        darktextsub: "#b8c1ec",
      },
      backgroundImage: (theme) => ({
        "image-dark": "url('./src/assets/dark2.png')",
        "image-light": "url('./src/assets/dark2.png')",
      }),
    },
  },
  plugins: [require("preline/plugin")],
};
