'use strict';

const path = require('path');

module.exports = {
  // 根据不同的执行环境配置不同的入口
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'cheerio-utils.js',
    library: 'cheerio-utils', // 指定的就是你使用require时的模块名
    // CMD只能在 Node 环境执行，AMD 只能在浏览器端执行，UMD 同时支持两种执行环境
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },

  externals: {
    'cheerio': 'cheerio',
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
    ],
  },

  // 开发环境
  mode: 'production',
  // 此处省略其他默认配置
};
