<!--管理中心-->
<template>
  <div>
    <div class="body">
      <div class="navbar-area">
        <nav class="navbar navbar-area-1 navbar-area navbar-expand-lg">
          <div class="container nav-container" style="background-color: white">

            <div class="logo">
              <a><img src="static/picture/logo.png" alt="img"></a>
            </div>
            <div class="nav-right-part nav-right-part-mobile">
              <a class="search-bar-btn" href="#"><i class="fa fa-search"></i></a>
            </div>
            <div class="collapse navbar-collapse" id="edumint_main_menu">
              <ul class="navbar-nav menu-open text-right">
                <li style="text-decoration: none">
                  <router-link to="/home" style="text-decoration: none">主页-</router-link>
                </li>
                <li class="menu-item-has-children" style="text-decoration: none">
                  <router-link to="/labList" style="text-decoration: none">实验+</router-link>
                  <ul class="sub-menu">
                    <li><router-link to="/labList" style="text-decoration: none">实验列表</router-link></li>
                    <li><router-link to="/labNotice" style="text-decoration: none">实验公告</router-link></li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <router-link to="/studentCode" style="text-decoration: none"><a>在线编程-</a></router-link>
                </li>

                <li class="menu-item-has-children">
                  <router-link to="/myExam" style="text-decoration: none">在线考试+</router-link>
                  <ul class="sub-menu">
                    <li><router-link to="/myExam" style="text-decoration: none">考试列表</router-link></li>
                    <li><router-link to="/examNotice" style="text-decoration: none">考试公告</router-link></li>
                  </ul>
                </li>

                <li class=" menu-item-has-children" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
                  <a href="javascript:" style="text-decoration: none"><i class="iconfont icon-Userselect icon" style="color: #005cbf;"></i>{{user.userName}}</a>
                  <ul class="msg sub-menu" v-if="flag">
                    <li @click="manage()" style="text-decoration: none"><a>修改密码</a></li>
                    <li><router-link to="/labList" style="text-decoration: none">我的实验</router-link></li>
                    <li @click="exam()"><a>我的考试</a></li>
                    <li><a>学习记录</a></li>
                    <li class="exit" @click="exit()"><a>退出登录</a></li>
                  </ul>
                </li>

              </ul>
            </div>
            <div class="nav-right-part nav-right-part-desktop">
              <div class="log-reg-btn d-inline-block ml-3">
                <a @click="exit()" class="btn btn-base-m">登录</a>
                <!--              <a class="btn btn-transparent">注册</a>-->
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div id='manager'>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
<!--        <h3 class="alter">修改密码</h3>-->
        <el-form-item label="密码" prop="pass" class="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-row style="margin-left: 80px">
          <el-button type="primary" size="mini" style="border-radius: 5px; margin-top: -100px" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button type="danger" size="mini" style="height: 40px; border-radius: 5px" @click="resetForm('ruleForm2')">重置</el-button>
        </el-row>
      </el-form>
    </div>
  </div>


</template>

<script>

  import {mapState} from "vuex";
  import store from '@/vuex/store';

  export default {
    store,
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        flag: false,
        user: {},
        role: 2,
        labelPosition: 'left',
        formLabelAlign: {
        },
        ispass: true,
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    created() {
      this.userInfo()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let studentId = this.$cookies.get("cid")
            this.$axios({ //修改密码
              url: '/api/studentPWD',
              method: 'put',
              data: {
                pwd: this.ruleForm2.pass,
                studentId
              }
            }).then(res => {
              if(res.data != null ) { //修改成功提示
                this.$message({
                  message: '密码修改成功!',
                  type: 'success'
                })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      exit() {  //退出登录
        this.$router.push({path:"/"}) //跳转到登录页面
        this.$cookies.remove("cname") //清除cookie
        this.$cookies.remove("cid")
      },
      manage() {  //跳转到修改密码页面
        this.$router.push({path: '/manager'})
      },
      userInfo() {
        let studentName = this.$cookies.get("cname")
        let studentId = this.$cookies.get("cid")
        console.log(`studentId${studentId}`)
        console.log(`studentName ${studentName}`)
        this.user.userName = studentName
        this.user.studentId = studentId
      },
      practice() { //跳转练习模式
        let isPractice = true
        this.$store.commit("practice", isPractice)
        this.$router.push({path:'/startExam'})
      },
      exam() { //跳转考试模式
        let isPractice = false
        this.$store.commit("practice", isPractice)
        this.$router.push({path:'/myExam'})
      }
    },
    computed:mapState(["isPractice"])
  }
</script>

<style scoped>
@import '../../../static/css/css.css';
@import '../../../static/css/responsive.css';
@import '../../../static/css/style.css';
@import '../../../static/css/vendor.css';

#manager .pass  label{
  color: red;
  font-size: 20px;
}
#manager {
  width: 600px;
  margin: 0 auto;
  padding-top: 250px;
  text-align: center;
  margin-bottom: 300px;
  /*background-image: url("../../../static/image/3.png");*/
}
#manager .alter {
  margin: 30px 0;
}
</style>
