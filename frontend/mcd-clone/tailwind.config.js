/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, -20px)' },
          '50%': { transform: 'translate(-30px, 40px)' },
          '75%': { transform: 'translate(30px, 60px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
