const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          {
            // needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
            loader: 'source-map-loader',
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                if (/.*\/node_modules\/.*/.test(resourcePath)) {
                  return false;
                }
                return true;
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: path.resolve(__dirname, 'src', 'index.css'),
    }),
  ],
};
