/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        body: ['Suisse Works', 'Georgia', 'ui-serif'],
        display: ['Europa Grotesk SH', 'Arial Black', 'sans-serif'],
        ubu: ['UBU Logotype', 'Arial Black', 'sans-serif'],
      },
    },
  },
}
