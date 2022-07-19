const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  plugins: [new Dotenv()],
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
