<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top" >
          <img src="static/picture/logo.png" alt="img" style="height: 50px; width: 70px; padding-top: 2vh">
          <span class="title">&nbsp;在线学习平台</span>
        </div>
        <!--        <div class="top">-->
        <!--          <i class="iconfont icon-kaoshi"></i><span class="title">python实验教学平台</span>-->
        <!--        </div>-->
        <div class="bottom">
          <div class="container">
            <p class="title" style="font-size:25px; font-weight: bold">用户注册</p>
      <el-form  label-width="80px"  @keyup.enter.native="login()">
        <el-form-item label="用户名">
          <el-input v-model.trim="name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model.trim="password" placeholder="请输入密码" type='password'></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model.trim="tel" placeholder="请输入手机号" type='tel'></el-input>
        </el-form-item>
        <div class="submit">
          <el-button type="primary" class="row-login" @click="register()">注册</el-button>
        </div>
      </el-form>

          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col>
        <p class="msg2"></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'register',
  props: {
    msg: String
  },
  data(){
    return{
      name:"",
      password:"",
      mail:"",
      tel:""
    };
  },methods:{
    register:function()
    {
      if(localStorage['name']===this.name)
      {
        alert("用户名已存在");//如果用户名已存在则无法注册
      }
      else if(this.name==='')
      {
        alert("用户名不能为空");
      }
      else{//将新用户信息存储到localStorage
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        localStorage.setItem('mail',this.mail);
        localStorage.setItem('tel',this.tel);
        localStorage.setItem('s',"false");
        alert("注册成功");
        this.$router.replace('/');//完成注册后跳转至登录页面
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.container {
  margin-bottom: 32px;
}
.container .el-radio-group {
  margin: 30px 0;
}
a:link {
  color:#0d91f0;
  text-decoration:none;
}
#login {
  font-size: 14px;
  color: #000;
  background-color: #fff;
}
#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: url("../../../static/image/3.png") center top / cover no-repeat;
  //background: url('../../assets/background.svg')
  background-size: cover;
  background-color: #fff !important;
}
#login .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
#login .main-container .top {
  font-size: 30px;
  color: #0d91f0;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
#login .top .icon-kaoshi {
  font-size: 80px;
}
#login .top .title {
  background: linear-gradient(to right, rgb(119,0,255) 10%,#9000ff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-top: 20px;

}

#login .bottom {
  display:flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#login .bottom .title {
  text-align: center;
  font-size: 30px;
}
.bottom .container .title {
  margin: 30px 0;
}
.bottom .submit .row-login {
  width: 100%;
  background: linear-gradient(to right, rgb(119,0,255) 10%,#9000ff);
  border: none;
  border-color: #04468b;
  margin: 20px 0 10px 0;
  padding: 15px 20px;
}
.bottom .submit {
  display: flex;
  justify-content: center;
}
.footer {
  text-align: center;
}
.footer .msg1 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
}
.footer .msg2 {
  font-size: 14px;
  color: #0d91f0;
  margin-top: 50px;
}
.footer .msg2 a{
  font-size: 14px;
  color: #0d91f0;
  margin-top: 50px;
}
.footer .msg2 a:hover{
  color: #075c7b;
}
.bottom .options {
  margin-bottom: 40px;
  color: #0d91f0;
  display: flex;
  justify-content: space-between;
}
.bottom .options > a {
  color: #0d91f0;
}
.bottom .options .register span:nth-child(1) {
  color: #8C8C8C;
}
</style>
