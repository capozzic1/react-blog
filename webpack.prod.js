const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin(['public'], { exclude: ['images'] }),
    new HtmlWebpackPlugin({ title: 'A react-redux blog', template: 'index.html' }),
    new UglifyJSPlugin(),
  ],
};

module.exports = clientConfig;
