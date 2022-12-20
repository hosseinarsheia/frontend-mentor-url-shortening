/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          myCyan: 'hsl(180, 66%, 49%)',
          darkViolet: 'hsl(257, 27%, 26%)',
        },
        secondry: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        lightGray: '#F0F1F6',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },

      fontFamily: {
        my_font: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [],
};
