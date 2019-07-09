const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  resolve: {
    alias: {
      assets: path.join(__dirname, "src/assets"),
      common: path.join(__dirname, "src/common"),
      components: path.join(__dirname, "src/components"),
      module: path.join(__dirname, "src/module"),
      store: path.join(__dirname, "src/store"),
      api: path.join(__dirname, "src/api")
    },
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx", "scss"]
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
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
