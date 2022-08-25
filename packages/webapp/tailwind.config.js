const autoprefixer = require('autoprefixer');
module.exports = {
  content: ['./src/**/*.{html,scss,ts}', './src/**/**/*.{html,scss,ts}', './src/**/**/**/*.{html,scss,ts}'],
  theme: {
    extend: {},
  },
  plugins: [autoprefixer()],
};
