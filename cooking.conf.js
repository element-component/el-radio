module.exports = {
  use: 'vue',

  webpack: function (provide, config) {
    var ExtractTextPlugin = provide.ExtractTextPlugin;
    var webpack = provide.webpack;

    config.entry = {
      'index': 'src/output.js',
      'index.min': 'src/output.js',
    };
    config.devtool = false;
    config.output.filename = '[name].js';
    config.plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new ExtractTextPlugin('style.css')
    ];

    return config;
  }
};
