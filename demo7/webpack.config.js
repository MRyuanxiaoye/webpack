/**
 * 在webpack 4中可以无需任何配置使用
 * 然而大多数项目会需要很复杂的设置
 * 这就是为什么webpack仍然要支持配置文件
 * 这比在终端中手动输入大量命令要高效的多
 * npx webpack --config xxxx 默认接收webpack.config.js
 * 如果写了--config，则可以接收任何配置文件
 */

/**
* 考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便
* 我们可以设置一个快捷方式。在 package.json 添加一个 npm 脚本(npm script)
*/

/**
 * 资源管理 module
 */

/**
 * 到目前为止，我们在index.html文件中手动引入所有资源
 * 然而随着应用程序增长，并且一旦对文件名使用哈希并输出多个bundle
 * 手动的对index.html文件进行管理，一切就会变得困难
 * 然而，可以通过一些插件，是这个过程更容易操控
 */

/**
 * 如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称
 * 生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字
 * 我们用 HtmlWebpackPlugin 来解决这个问题
 */

const path = require('path');
// +
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // +
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
}