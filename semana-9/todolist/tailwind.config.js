/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //indica cuales son los archivos que puede usar tailwind, todas carpetas
    //o archivos js y jsx puedan usar tailwind
    "./src/**/*.{js,jsx}" , "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

