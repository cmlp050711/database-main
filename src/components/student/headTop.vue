<template>

  <div style="background: none">
    <div class="navbar-area" style="position: fixed">
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
              <li class="menu-item-has-children">
                <router-link to="/labList" style="text-decoration: none">实验+</router-link>
                <ul class="sub-menu">
                  <li><router-link to="/labList" style="text-decoration: none">实验列表</router-link></li>
                  <li><router-link to="/labNotice" style="text-decoration: none">实验公告</router-link></li>
                </ul>
              </li>
              <li class="menu-item-has-children">
                <router-link to="/studentCode" style="text-decoration: none">在线编程-</router-link>
              </li>

              <li class="menu-item-has-children" style="text-decoration: none">
                <router-link to="/myExam" style="text-decoration: none">在线考试+</router-link>
                <ul class="sub-menu">
                  <li><router-link to="/myExam" style="text-decoration: none">考试列表</router-link></li>
                  <li><router-link to="/examNotice" style="text-decoration: none">考试公告</router-link></li>
                </ul>
              </li>

              <li class=" menu-item-has-children" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
                <a href="javascript:" style="text-decoration: none"><i class="iconfont icon-Userselect icon" style="color: #005cbf;"></i>{{user.userName}}</a>
                <ul class="msg sub-menu" v-if="flag">
                  <li @click="manage()"><a>修改密码</a></li>
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
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="about-area home-1-about bg-relative pd-top-120 pd-bottom-100" style="background-image: url('static/image/1.png');">
      <div class="container">
        <div class="about-area-inner">
          <div class="row">
            <div class="col-lg-6 col-md-11">
              <div class="about-thumb-wrap about-left-thumb">
                <img src="static/picture/12.jpg" alt="img">
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="about-inner-wrap mt-2 pt-4 pt-lg-0">
                <div class="section-title mb-0">
                  <h2 class="title">实验教学平台</h2>
                  <p class="content mb-4">这是一个实验教学平台...</p>
                  <p class="color-base mb-3"><img class="mr-2" src="static/picture/4.png" alt="img"> 作业的提交与批改</p>
                  <p class="color-pink mb-3"><img class="mr-2" src="static/picture/5.png" alt="img"> 在线编程</p>
                  <p class="color-light-blue mb-3"><img class="mr-2" src="static/picture/4.png" alt="img"> 在线考试</p>
                  <p class="color-blue"><img class="mr-2" src="static/picture/6.png" alt="img">任务的发布与订阅</p>
                  <a class="btn btn-base-m" style="color: white; padding-top: 13px">体验更多 +</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    金牌教师列表-->
    <div class="team-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h6 class="sub-title double-line">Teachers</h6>
              <h2 class="title">金牌教师列表</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="single-team-inner text-center">
              <div class="thumb">
                <img src="static/image/zhonglou.png" alt="team">
                <ul class="social-media">
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="details">
                <h4><a style="color: #4d53f9">杨云</a></h4>
                <p style="margin-top: 3vh">研究领域：人工智能，机器学习</p>
                <p style="color: #04468b;">电子邮件：yangyan@ynu.edu.cn</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-team-inner text-center">
              <div class="thumb">
                <img src="static/image/zhonglou.png" alt="team">
                <ul class="social-media">
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="details">
                <h4><a style="color: #4d53f9">王普明</a></h4>
                <p style="margin-top: 3vh">研究领域： 大数据及人工智能</p>
                <p style="color: #04468b">电子邮件： wpuming@163.com</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-team-inner text-center">
              <div class="thumb">
                <img src="static/image/zhonglou.png" alt="team">
                <ul class="social-media">
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn-base-m" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="details">
                <h4><a style="color: #4d53f9">谢诚</a></h4>
                <p style="margin-top: 3vh">研究领域：知识图谱，智能制造</p>
                <p style="color: #04468b">电子邮件：xiecheng@ynu.edu.cn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    尾部-->
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
  name: "head",
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
