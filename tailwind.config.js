// tailwind.config.js

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          shimmer: {
            '0%': { backgroundPosition: '-100% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
        },
        animation: {
          shimmer: 'shimmer 3s linear infinite',
        },
      },
    },
    plugins: [],
  }
  