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
   * 资源管理 css
   */

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
  }
}