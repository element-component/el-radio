# el-radio
> Radio 单选框

-----------

## 1. 基本用法


<section>
  <p>result: {{ radio | json }}</p>
  <el-radio :model.sync="radio" value="Mike"></el-radio>
  <el-radio :model.sync="radio" value="Saul"></el-radio>
</section>


```html
<el-radio :model.sync="radio" value="Mike"></el-radio>
<el-radio :model.sync="radio" value="Saul"></el-radio>
```
## 2. 禁用

<section>
  <p>result: {{ radio1 | json }}</p>
  <el-radio :model.sync="radio1" value="Mr. White"></el-radio>
  <el-radio :model.sync="radio1" value="Pinkman" disabled></el-radio>
</section>

```html
<el-radio :model.sync="radio1" value="Mr. White"></el-radio>
<el-radio :model.sync="radio1" value="Pinkman" disabled></el-radio>
```
