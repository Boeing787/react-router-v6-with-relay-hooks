/* eslint-disable import/no-commonjs, import/unambiguous */

const path = require('path');
const { merge } = require('webpack-merge');
const AssetsManifestPlugin = require('webpack-assets-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: false,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            annotation: true,
            inline: false,
          },
        },
      }),
    ],
    usedExports: true,
  },
  plugins: [
    new AssetsManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});
