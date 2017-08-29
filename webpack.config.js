const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = 'public';


const clientConfig = {
  entry: ['webpack-hot-middleware/client', './client/index.jsx'],
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
          plugins: ['transform-decorators-legacy'],
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
  }
  
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};


module.exports = clientConfig;
