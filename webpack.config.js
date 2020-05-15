const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'), // где лежат все исходники
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core')
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // to remove old bundle file in dist
    new HtmlWebpackPlugin({
      filename: "index.html", // context -> src/index.html
      title: "excel",
      favicon: "favicon_excel.ico"
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon_excel.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ]
}