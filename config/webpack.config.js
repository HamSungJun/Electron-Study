const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_ENV = process.env.NODE_ENV || "development";
const port = process.env.PORT || "8000";

module.exports = {
  mode: NODE_ENV,
  entry: path.join(__dirname, "..", "app", "components", "Root.jsx"),
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                require("autoprefixer")();
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "app", "index.html"),
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  devServer: {
    port,
    contentBase: [
      path.join(__dirname, "..", "dist"),
      path.join(__dirname, "..", "app")
    ],
    watchContentBase: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: "localhost",
    inline: true,
    hot: true
  }
};
