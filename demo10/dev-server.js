/**
 * 使用webpack dev server 和Node .js api
 * 不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。
 * 而是，在创建选项时，将其作为第二个参数传递
 */

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});