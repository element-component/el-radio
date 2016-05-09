var test = require('ava');
var Vue = require('vue');
var ElRadio = require('../dist/index.js');

test('el-radio', t => {
  t.truthy(ElRadio.install);
});
