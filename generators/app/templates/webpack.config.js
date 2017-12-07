const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    library: '<%= shortPackagename %>',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: '<%= shortPackagename %>.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
};

module.exports = config;
