const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const HtmlWebpackInjector = require("html-webpack-injector");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionGzipPlugin = require("compression-webpack-plugin");
const Zopfli = require("@gfx/zopfli");
const { RetryChunkLoadPlugin } = require("webpack-retry-chunk-load-plugin");

module.exports = function () {
  const base = {
    mode: "production",
    entry: {
      app: "./client.tsx"
    },
    output: {
      path: path.resolve(__dirname, "../../public"),
      filename: "[name]-[contenthash].js"
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
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          },
          extractComments: false
        })
      ],
      splitChunks: {
        chunks: "all",
        chunks: "async",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/](?!@crew)/
          }
        }
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new WebpackManifestPlugin({
        publicPath: "",
        basePath: ""
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html",
        chunks: ["app"]
      }),
      new HtmlWebpackPlugin({
        filename: "404.html",
        template: "./404.html",
        chunks: ["app"]
      }),
      new HtmlWebpackInjector(),
      new CompressionGzipPlugin({
        test: /\.(js|css|svg|png)$/,
        algorithm(input, compressionOptions, callback) {
          return Zopfli.gzip(input, compressionOptions, callback);
        }
      }),
      new RetryChunkLoadPlugin({
        maxRetires: 3
      }),
    ],
  };

  return base;
};
