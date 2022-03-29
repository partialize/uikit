module.exports = {
  stories: [
    '../src/**/*.stories.(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  features: {
    babelModeV7: true,
  },
  framework: '@storybook/react',
}