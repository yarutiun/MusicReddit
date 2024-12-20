/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#1DA1F2',
        deepPurple: '#6C63FF',
        brightOrange: '#FF5722',
        offWhite: '#F5F5F5',
        darkGray: '#333333',
        lightGray: '#666666',
      },
    },
  },
  plugins: [],
}