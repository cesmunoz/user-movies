const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config.base');

module.exports = {
  entry: base.entry,
  output: base.output,
  module: {
    rules: [
      base.module.rules.eslint,
      base.module.rules.babel,
      base.module.rules.fonts,
      {
        test: base.module.rules.style.test,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: base.module.rules.style.use,
          publicPath: '/dist',
        }),
      },
      {
        test: base.module.rules.processedStyle.test,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: base.module.rules.processedStyle.use,
          publicPath: '/dist',
        }),
      },
    ],
  },
  resolve: base.resolve,
  plugins: [
    base.plugins.html,
    base.plugins.extract,
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ie8: false,
        ecma: 6,
        output: {
          beautify: false,
          comments: false,
        },
      }
    }),
  ],
};
