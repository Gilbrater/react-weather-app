var path = require('path');
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env', {
                "targets": {
                  "browsers": "> 5%"
                }
              }
            ],
            'stage-0',
            'react'
          ]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
