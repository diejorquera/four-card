/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        grey: {
          400: 'hsl(212, 6%, 44%)',
          500: 'hsl(234, 12%, 34%)',
        },
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
