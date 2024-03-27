/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      colors: {
        dark_purple: "#6200ea",
        light_purple: "#7926ed",
        light_gray: "#ebebeb",
        dark_gray: "#6c757d",
        light_blue: "#0d6efd",
        light_pink: "#dc3545",
        dark_yellow: "#ffc107",
        dark_green: "#2e7d32",
        black_overlay: "#120d0d",
      },
    },
    plugins: [],
  },
};
