const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = {
  mode: NODE_ENV,
  entry: {
    'sample-react-app': path.resolve(__dirname, '../../src', 'index.js'),
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, '../../', 'dist'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        enforce: 'pre',
        test: /\.s[ac]ss$/,
        use: {
          loader: 'sass-loader',
        },
      },
      {
        test: /\.(css|s[ac]ss|)$/,
        include: [path.resolve(__dirname, '../../src/components')],
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss|)$/,
        exclude: [path.resolve(__dirname, '../../src/components')],
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash:5].css' : '[name].css',
      chunkFilename: isProd ? '[id].[hash:5].css' : '[id].css',
    }),
    new OptimizeCssPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),
  ],
  devServer: {
    hot: true,
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost',
    quiet: false,
    stats: 'normal',
  },
};
