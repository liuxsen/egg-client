<template lang="pug">
  div.h-p100.bg.pst-rlt
    .w-300.bg-white.pst-absl.v.p-20.box
      el-form(
        size="small",
        label-width="80px",
        ref="form",
        :model="oForm",
        :rules="oFormRules"
        )
        el-form-item(label="手机：", prop="phone")
          el-input(v-model="oForm.phone", placeholder="请输入手机")
        el-form-item(label="密码：", prop="password")
          el-input(v-model="oForm.password", placeholder="情输入密码")
        .text-center
          el-button(type="primary",size="small",@click="fnNetLogin") 登录
          el-button(type="primary",size="small",@click="fnNetRegister") 注册
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { validatePhone } from '../util';
@Component({})
export default class Home extends Vue {
  protected oForm = {
    phone: '',
    password: ''
  };
  protected oFormRules = {
    phone: [
      {
        validator: validatePhone,
        triger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        triger: 'blur'
      }
    ]
  };

  protected fnNetRegister() {
    const validateForm: any = this.$refs.form;
    validateForm['validate']((valide: boolean) => {
      if (valide) {
        const options = {
          data: {
            phone: this.oForm.phone,
            password: this.oForm.password
          }
        };
        this.$dataCenter.user
          .regitster(options)
          .then((res: any) => {
            this.$message.success('注册成功');
          })
          .catch((err) => {});
      }
    });
  }

  // 登录
  protected fnNetLogin() {
    const validateForm: any = this.$refs.form;
    validateForm['validate']((valide: boolean) => {
      if (valide) {
        // this.$message.success('登录成功');
        const options = {
          data: {
            phone: this.oForm.phone,
            password: this.oForm.password
          }
        };
        this.$dataCenter.user
          .login(options)
          .then((res: any) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: url('../../public/imgs/login_bg.jpg') center center/cover;
}
.box {
  right: 10%;
}
</style>
