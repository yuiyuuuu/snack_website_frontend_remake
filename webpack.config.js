const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  mode: "development",
  plugins: [new Dotenv()],
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
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
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.png/,
        type: "asset/resource",
        generator: {
          outputPath: "./assets",
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
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
