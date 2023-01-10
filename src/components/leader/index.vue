// 展示组件页面
<template>
  <div id="index">
    <leaderheader class="topbar"></leaderheader>
    <section class="container">
      <div class="left_side">
        <leader-left></leader-left>
      </div>
      <div class="main_wrapper">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import leaderNav from "./leaderNav";
import leaderheader from "./leaderheader";
import leaderLeft from "./leaderLeft";
export default {
  components:{
    leaderheader:leaderheader,
    leaderNav:leaderNav,
    leaderLeft:leaderLeft,
  },
  data() {
    return {
      username: '遇白不散',
      active: [
        {
          index: '1',
          title: '课程信息统计',
          icon: 'icon-kechengbiao',
          // content:[{item1:'课程查询',path:'selectcourse'},{item2:'添加课程类型',path:'/addCourseType'}],
        },
        {
          index: '1',
          title: '课程教学视频统计',
          icon: 'icon-kechengbiao',
          // content:[{item1:'用户查询',path:'selectUser'}],
        },]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#index .nav {
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
.container {
  display: flex;
  background-color: #fff;
}
.main_wrapper {
  overflow: hidden;
  flex: 1;
  background-color: #fff;

}
</style>
