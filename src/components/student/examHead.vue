<!--学生考试首页-->
<template>
<!--  <div id="student">-->
  <div class="navbar-area student">
      <nav class="navbar navbar-area-1 navbar-area navbar-expand-lg" style="border-bottom: solid 1px gainsboro">
        <div class="container nav-container" style="padding-top: 10px">
          <div class="logo">
            <a><img src="static/picture/logo.png" alt="img" style="height: 60px; width: 80px"></a>
          </div>
          <div class="collapse navbar-collapse" id="edumint_main_menu">
            <ul class="navbar-nav menu-open text-right list">
              <li><router-link to="/home" style="text-decoration: none"><a>主页</a></router-link></li>
              <li @click="exam()"><a style="cursor: pointer;">考试列表</a></li>
              <li><router-link to="/scoreTable" style="text-decoration: none"><a>考试成绩</a></router-link></li>
              <li><router-link to="/message" style="text-decoration: none"><a>贴吧</a></router-link></li>

<!--              个人中心-->
              <li class=" menu-item-has-children" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
                <a href="javascript:" style="text-decoration: none"><i class="iconfont icon-Userselect icon" style="color: #005cbf; text-decoration: none"></i>{{user.userName}}</a>
                <ul class="msg sub-menu" v-if="flag">
                  <router-link to="/labList" style="text-decoration: none"><li><a>我的实验</a></li></router-link>
                  <li @click="exam()"><a>我的考试</a></li>
                  <li class="exit" @click="exit()"><a>退出登录</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <!--路由区域-->
    <div class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  store,
  components: {

  },
  data() {
    return {
      flag: false,
      user: {}
    }
  },
  created() {
    this.userInfo()
  },
  methods: {
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
.right .icon {
  margin-right: 6px;
}
.student{
  background-image: url("../../../static/image/31.png");
  display: flex;
  flex-direction: column;
  position: relative;
}
.student .padding-50 {
  position:sticky;
  top: 0;
  z-index: 100;
  padding: 0 50px;
  box-shadow: 0 0 10px 4px rgba(1,149,255,0.1);
  background-color: #fff;
  width:100%;
}

li {
  list-style: none;
  line-height: 60px;
}

.right .msg {
  text-align: center;
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  border-bottom: 3px solid #ffffff;
  background-color: #fff;
}
.right .msg p {
  height: 40px;
  line-height: 40px;
  width: 127px;
}
.right .msg p:hover {
  background-color: #0195ff;
}
</style>
