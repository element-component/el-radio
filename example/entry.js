import Vue from 'vue';

if (process.env.NODE_ENV !== 'production') {
  require('./assets/rainbow.css');
  require('./assets/grid.css');
  require('element-theme-default');
}

new Vue({ // eslint-disable-line
  el: 'body',
  components: { app: require('./app') }
});
