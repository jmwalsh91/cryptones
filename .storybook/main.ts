const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  webpackFinal: (config: any) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '../src')
    return config
  },
}
