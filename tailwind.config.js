module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme:{
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14,minmax(0, 1fr))',
        '15': 'repeat(15,minmax(0, 1fr))',
        '16': 'repeat(16,minmax(0, 1fr))'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ],
}
