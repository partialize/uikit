// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  features: {
    babelModeV7: true,
  },
  // webpackFinal: async (config) => {
  //   // config.plugins.push(new MiniCssExtractPlugin({ filename: 'styles.css' }));
  //
  //   // config.module.rules[7] = {
  //   //   test: /\.css$/,
  //   //   sideEffects: true,
  //   //   use: [
  //   //     {
  //   //       loader: MiniCssExtractPlugin.loader,
  //   //       options: {
  //   //         sourceMap: process.env.NODE_ENV !== 'production',
  //   //       },
  //   //     },
  //   //     {
  //   //       loader: 'css-loader',
  //   //       options: { sourceMap: true },
  //   //     },
  //   //   ],
  //   // };
  //   //
  //   // config.module.rules.push(
  //   //   {
  //   //     test: /\.(ts|tsx)$/,
  //   //     exclude: /node_modules/,
  //   //     use: [
  //   //       { loader: 'babel-loader' },
  //   //       {
  //   //         loader: '@linaria/webpack-loader',
  //   //         options: { sourceMap: true },
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
  //   //     use: [{ loader: 'file-loader' }],
  //   //   },
  //   // );
  //
  //   return config;
  // },
}