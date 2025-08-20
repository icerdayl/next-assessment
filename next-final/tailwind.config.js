// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

      },
      animation: {
        'slide-in-left': 'slideInFromLeft 1s ease-out forwards', // 
      },
    },
  },
  plugins: [],
};