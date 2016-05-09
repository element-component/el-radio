<script>
  import Vue from 'vue';
  import ElRadio from './../src/index';

  Vue.use(ElRadio);

  export default {
    name: 'app',

    template: require('./demo.md'),

    data() {
      return {
        radio: '选中且禁用'
      };
    }
  };
</script>
