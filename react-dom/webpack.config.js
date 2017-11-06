const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const path = require('path');
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: false
};
module.exports = {
  entry: {
        app: [path.join(__dirname, './src/main.js')]
    },

  output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'js/[name].[chunkhash].js',
        publicPath: '/'
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      }
     
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
         
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
