const merge = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/, // 针对CSS结尾的文件设置LOADER
        exclude: '/static',
        use: [
          {
            loader: "style-loader/url",
          },
          {
            loader: "file-loader"// string
          },
          {
            loader: 'css-loader',

            options: {
              modules: true,
            }
          }
        ]
      }
    ]
  }
})