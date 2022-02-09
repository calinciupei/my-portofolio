const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = function () {
  const base = {
    name: "client",
    mode: "development",
    devtool: "eval-source-map",
    entry: {
      app: "./client.tsx"
    },
    output: {
      path: path.resolve(__dirname, "../../public"),
      filename: "[name].js",
      pathinfo: false
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "../../public"),
      },
      client: {
        progress: true,
      },
      hot: true,
      port: 3001,
      historyApiFallback: true
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
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
        },
        {
          test: /\.css$/,
          exclude: /(node_modules)/,
          sideEffects: true,
          use: [
            "style-loader",
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[hash:base64:5]_[local]",
                },
              },
            },
            "postcss-loader"
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: "file-loader"
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
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
      }
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      }),
      new WebpackManifestPlugin({
        writeToFileEmit: true,
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html"
      }),
      new ForkTsCheckerWebpackPlugin({
        tsconfig: "./tsconfig.json",
        checkSyntacticErrors: true
      })
    ]
  };

  return base;
};
