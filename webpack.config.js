const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
// env
const buildDirectory = 'public';

const clientConfig = {
  entry: [
    'babel-polyfill', 'webpack-hot-middleware/client?reload=true', './client/index.jsx',
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
          presets: [['env'], 'react', 'es2015', 'airbnb', 'stage-0'],
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
          }, {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              },
            },
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
