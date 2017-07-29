const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = 'public';

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',

  },

  externals: {
    cheerio: 'window',
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
          presets: ['es2015', 'react', 'airbnb', 'stage-0'],
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

  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: {
      index: 'public/index.html',
    },
  },
};
