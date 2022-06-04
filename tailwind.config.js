module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    extend: {
      keyframes:{
        slideOut:{
          'to': {tranform:'translateX(0)'}
        },
        slideIn:{
          'to': {display: 'block'}
        }
      },
      animation: {
        'slide-out' : 'slideOut 1s ease-in-out',
        'slide-in' : 'slideIn 1s ease-in-out'
      },
    },
  },
  plugins: [],
}
