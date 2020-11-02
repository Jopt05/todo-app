const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
      port: 5500,
      open: true
    },

    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: false
            },
          },
          {
            test: /\.(png|svg|jpg|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false
                }
              }
            ]
          }
        ],
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          ignoreOrder: false
        }),
        new CopyPlugin({
          patterns: [
            { from: 'src/assets', to: 'assets/' }
          ]
        })
    ]
}