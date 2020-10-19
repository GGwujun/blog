const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const path = require('path');
module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/, // 针对CSS结尾的文件设置LOADER
        use: [
          {
            loader: "style-loader",
            options: {
              transform: './css.trancform.js' // transform 文件
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
})