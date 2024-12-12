const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Output file
    clean: true, // Cleans up old builds
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Match .css files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template
    }),
  ],
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    port: 3000, // Development server port
    open: true, // Open browser automatically
  },
  mode: "development", // Set the mode
};
