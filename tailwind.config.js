/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,vue,html}',
    './components/**/*.{js,ts,vue,html}',
    './layouts/**/*.{js,ts,vue,html}',
    './app.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg')",
      },
    },
  },
  plugins: [],
}

