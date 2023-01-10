<!-- 用户登录界面 -->
<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top" >
          <img src="static/picture/logo.png" alt="img" style="height: 50px; width: 70px; padding-top: 2vh">
          <span class="title">&nbsp;&nbsp;登陆</span>
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

<!--            选择角色-->

            <el-dialog title="请选择角色" :visible.sync="dialogFormVisible" style="width: 60vw;margin: 0 auto">
              <el-form :model="form">
                <el-form-item label="选择角色" :label-width="formLabelWidth">
                  <el-select v-model="form.role" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary"  @click="clickRole(form.role)">确 定</el-button>
              </div>
            </el-dialog>
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
      resData:{},
      form:{
        role:""
      },
      dialogFormVisible: false,
      formLabelWidth:'120px',
      options:[],
      labelPosition: 'left',
      formLabelAlign: {
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    //用户登录请求后台处理
    login() {
      console.log("登录操作执行-------");
      console.log(this.formLabelAlign)
      this.$axios({
        url: `http://localhost:8080/user/login`,
        method: 'post',
        data: {
          ...this.formLabelAlign
        }
      }).then(res=>{
        this.resData = res.data
        console.log(this.resData)
        if(this.resData.res.code === 200) {
          this.$cookies.set("token", this.resData.token)
          let roles=this.resData.user.roleSet
          console.log(roles)
          if (roles.length===1) {
            switch (roles[0].name) {
              case "sys_admin":  //管理员
                this.$cookies.set("aname", this.resData.Name)
                this.$cookies.set("aid", this.resData.id)
                // this.$cookies.set("role", 0)
                this.$router.push({path: '/sysindex'}) //跳转到首页
                break
              case "course_admin": //课程管理员
                this.$cookies.set("cname", this.resData.Name)
                this.$cookies.set("cid", this.resData.id)
                // this.$cookies.set("role", 1)
                this.$router.push({path: '/index'}) //跳转到教师用户
                break
              case "member": //学生
                this.$cookies.set("sname", this.resData.Name)
                this.$cookies.set("sid", this.resData.id)
                this.$router.push({path: '/home'})
                break
              case "leaders": //领导
                this.$cookies.set("lname", this.resData.Name)
                this.$cookies.set("lid", this.resData.id)
                this.$router.push({path: '/leaderindex'})
                break
            }
          }
          else{
            roles.forEach((item, index, array) => {
              console.log(item);
              let label=this.addName(item.name)
              let value=item.name
              this.options.push({label: label,value: value});
            });
            console.log("【options】"+this.options)
            this.$message({
              showClose: true,
              type: 'warning',
              message: '您有多个角色，请选择登录角色'
            })
            this.dialogFormVisible=true
          }
        }
        else { //错误提示
          this.$message({
            showClose: true,
            type: 'error',
            message: this.resData.res.msg
          })
        }
      })
    },
    clickTag(key) {
      this.role = key
    },
    clickRole(roles){
      this.dialogFormVisible = false
      this.options={}
      switch (roles) {
        case "sys_admin":  //管理员
          this.$cookies.set("aname", this.resData.Name)
          this.$cookies.set("aid", this.resData.id)
          // this.$cookies.set("role", 0)
          this.$router.push({path: '/sysindex'}) //跳转到首页
          break
        case "course_admin": //课程管理员
          this.$cookies.set("cname", this.resData.Name)
          this.$cookies.set("cid", this.resData.id)
          // this.$cookies.set("role", 1)
          this.$router.push({path: '/index'}) //跳转到教师用户
          break
        case "member": //学生
          this.$cookies.set("sname", this.resData.Name)
          this.$cookies.set("sid", this.resData.id)
          this.$router.push({path: '/home'})
          break
        case "leaders": //领导
          this.$cookies.set("lname", this.resData.Name)
          this.$cookies.set("lid", this.resData.id)
          this.$router.push({path: '/leaderindex'})
          break
      }

    },
    addName(roles){
      switch (roles) {
        case "sys_admin":  //管理员
          return "系统管理员"
        case "course_admin": //课程管理员
          return "课程管理员"
        case "member": //学生
          return "会员"
        case "leader": //领导
          return "公司领导"
      }
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
