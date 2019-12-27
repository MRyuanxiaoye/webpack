const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifuJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifuJSPlugin()
  ]
})