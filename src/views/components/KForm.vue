<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      //获取所有孩子kFormItem
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => {
          item.validate();
        });

      console.log(tasks, 2222);

      Promise.all(tasks)
        .then(() => {
          cb(true);
        })
        .catch(() => {
          cb(false);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
