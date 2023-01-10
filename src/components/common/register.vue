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
      <el-form  label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model.trim="login.name" placeholder="请输入用户名" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model.trim="login.password" placeholder="请输入密码" type='password' style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-checkbox-group v-model="login.role" style="display: flex;justify-content: start;flex-wrap: wrap;width: 80%">
            <el-checkbox v-for="user in options" :label="user.value" :key="user.value">{{user.label}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <div class="submit">
          <el-button type="primary" class="row-login" @click="register" style="width: 60%"> 注册</el-button>
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
      login:{
        name:"",
        password:"",
        role:[]
      },
      options: [ {
        value: 'member',
        label: '会员'
      },
        {
        value: 'sys_admin',
        label: '系统管理员'
      }, {
        value: 'course_admin',
        label: '课程管理员'
      }, {
        value: 'leader',
        label: '公司领导'
      }],
    };
  },methods:{
    register(){
      console.log(this.login)
      if (this.login.role.length===0){
        this.$message({
          showClose: true,
          type: 'error',
          message: "角色不可为空"
        })
      }else {
        this.$axios({
          url: `http://localhost:8080/user/enroll`,
          method: 'post',
          data: {
            ...this.login
          }
        }).then(res=> {
          console.log(res.data)
          let resData=res.data
          if (resData.res.code===200){

            this.$message({
              showClose: true,
              type: 'success',
              message: resData.res.msg
            })
            //   清空信息
            this.login={}
            //   跳转到登录
            this.$router.push({path: '/'})
          }else {
            this.$message({
              showClose: true,
              type: 'error',
              message: resData.res.msg
            })
            //   清空信息
            this.login={}
          }
        })
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
