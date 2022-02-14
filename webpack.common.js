const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const allHtmlWebpackPluginFiles = require('./plugins/webpack.htmlFiles');

module.exports = {
  entry: './src/js/app.js',
  externals: {
    swiper: 'Swiper',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          'html-loader',
          {
            loader: 'posthtml-loader',
            options: {
              ident: 'posthtml',
              plugins: [require('posthtml-include')({ root: 'src' })],
            },
          },
          {
            loader: 'posthtml-loader',
            options: {
              ident: 'posthtml',
              plugins: [require('posthtml-expressions')()],
            },
          },
        ],
        generator: {
          filename: '[name].[ext]',
        },
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [...allHtmlWebpackPluginFiles],
};
