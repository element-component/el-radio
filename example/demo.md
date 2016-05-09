# el-radio
> el-radio

-----------

## 基本用法

<div>
  <el-radio
    class="radio"
    :model.sync="radio"
    value="单选框 A">
  </el-radio>
  <el-radio
    class="radio"
    :model.sync="radio"
    value="单选框 B">
  </el-radio>
  <el-radio
    class="radio"
    :model.sync="radio"
    value="单选框 C">
  </el-radio>
</div>

```html
<template>

  <el-radio
    :model.sync="radio"
    value="单选框 A">
  </el-radio>

  <el-radio
    :model.sync="radio"
    value="单选框 B">
  </el-radio>

  <el-radio
    :model.sync="radio"
    value="单选框 C">
  </el-radio>

</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      }
    }
  }
</script>
```

## 禁用

<div>
  <el-radio
    class="radio"
    disabled
    :model.sync="radio"
    value="禁用">
    </el-radio>
    <el-radio
    class="radio"
    disabled
    :model.sync="radio"
    value="选中且禁用">
    </el-radio>
</div>

```html
<el-radio
  class="radio"
  disabled
  :model.sync="radio"
  value="禁用">
</el-radio>
<el-radio
  class="radio"
  disabled
  :model.sync="radio"
  value="选中且禁用">
</el-radio>
```
