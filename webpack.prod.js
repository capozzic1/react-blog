const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const buildDirectory = 'public';


const clientConfig = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(buildDirectory),
    publicPath: '/',
    filename: 'app.js',

  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'airbnb', 'stage-0'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',

        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },


  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new UglifyJSPlugin()
  ],
};


module.exports = clientConfig;
