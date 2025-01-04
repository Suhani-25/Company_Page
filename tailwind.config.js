/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      'gradient-border': 'gradient-border 3s linear infinite',
    },
    keyframes: {
      'gradient-border': {
        '0%': {
          'border-image-source': 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        },
        '50%': {
          'border-image-source': 'linear-gradient(180deg, #ff7e5f, #feb47b)',
        },
        '100%': {
          'border-image-source': 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        },
      },
    },
      },
     
    },

  plugins: [],
  
}
