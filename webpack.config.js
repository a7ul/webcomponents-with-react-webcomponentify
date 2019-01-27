var path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const OUTPUT_DIR = path.resolve(__dirname, "docs");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: OUTPUT_DIR,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  plugins: [new CopyWebpackPlugin([{ from: "assets", to: OUTPUT_DIR }])],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
