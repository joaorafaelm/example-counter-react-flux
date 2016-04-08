var path = require("path");
module.exports = {
    entry: [
        './modules/app.jsx',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query:
            {
                presets:['es2015','react']
            }
        }]
    },

  devServer: {
    contentBase: "./build"
  }
};
