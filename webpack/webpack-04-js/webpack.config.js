const path = require("path");

module.exports = {
  mode: 'development',
  output: {
    publicPath: __dirname + "/dist/", // js引用路径或者CDN地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "bundle.js"
  },
  devtool: false
};