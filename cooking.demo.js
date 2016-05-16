var path = require('path');
var cooking = require('cooking');
var templatePath = './example/index.dev.html';

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
  entry: './example/entry.js',
  dist: './example/build',
  template: templatePath,
  devServer: {
    port: 8101
  },
  publicPath: '/el-radio/',
  extends: ['vue', 'lint']
})

cooking.add('loader.md', {
  test: /\.md$/,
  loaders: ['vue-html-loader', 'highlight-loader', 'markdown-loader']
});
cooking.add('resolveLoader.root', [process.env.ELEMENT_TOOLBOX]);
cooking.add('posthtml', registerPostHTMLPlugin);
cooking.add('vue.autoprefixer', false);
cooking.add('vue.loaders.html', 'vue-html-loader!posthtml-loader');

if (process.env.NODE_ENV === 'production') {
  cooking.add('externals', {
    vue: 'Vue'
  });
}

module.exports = cooking.resolve();
