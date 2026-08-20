const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  
  // Injection automatique d'un identifiant temporel (Hash) pour casser le cache du navigateur
  configureWebpack: {
    output: {
      filename: `js/[name].[chunkhash].js?v=${Date.now()}`,
      chunkFilename: `js/[name].[chunkhash].js?v=${Date.now()}`
    }
  },
  css: {
    extract: {
      filename: `css/[name].[contenthash].css?v=${Date.now()}`,
      chunkFilename: `css/[name].[contenthash].css?v=${Date.now()}`
    }
  }
})
