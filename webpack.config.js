const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  module:{
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}