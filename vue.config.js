const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: '/dist/',
  // outputDir: 'dist',
  // assetsDir: 'static',
  // compress: true,
  // disableHostCheck: true,
});
