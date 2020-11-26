<template>
  <div class="login warp-conetnt">
    <div class="pre-box content">
      <div class="login-fo">
        <h2>互动教学登录</h2>
        <div class="login-box">
          <el-form :model="loginForm" ref="loginForm" label-width="0px" class="demo-dynamic">
            <el-form-item
                :rules="[
     { required: true, message: '请输入用户名', trigger: 'blur' },]"
            >
              <el-input @keyup.enter.native="toLogin('loginForm')" placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item
                label=""
                :rules="[
     { required: true, message: '请输入密码', trigger: 'blur' },]"
            >
              <el-input type="password" @keyup.enter.native="toLogin('loginForm')" placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="loginForm.passWord"></el-input>
            </el-form-item>
          </el-form>
          <div @click="toLogin('loginForm')" class="btn-submit">登 录</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {


    },
    data() {
      return {
        loginForm:{
          name:'',
          passWord:''
        }
      }
    },
    computed:{

    },
    mounted() {


    },
    methods: {
      toLogin(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("this.loginForm.name",this.loginForm.name)
            if(this.loginForm.name=="ls"){
              this.$router.push('/enter');
            }
            if(this.loginForm.name=="xs"){
              this.$router.push('/my-course');
            }
            if(this.loginForm.name=="yx"){
              this.$router.push('/collegesmant');
            }
            if(this.loginForm.name=="pt"){
              this.$router.push('/platformmant');
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="less">
  .login {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background:url("../assets/img/login_bg.jpg") no-repeat;
    background-size: 100% 100%;
    .content {
      overflow: hidden;
      //margin-top: 15px;
      //margin-top: 15px;
      //min-height: 600px;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .login-fo{
        width:420px;
        display: block;
      }
      h2{
        margin: 20px 0;
        width: 100%;
        font-size: 26px;
        color: #ffffff;
        text-align: center;
      }
      .login-box{
        margin: 20px auto 30px;
        padding:10px 50px;
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        /*background: -moz-linear-gradient(top, #b5cadc 40%, #ccd5dc 100%);*/
        /*background: -webkit-linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);*/
        /*background: -o-linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);*/
        /*background: -ms-linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);*/
        /*background: linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);*/
        /*border-radius: 15px;*/
        .el-form-item__content{
          width:100%;
        }
      }
      .btn-submit{
        /*margin: 50px 0 0 100px;*/
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        background: #1e6abc;
        border-radius: 5px;
        cursor: pointer;
      }

    }
  }

</style>
