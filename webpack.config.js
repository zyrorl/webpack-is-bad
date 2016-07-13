const webpack = require('webpack');


module.exports = {
  // entry: provided by serverless
  // output: provided by serverless
  target: 'node',
  externals: [
    'aws-sdk',
    'request',
    'jxon',
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
      },
    }),
  ],
  module: {
  },
};

