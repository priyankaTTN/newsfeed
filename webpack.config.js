const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  context: __dirname + "/src",
  entry: './client.js',
  output: {
    path: __dirname + '/dist', filename: "bundle.js", publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } } ]
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      },
      {
        test: /\.(otf|png|jpg|jpeg|gif|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
        },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {from:'assets/images',to:'assets/images'}
    ]), 
]
};