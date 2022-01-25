/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestWebpackPlugin = require("webpack-manifest-plugin");

module.exports = function () {
  const base = {
    name: "client",
    mode: "development",
    devtool: "eval-source-map",
    entry: {
      app: "./web/client.tsx"
    },
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name].js",
      publicPath: "/"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
      // progress: true,
      contentBase: "dist",
      hot: true,
      port: 9001,
      disableHostCheck: true,
      public: "localhost.com:9001"
    },
    module: {
      rules: [
        {
          test: /\.m?(j|t)sx?$/,
          exclude: [
            {
              and: [/node_modules/]
            }
          ],
          use: [
            "cache-loader",
            {
              loader: "babel-loader",
              options: {
                configFile: path.resolve("babel.config.js")
              }
            }
          ]
        }
      ]
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/
          }
        }
      },
      removeAvailableModules: false,
      removeEmptyChunks: false
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      }),
      new ManifestWebpackPlugin({
        writeToFileEmit: true
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./web/index.html"
      })
    ]
  };

  return base;
};
