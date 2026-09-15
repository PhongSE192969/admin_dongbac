/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8f2",
          100: "#d7eee0",
          600: "#177245",
          700: "#135f3d",
          800: "#104c33",
          900: "#0b3425",
        },
        ink: "#17211d",
      },
      boxShadow: {
        panel: "0 8px 24px rgba(15, 61, 46, 0.08)",
      },
    },
  },
  plugins: [],
};
