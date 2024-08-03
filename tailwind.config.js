/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/pages/**/*.{js,ts,jsx,tsx}",  "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      backgroundColor: {
        home: '#4242E0',
        quizContainer: '#C8D2DA',
        btnNext: '#D4E0E9',
      },
      colors: {
        quizLabel: '#4242E0',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      }
    }
  },
  plugins: [],
};
