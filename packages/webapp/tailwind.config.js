const autoprefixer = require('autoprefixer');
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [autoprefixer()],
};
