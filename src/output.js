var compo = require('./index');

compo.install = function(Vue) {
  Vue.component('el-radio', require('./index'));
};

export default compo;

