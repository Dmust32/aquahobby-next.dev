const withSass = require('@zeit/next-sass')
const withTM = require('next-transpile-modules')(['react-bulma-components']);

module.exports = withTM(withSass({
  // NOTE: this also allow to use abolute import from this folder not only for the _variables.sass file
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules.push('./'); // Add to webpack configuration the folder where you put the _variables file

    if (isServer) {
      require('./utils/generateSiteMap')
    }
    return config
  },
  images: {
    domains: ['images.ctfassets.net']
  }
}));