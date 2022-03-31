
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(mjs|jsx?|tsx?)$/,
      exclude: /node_modules/,
      use: [{ loader: '@linaria/webpack-loader' }],
    });
    return config;
  }
};
