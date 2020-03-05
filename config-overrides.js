// webpack.config

const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@static': 'static'
  })(config);

  return config;
};
