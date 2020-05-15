const path = require("path");
const webpack = require("webpack");
var SRC_DIR = path.join(__dirname, './src');
var DIST_DIR = path.join(__dirname, './dist');



module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  }
};
