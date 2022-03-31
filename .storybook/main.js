const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.plugins.push(new MiniCssExtractPlugin({ filename: 'styles.css' }));

    config.module.rules[0].use.push({
      loader: '@linaria/webpack-loader',
      options: {
        sourceMap: true
      }
    });
    config.module.rules[7] = {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
      ],
    };

    return config;
  }
};
