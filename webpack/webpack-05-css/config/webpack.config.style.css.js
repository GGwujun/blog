const merge = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/, // 针对CSS结尾的文件设置LOADER
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true // 处理为单个style标签
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
});

/**
 * style-loader pitch
 *    css-loader pitch
 *    css-loader
 * style-loader
 */

