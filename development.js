const webpack = require('webpack')
const path = require('path')
const dist = path.join(__dirname, 'dist')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

export default {
  entry: {
    bundle: __dirname + '/index.js',
  },
  output: {
    path: dist,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-3', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
              sourceMap: true,
            }
          }
        })
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    port: 8080,
    inline: true,
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
