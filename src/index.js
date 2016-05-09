const ElRadio = require('./component');

module.exports = {
  ElRadio,
  install(Vue) {
    Vue.component('el-radio', ElRadio);
  }
};

