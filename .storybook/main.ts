const svgLoader = require('vite-svg-loader')
const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: (config) => {
    config.plugins = [...config.plugins, svgLoader()]
    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 1200
    }
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../lib'),
    }
    if (config.resolve.extensions && Array.isArray(config.resolve.extensions))
      config.resolve.extensions.push('.ts', '.tsx')
    else config.resolve.extensions = ['.ts', '.tsx']
    return config
  },
}
