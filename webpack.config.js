const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'), // где лежат все исходники
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  }
}