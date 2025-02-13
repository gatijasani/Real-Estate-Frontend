/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',  // Customize breakpoints here
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    require('autoprefixer'),
    // Other PostCSS plugins can be included here
  ],
}

