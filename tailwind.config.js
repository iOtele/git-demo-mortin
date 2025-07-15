/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-white-color)",
        "secondary-color": "var(--secondary-yellow-color)",
        "black-color": "var(--black-color)",
        "faded-secondary": "var(--faded-secondary-color)",
      },
      // fontFamily: {
      //   Poppins: "var(--title-font-family)",
      //   Inter: "var(--texts-font-family)",
      // },
    },
  },
  plugins: [],
};
