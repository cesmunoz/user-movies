const path = require('path');

const package = require('../../package.json');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rucksack = require('rucksack-css');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'ui-exam.bundle.js',
  },
  module: {
    rules: {
      eslint: {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
        ],
      },
      babel: {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
        ],
      },
      fonts: {
        test: /\.(woff|woff2|eot|ttf|otf|svg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      style: {
        test: [/\.css$/],
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      processedStyle: {
        test: [/\.sass$/],
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                rucksack(),
                autoprefixer({ browsers: ['last 5 version'] }),
                cssnano({
                  zindex: false,
                  reduceIdents: false,
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
            }
          },
        ],
      },
    },
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, '../../app/pages'),
      components: path.resolve(__dirname, '../../app/components'),
      containers: path.resolve(__dirname, '../../app/containers'),
      store: path.resolve(__dirname, '../../app/store'),
      stylesheets: path.resolve(__dirname, '../../app/stylesheets'),
    },
    extensions: ['.js'],
    modules: ["node_modules"],
  },
  plugins: {
    html: new HtmlWebpackPlugin({
      title: package.description,
      baseUrl: process.env.BASE_URL || '/',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './tasks/webpack/index.ejs',
    }),
    extract: new ExtractTextPlugin({
      filename: 'ui-exam.bundle.css',
      disable: true,
      allChunks: true,
    }),
  },
};
