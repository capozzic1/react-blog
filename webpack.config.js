const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './public/build';

module.exports = {
  entry: './index.js',
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js'

  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  },
  plugins: [],
};
