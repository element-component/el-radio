const ElRadio = require('./radio');

module.exports = {
  ElRadio,
  install(Vue) {
    Vue.component('el-radio', ElRadio);
  }
};

