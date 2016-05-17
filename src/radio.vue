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
    name: 'ElRadio',

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

<template>
  <label
    :class="{ 'is-checked': model === value }"
    block="element-radio">
    <span elem="input">
      <span
        elem="inner"
        :class="{
          'is-disabled': disabled,
          'is-checked': model === value
        }"></span>
      <input
        elem="original"
        :value="value"
        type="radio"
        v-model="model"
        :disabled="disabled">
    </span>
    <span
      elem="label"
      v-text="label || value"></span>
  </label>
</template>
