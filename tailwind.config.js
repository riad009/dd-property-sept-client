/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "#e03c31",
        dark: "#212529",
        dark2: "#505050",
      },
    },
  },
  plugins: [],
};
