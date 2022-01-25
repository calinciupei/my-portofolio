const path = require("path");

console.log(path.resolve("./.storybook/babel.config.js"));

module.exports = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?(j|t)sx?$/,
        exclude: /(node_modules)/,
        use: [
          "cache-loader",
          {
            loader: "babel-loader",
            options: {
              configFile: path.resolve("./.storybook/babel.config.js")
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
                localIdentName: "[hash:base64:5]_[local]"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: {
              parser: "typescript"
            }
          }
        ],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    mainFields: ["source", "main"]
  }
};
