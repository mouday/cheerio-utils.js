'use strict';

const path = require('path');

module.exports = {
  // 根据不同的执行环境配置不同的入口
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
    filename: 'cheerio-utils.js',

    // 不同的引入方式不同的名字
    library: {
      root: 'cheerioUtils',
      amd: 'cheerio-utils',
      commonjs: 'cheerio-utils',
    },
    // CMD只能在 Node 环境执行，AMD 只能在浏览器端执行，UMD 同时支持两种执行环境
    libraryTarget: 'umd',
    // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    umdNamedDefine: true,
  },

  externals: {
    cheerio: 'cheerio',
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // 开发环境
  mode: 'production',
  // 此处省略其他默认配置
};
