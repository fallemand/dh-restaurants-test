const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/App.jsx',
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './app/index.html',
      favicon: './app/assets/images/favicon.ico',
    }),
  ],
};
