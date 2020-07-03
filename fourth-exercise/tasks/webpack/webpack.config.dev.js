const base = require('./webpack.config.base');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: base.entry,
  output: base.output,
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    compress: true,
    port: 3030,
    open: true,
    hot: true,
    quiet: true,
    historyApiFallback: true,
    disableHostCheck: true,
    openPage: '',
  },
  module: {
    rules: [
      base.module.rules.babel,
      base.module.rules.fonts,
      {
        test: base.module.rules.style.test,
        use: [
          'style-loader',
          ...base.module.rules.style.use,
        ],
      },
      {
        test: base.module.rules.processedStyle.test,
        use: [
          'style-loader',
          ...base.module.rules.processedStyle.use,
        ],
      },
    ],
  },
  resolve: base.resolve,
  plugins: [
    base.plugins.html,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
