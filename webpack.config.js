const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = 'public';

const clientConfig = {
  entry: [
    'webpack-hot-middleware/client?reload=true', './client/index.jsx',
  ],
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
      }, {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          }, {

            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          },
        ],
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
};

module.exports = clientConfig;
