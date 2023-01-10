<template>
  <div>
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
              <li>
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
                  <li @click="manage()"><a>个人中心</a></li>
                  <li><router-link to="/labList">我的实验</router-link></li>
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
<!--              <router-link to="/register" class="btn btn-transparent">注册</router-link>-->
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="event-area pd-top-120 pd-bottom-70   " >
      <div class="container">
        <div class="section-title text-center" style="margin-top: 20px">
          <h2 class="title" style="font-weight: bold">实验 <span style="color: #9b00ff; font-weight: bold">公告</span></h2>
        </div>

        <div class="tab-content" id="nav-tabContent1">
          <div class="tab-pane fade show active" id="nav-home1" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="single-event-inner media">
              <div class="media-left">
                <img src="static/picture/logo.png" alt="img">
              </div>
              <div class="media-body align-self-center">
                <a class="right-arrow"><i class="fa fa-mail-forward"></i></a>
                <p class="date" style="color: red">2022年11月20日-2022年12月3日</p>
                <h4><a>软件过程管理实验4</a></h4>
                <p class="content">按照实验报告的提示即可</p>
                <h6>请在截至日期之前提交</h6>
                <p class="designation">指导教师：莫启</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-content" id="nav-tabContent2">
          <div class="tab-pane fade show active" id="nav-home2" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="single-event-inner media">
              <div class="media-left">
                <img src="static/picture/logo.png" alt="img">
              </div>
              <div class="media-body align-self-center">
                <a class="right-arrow"><i class="fa fa-mail-forward"></i></a>
                <p class="date" style="color: red">2022年11月14日-2022年11月30日</p>
                <h4><a>软件设计体系与结构实验4</a></h4>
                <p class="content">按照实验报告的提示即可</p>
                <h6>请在截至日期之前提交</h6>
                <p class="designation">指导教师：谢诚</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-content" id="nav-tabContent3">
          <div class="tab-pane fade show active" id="nav-home3" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="single-event-inner media">
              <div class="media-left">
                <img src="static/picture/logo.png" alt="img">
              </div>
              <div class="media-body align-self-center">
                <a class="right-arrow"><i class="fa fa-mail-forward"></i></a>
                <p class="date" style="color: red">2022年11月14日-2022年11月30日</p>
                <h4><a>国产数据库系统设计实验3</a></h4>
                <p class="content">按照实验报告的提示即可</p>
                <h6>请在截至日期之前提交</h6>
                <p class="designation">指导教师：何臻力</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- event area end  -->

    </div>
    <footer class="footer-area pd-top-110">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="widget widget_about pr-xl-4">
              <div class="thumb">
                <img src="static/picture/logo-2.png" alt="img">
              </div>
              <div class="details">
                <p class="mb-3">提供在线编译，教师上传文件，同学可讨论，可在线考试...</p>
                <ul class="social-media-2 mt-3">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="widget widget_nav_menu">
              <h4 class="widget-title">平台</h4>
              <ul>
                <li><a>主页</a></li>
                <li><a>关于我们</a></li>
                <li><a>论坛</a></li>
                <li><a>课程</a></li>
                <li><a>联系我们</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="widget widget_nav_menu">
              <h4 class="widget-title">类别</h4>
              <ul>
                <li><a>所有课程</a></li>
                <li><a>课程信息</a></li>
                <li><a>课程详情</a></li>
                <li><a>课程设计</a></li>
                <li><a>数据分析</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="widget widget_contact pl-lg-3">
              <h4 class="widget-title">联系我们</h4>
              <ul class="details">
                <li><i class="fa fa-phone"></i> 17662050906</li>
                <li><i class="fa fa-envelope"></i>321231035@qq.com</li>
                <li><i class="fa fa-map-marker"></i> 云南大学 软件学院</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12 align-self-center">
              <p>&copy; 云南大学 软件学院</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  store,
  name: "labNotice",
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
</style>
