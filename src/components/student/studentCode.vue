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
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container" style="margin-top: 130px">
        <a class="navbar-brand"  style="font-weight: bold; color: #9000ff; margin-left: -15px">代码在线运行工具</a>
      </div>
    </nav>
    <div class="container shadow p-4 mb-5 bg-white rounded">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2" style="margin-left: -14px">
            <select onchange="selectLanguage(this)" id="language-type" class="form-control">
              <option selected>Java</option>
              <option>C</option>
              <option>CPP</option>
              <option>Python</option>
            </select>
          </div>
          <div class="col-2">
            <el-button type="success" size="mini" @click="formatCode()" style="border-radius: 5px">格式化</el-button>
          </div>
        </div>
      </div>
      <div style="height: 20px"></div>

      <div class="row">
        <div class="col-6 border border-light">
          <div id="editor"></div>
        </div>
        <div class="col text-center" style="margin-left: 60px">
          <textarea id="output" class="form-control" rows="15"></textarea>
        </div>
      </div>

      <div class="row" style="margin-left: 392px">
        <div class="col-2">
          <el-button type="primary" size="mini" @click="submit()" style="border-radius: 5px; margin-top: 10px">运行</el-button>
        </div>
        <div class="col-2" style="margin-left: -30px">
          <el-button type="danger" size="mini" @click="clean()" style="border-radius: 5px; margin-top: 10px">重置</el-button>
        </div>
      </div>

    </div>
  </div>
</template>



<script>
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import examHead from "./examHead";
import {mapState} from "vuex";
export default {
  name: "studentCode",
  components:{
    examHead
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
    submit() {
      ace.require("ace/ext/language_tools");
      const editor = ace.edit("editor");
      editor.session.setMode("ace/mode/java");
      editor.setTheme("ace/theme/github");
      // enable autocompletion and snippets
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      });
      document.querySelector("#output").value = "代码运行中！";
      let data = editor.getValue();
      const that = this;
      that.$axios.post('http://localhost:8081/run',
        JSON.stringify({
          code: data,
          type: document.querySelector("#language-type").value.toUpperCase()
        }),
        {
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        },
      }).then(response => {
        response=response.data
        document.querySelector("#output").value = response.output;
      })

      // body: JSON.stringify({
      //   code: data,
      //   type: document.querySelector("#language-type").value.toUpperCase()
      // })
    },
    clean() {
      ace.require("ace/ext/language_tools");
      const editor = ace.edit("editor");
      editor.session.setMode("ace/mode/java");
      editor.setTheme("ace/theme/github");
      // enable autocompletion and snippets
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      });
      editor.setValue("");
    },
    formatCode() {
      ace.require("ace/ext/language_tools");
      const editor = ace.edit("editor");
      var jsbOpts = {
        indent_size : 4
      };
      // editor.getSession().setMode("ace/mode/java");
      editor.session.setMode("ace/mode/java");
      editor.setTheme("ace/theme/github");
      // enable autocompletion and snippets
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      });
      var session = editor.getSession();
      session.setValue(js_beautify(session.getValue(), jsbOpts));
    },

    selectLanguage(e) {
      ace.require("ace/ext/language_tools");
      const editor = ace.edit("editor");
      editor.session.setMode("ace/mode/java");
      editor.setTheme("ace/theme/github");
      // enable autocompletion and snippets
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
      });
      let mode = "ace/mode/" + e.value.toLowerCase();
      if (e.value.toLowerCase() === "c" || e.value.toLowerCase() === "cpp") {
        mode = "ace/mode/c_cpp"
      }
      editor.session.setMode(mode);
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

#editor {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid gainsboro;
  font-size: larger;
}
</style>
