/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#D3FBD8',
        branddark: '#3f2613',
        brandlight: '#fde047',
        primary: '#21b0fe',
      },
      fontFamily: {
        sans: ['EB Garamond', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
};
