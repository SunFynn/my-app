<template>
  <div>
    <!--label标签-->
    <label v-if="label">{{ label }}</label>

    <slot></slot>

    <!--校验信息的显示-->
    <p v-if="error">{{ error }}</p>

    <!-- {{ form.rules }} -->
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  data() {
    return {
      error: "" //error是空表明校验成功
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  mounted() {
    this.$on("validate", () => {
      // alert(1);
      this.validate();
    });
  },
  methods: {
    validate() {
      //校验规则
      const rules = this.form.rules[this.prop];
      console.log(rules);

      //校验值
      const value = this.form.model[this.prop];
      console.log(value);

      //校验描述对象
      const desc = { [this.prop]: rules };
      //校验Schema实例
      const schema = new Schema(desc);
      schema.validate({ [this.prop]: value }, errors => {
        console.log(errors);

        if (errors) {
          this.error = errors[0].message;
        } else {
          //校验通过
          this.error = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
