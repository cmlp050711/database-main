// 展示组件页面
<template>
  <div id="index">
    <sysheader class="topbar"></sysheader>
    <section class="container">
      <div class="left_side">
        <sysMainLeft></sysMainLeft>
      </div>
      <div class="main_wrapper">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import sysheader from "../common/sysheader";
import sysNav from "../common/sysNav";
import sysMainLeft from "../common/sysMainLeft";
export default {
  components:{
    sysheader:sysheader,
    sysMainLeft:sysMainLeft,
    sysNav: sysNav
  },
  data() {
    return {
      username: '遇白不散',
      active: [{
        index: '1',
        title: '管理课程类型',
        icon: 'icon-kechengbiao',
        content:[{item1:'课程查询',path:'selectExam'},{item2:'添加课程',path:'/addExam'}],
      },
        {
          index: '1',
          title: '用户状态管理',
          icon: 'icon-kechengbiao',
          content:[{item1:'用户查询',path:'selectExam'}],
        },],
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
