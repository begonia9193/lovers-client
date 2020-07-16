const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
})

/**
 * @type { import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader' ,'less-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
  devServer: {
    stats: 'errors-only',
  },
}

module.exports = config
