<template>
  <div id="nav">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="title">{{active.title}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="active.item1 != null">{{active.item1}}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="active.item2 != null">{{active.item2}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  data() {
    return {
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
      index1: null,
    }
  },
  computed: mapState(["sysmenu"]),
  methods: {
    // getIndex() {
    //   this.bus.$on('sendIndex',(data)=>{
    //     this.index1 = data
    //     this.active = this.sysmenu[data-1]
    //     // console.log(JSON.stringify(this.active)+'----')
    //   })
    // }
  },
  created() {
    // this.getIndex()
  },
  store
}
</script>

<style scoped>
#nav .el-breadcrumb {
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
}
#nav .el-breadcrumb .title{
  font-weight: bold;
}
</style>
