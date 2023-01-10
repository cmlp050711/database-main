<!-- 用户登录界面 -->
<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top" >
          <img src="static/picture/logo.png" alt="img" style="height: 50px; width: 70px; padding-top: 2vh">
          <span class="title">&nbsp;&nbsp;在线学习平台</span>
        </div>
        <div class="bottom">
          <div class="container">
            <p class="title" style="font-size:25px; font-weight: bold">用户登录</p>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" @keyup.enter.native="login()">
              <el-form-item label="用户名">
                <el-input v-model.number="formLabelAlign.name" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password" placeholder="请输入密码" type='password'></el-input>
              </el-form-item>
              <div class="submit">
                <el-button type="primary" class="row-login" @click="login()">登录</el-button>
              </div>
              <div class="options">
<!--                <router-link to="/manager"><p class="find" style="margin-left: 220px"><a href="javascript:">忘记密码?</a></p></router-link>-->
                <router-link to="/register"><p class="find" style="margin-left: 220px"><a href="javascript:">去注册</a></p></router-link>
<!--                <div class="register">-->
<!--                  <router-link to="/register"><span><a href="javascript:">去注册</a></span></router-link>-->
<!--                </div>-->
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
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  store,
  name: "login",
  data() {
    return {
      role: 2,
      labelPosition: 'left',
      formLabelAlign: {
      }
    }
  },
  methods: {
    //用户登录请求后台处理
    login() {
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/user/login`,
        method: 'post',
        data: {
          ...this.formLabelAlign
        }
      }).then(res=>{
        let resData = res.data.data
        if(resData != null) {
          switch(resData.roleSet) {
            case "sys_admin":  //管理员
              this.$cookies.set("aname", resData.Name)
              this.$cookies.set("aid", resData.id)
              // this.$cookies.set("role", 0)
              this.$router.push({path: '/sysindex' }) //跳转到首页
              break
            case "course_admin": //课程管理员
              this.$cookies.set("cname", resData.Name)
              this.$cookies.set("cid", resData.id)
              // this.$cookies.set("role", 1)
              this.$router.push({path: '/index' }) //跳转到教师用户
              break
            case "user": //学生
              this.$cookies.set("sname", resData.Name)
              this.$cookies.set("sid", resData.id)
              this.$router.push({path: '/home'})
              break
            case "leaders": //领导
              this.$cookies.set("lname", resData.Name)
              this.$cookies.set("lid", resData.id)
              this.$router.push({path: '/leaderindex'})
              break
          }
        }
        if(resData == null) { //错误提示
          this.$message({
            showClose: true,
            type: 'error',
            message: '用户名或者密码错误'
          })
        }
      })
    },
    clickTag(key) {
      this.role = key
    }
  },
  computed: mapState(["userInfo"]),
  mounted() {

  }
}
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
