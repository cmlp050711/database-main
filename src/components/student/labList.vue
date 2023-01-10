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
                  <li @click="manage()"><a>个人中心</a></li>
                  <li><a>我的实验</a></li>
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
<!--    <headTop></headTop>-->

    <div class="course-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6" >
            <div class="single-course-inner text-left">
              <div class="thumb">
                <router-link to="/outline"></router-link>
                <img src="static\img\5B8826377EE623C7B6328E8F8B8D2871.png" alt="img" >
                <div class="cat-area">
                  <a class="cat-yellow" >Python</a>
                </div>
              </div>
              <div class="details-inner">
                <div class="course-meta">
                  <div class="row">
                    <div class="col-6">
                      <img src="static/picture/14.png" alt="img">
                      开课中
                    </div>
                    <div class="col-6 text-right">
                      <img src="static/picture/23.png" alt="img">
                      17 周
                    </div>
                  </div>
                </div>
                <h4><router-link to="/outline">Python程序设计</router-link></h4>
                <div class="course-author mt-3">
                  <img src="static/image/p1.jpg" alt="img">
                  王普明
                </div>
                <div class="course-footer">
                  <div class="row">
                    <div class="col-6">
                      <div class="course-review">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="col-6 align-self-center text-right">
                      <a class="read-more-text" href="single-course.html">更多<i class="la la-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-course-inner text-left">
              <div class="thumb">
                <img src="static/img/A065FC17D39ACEB56C1A94FAF6A3F543.png" alt="img" style="height: 20vm; width: 30vm">
                <div class="cat-area">
                  <a class="cat-yellow" href="">C语言</a>
                </div>
              </div>
              <div class="details-inner">
                <div class="course-meta">
                  <div class="row">
                    <div class="col-6">
                      <img src="static/picture/14.png" alt="img">
                      开课中
                    </div>
                    <div class="col-6 text-right">
                      <img src="static/picture/23.png" alt="img">
                      18 周
                    </div>
                  </div>
                </div>
                <h4><a href="single-course.html">C语言程序设计</a></h4>
                <div class="course-author mt-3">
                  <img src="static/image/p1.jpg" alt="img">

                </div>
                <div class="course-footer">
                  <div class="row">
                    <div class="col-6">
                      <div class="course-review">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="col-6 align-self-center text-right">
                      <a class="read-more-text" href="single-course.html">更多<i class="la la-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-course-inner text-left">
              <div class="thumb">
                <img src="static\img\9a43d69e74974d8799c69cac51b0264c.png" alt="img">
                <div class="cat-area">
                  <a class="cat-yellow" href="">语言</a>
                </div>
              </div>
              <div class="details-inner">
                <div class="course-meta">
                  <div class="row">
                    <div class="col-6">
                      <img src="static/picture/14.png" alt="img">
                      已结课
                    </div>
                    <div class="col-6 text-right">
                      <img src="static/picture/23.png" alt="img">
                      18周
                    </div>
                  </div>
                </div>
                <h4><a href="single-course.html">儿童语言康复学</a></h4>
                <div class="course-author mt-3">
                  <img src="static/image/p1.jpg" alt="img">
                  张娜
                </div>
                <div class="course-footer">
                  <div class="row">
                    <div class="col-6">
                      <div class="course-review">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="col-6 align-self-center text-right">
                      <a class="read-more-text" href="single-course.html">更多<i class="la la-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-course-inner text-left">
              <div class="thumb">
                <img src="static\img\eeb7db8201f7472aa407b49c4f55ccb8.jpg" alt="img">
                <div class="cat-area">
                  <a class="cat-yellow" href="">大数据</a>
                </div>
              </div>
              <div class="details-inner">
                <div class="course-meta">
                  <div class="row">
                    <div class="col-6">
                      <img src="static/picture/14.png" alt="img">
                      尝试
                    </div>
                    <div class="col-6 text-right">
                      <img src="static/picture/23.png" alt="img">
                      2 周
                    </div>
                  </div>
                </div>
                <h4><a href="single-course.html">大数据解析与应用导论</a></h4>
                <div class="course-author mt-3">
                  <img src="static/image/p2.jpeg" alt="img">
                </div>
                <div class="course-footer">
                  <div class="row">
                    <div class="col-6">
                      <div class="course-review">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="col-6 align-self-center text-right">
                      <a class="read-more-text" href="single-course.html">更多<i class="la la-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-course-inner text-left">
              <div class="thumb">
                <img src="static\img\1ca2f2ec01ef4fa78ee2ff41034291a2.png" alt="img">
                <div class="cat-area">
                  <a class="cat-yellow" href="">交通系统</a>
                  <a class="cat-green" href="">仿真</a>
                </div>
              </div>
              <div class="details-inner">
                <div class="course-meta">
                  <div class="row">
                    <div class="col-6">
                      <img src="static/picture/14.png" alt="img">
                      尝试
                    </div>
                    <div class="col-6 text-right">
                      <img src="static/picture/23.png" alt="img">
                      3 周
                    </div>
                  </div>
                </div>
                <h4><a href="single-course.html">交通系统仿真与评价</a></h4>
                <div class="course-author mt-3">
                  <img src="static/image/p2.jpeg" alt="img">
                </div>
                <div class="course-footer">
                  <div class="row">
                    <div class="col-6">
                      <div class="course-review">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>

                      </div>
                    </div>
                    <div class="col-6 align-self-center text-right">
                      <a class="read-more-text" href="single-course.html">更多<i class="la la-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-course-inner text-left">
              <div class="thumb">
                <img src="static\img\5AC3BF1D94F215603F668A5129ECD7DE.jpg" alt="img">
                <div class="cat-area">
                  <a class="cat-yellow" href="">思维</a>
                  <a class="cat-green" href="">写作</a>
                </div>
              </div>
              <div class="details-inner">
                <div class="course-meta">
                  <div class="row">
                    <div class="col-6">
                      <img src="static/picture/14.png" alt="img">
                      尝试
                    </div>
                    <div class="col-6 text-right">
                      <img src="static/picture/23.png" alt="img">
                      5周
                    </div>
                  </div>
                </div>
                <h4><a href="single-course.html">逻辑思维与写作</a></h4>
                <div class="course-author mt-3">
                  <img src="static/image/p2.jpeg" alt="img">
                </div>
                <div class="course-footer">
                  <div class="row">
                    <div class="col-6">
                      <div class="course-review">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="col-6 align-self-center text-right">
                      <a class="read-more-text" href="single-course.html">更多<i class="la la-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav class="td-page-navigation text-center mb-5 mb-lg-0">
            <ul class="pagination">
              <li class="pagination-arrow"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
              <li><a href="#">1</a></li>
              <li><a class="active" href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="pagination-arrow"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
            </ul>
          </nav>
        </div>
      </div>
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
  name: "labList",
  data() {
    return {
      flag: false,
      user: {},
      examCode:20190007
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
    },
    toDetail() {
      this.$router.push({path: '/examMsg', query: {examCode: examCode}})
      console.log(examCode)
    },

  },
  computed:mapState(["isPractice","flag","leadermenu"])
}
</script>

<style scoped>
@import '../../../static/css/css.css';
@import '../../../static/css/responsive.css';
@import '../../../static/css/style.css';
@import '../../../static/css/vendor.css';
</style>
