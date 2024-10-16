/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'radiate': 'radiate 5s ease-in-out infinite',  // Custom animation for radiating gradient
      },
      keyframes: {
        radiate: {
          '0%, 100%': {
            backgroundSize: '0% 0%',
            opacity: '1',
          },
          '50%': {
            backgroundSize: '200% 200%',  // Expanding the gradient
            opacity: '0.8',
          },
        },
      },
      backgroundImage: {
        'radiating-gradient': 'radial-gradient(circle, rgba(255, 255, 255) 0%, rgba(97, 97, 97) 100%)',
      },
    },
  },
  plugins: [],
}
