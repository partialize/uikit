module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules[0].use.push({
        loader: '@linaria/webpack-loader',
        options: {
          sourceMap: true
        },
    });

    return config;
  },
}