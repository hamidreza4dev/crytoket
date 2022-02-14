const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const files = readdirSync(path.resolve(__dirname, '..', 'src')).filter((file) => /\.html$/i.test(file));
const allHtmlWebpackPluginFiles = files.map((item) => {
  return new HtmlWebpackPlugin({
    template: `./src/${item}`,
    filename: item,
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
    },
  });
});

module.exports = allHtmlWebpackPluginFiles;
