/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        customRed: "#DB4437",
        customBlue: "#4285F4",
        customGreen: "#0F9D58",
        customYellow: "#F4B400"
        // Add more custom colors as needed
      }
    }
  },
  plugins: []
};
