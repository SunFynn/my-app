<template>
  <div class="about">
    <k-form :model="userInfo" :rules="rules" ref="formName">
      <k-form-item label="用户名" prop="username">
        <k-input
          v-model="userInfo.username"
          placeholder="请输入用户名"
        ></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input
          type="password"
          v-model="userInfo.password"
          placeholder="请输入密码"
        ></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm">提交</button>
      </k-form-item>
    </k-form>

    <!-- {{ userInfo.username }} -->
  </div>
</template>

<script>
import KInput from "./components/KInput";
import KFormItem from "./components/KFormItem";
import KForm from "./components/KForm.vue";

import Notice from "./Notice";
export default {
  components: { KInput, KFormItem, KForm },
  props: {},
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.formName.validate(valid => {
        if (valid) {
          console.log(valid, 3333333333);
          // alert("submit!");
          const notice = this.$create(Notice, {
            title: "社会你杨哥喊你来搬砖",
            message: valid ? "请求登录!" : "校验失败!",
            duration: 4000
          });
          notice.show();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
