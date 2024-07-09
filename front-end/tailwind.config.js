/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#8084f4' ,
      'grey': '#d9d9d9',
      'light': '#e2e8f0',
      'dark': '0f1728',
    },
    extend: {
      spacing: {
        '25': '25px',
      },
    },
  },
  plugins: [],
}

