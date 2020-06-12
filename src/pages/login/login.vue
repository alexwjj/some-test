<template>
  <div class="login">
    <div class="login-box">
      <div class="login-content">
        <div class="login-title">登录</div>
        <div>
          <el-input placeholder="请输入账号" v-model="loginForm.userName" />
        </div>
        <div>
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password" />
        </div>
        <div>
          <el-button @click="onLogin" type="primary">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'login',
    components: {

    },
    data () {
        return {
            loginForm: {
              userName: 'admin',
              password: '123456'
            }
        }
    },
    methods: {
        onLogin() {
          const userInfoStr = JSON.stringify(this.loginForm)
          sessionStorage.setItem('userInfo', userInfoStr)
          this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);
}
.login-box {
  width: 500px;
  height: 300px;
  display: flex;
  border-radius:10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.login-box div {
  text-align: center;
  margin-bottom: 10px;
}
/* .login-title{
    text-align: center;
    font-size: 20px;

} */
</style>
