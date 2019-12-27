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

/**
 * 如何建立一个开发环境
 * 使用source map
 * 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置
 * 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。
 * 如果一个错误来自于 b.js，source map 就会明确的告诉你。
 */

/**
 * 选择一个开发工具
 * 每次要编译代码时，手动运行 npm run build 就会变得很麻烦
 * webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码
 * webpack's watch mode
 * webpack-dev-server
 * webpack-dev-middleware
 * 多数场景中，可能需要使用webpack-dev-server
 * 
 * webpack's watch mode : 需要手动刷新，并且贼慢
 * webpack-dev-server: 用的最多，其中包含了webpack-dev-middleware，端口自动设置为8080
 * webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)
 */

/**
 * 模块热替换
 * 启用此功能实际上相当简单。而我们要做的，就是更新 webpack-dev-server 的配置，和使用 webpack 内置的 HMR 插件。
 * 你可以通过命令来修改 webpack-dev-server 的配置：webpack-dev-server --hotOnly
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// +
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //   print: './src/print.js'
  // },
  entry: {
    app: './src/index.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    // publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问
    // publicPath: '/'
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // +
    // new webpack.NameModeulesPlugins(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // +
  devtool: 'inline-source-map',
  // +
  devServer: {
    contentBase: './dist',
    hot: true
  }
}