<template>
  <label
    class="element-radio"
    :class="{
      'element-radio--disabled': disabled,
      'element-radio--checked': model === value
    }">
    <span class="element-radio__input">
      <span class="element-radio__inner"></span>
      <input
        class="element-radio__original"
        :value="value"
        type="radio"
        v-model="model"
        :disabled="disabled">
    </span>
    <span
      class="element-radio__label"
      v-text="label || value"></span>
  </label>
</template>

<script>
  /**
   * radio
   * @module components/basic/radio
   * @desc 单选按钮
   * @param {string} model - 绑定值
   * @param {string} value - 真实值
   * @param {string} [label] - 显示值
   * @param {boolean} [disabled=false] - 是否禁用
   *
   * @example
   * <el-radio :model.sync="data" value="Jack"></el-radio>
   * <el-radio :model.sync="data" value="John"></el-radio>
   * <el-radio :model.sync="data" value="Mike" disabled></el-radio>
  */
  export default {
    name: 'el-radio',

    props: {
      model: {
        default: '',
        twoWay: true,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      label: String,
      disabled: Boolean
    }
  };
</script>