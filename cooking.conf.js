var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');

var registerPostHTMLPlugin = function () {
  return {
    defaults: [
      require(path.join(process.env.ELEMENT_TOOLBOX, 'posthtml-bem'))(),
    ]
  };
};
if (process.env.NODE_ENV === 'production') {
  templatePath = './example/index.html';
}

cooking.set({
  use: 'vue',
  entry: {
    'index': './src/index.js',
    'index.min': './src/index.js'
  },
  template: false,
  format: 'umd',
  moduleName: 'ElRadio',
  extends: ['vue', 'lint']
});

cooking.add('plugin.UglifyJs', new webpack.optimize.UglifyJsPlugin({
  include: /\.min\.js$/,
  minimize: true,
  compress: {
    warnings: false
  }
}));

cooking.add('resolveLoader.root', [process.env.ELEMENT_TOOLBOX]);
cooking.add('posthtml', registerPostHTMLPlugin);
cooking.add('vue.loaders.html', 'vue-html-loader!posthtml-loader');

cooking.add('externals', {
  vue: 'vue',
  vue: 'Vue',
  'vue-clickoutside': 'vue-clickoutside'
});

module.exports = cooking.resolve();
