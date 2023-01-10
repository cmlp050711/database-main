<template>
  <el-container style="border: 1px solid #eee">
    <el-header style="text-align: left; font-size: 12px;  background-color: #c6e2ff; display: flex">
      <img src="static/picture/logo.png" alt="" style="width: 70px">
      <div style="font-size: x-large; color: gray" >在线学习平台</div>
      <el-dropdown style="margin-left: 1300px; font-size: large">
        <i class="el-icon-user-solid" style="margin-right: 15px;">吴道芬</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container>
      <el-aside width="400px" style="height: 700px; background-color: rgb(238, 241, 246)">
        <el-header style="background-color: white; height: 100px; line-height: 25px">
          <div style="display: flex; padding-top: 12px">
            <div style="align-items: center; justify-items: center;">
              <div style="padding-left: 25px; padding-right: 35px">
                <img src="static/picture/9.png" alt="" style="height: 50px; width: 50px">
              </div>
              <div style="padding-left: 17px">
                学前必读
              </div>
            </div>
            <div style="align-items: center; justify-items: center; ">
              <div style="padding-left: 25px; padding-right: 35px">
                <img src="static/picture/31.png" alt="">
              </div>
              <div style="padding-left: 17px">
                课程大纲
              </div>
            </div>
            <div style="align-items: center; justify-items: center; ">
              <div style="padding-left: 25px; padding-right: 35px">
                <img src="static/picture/41.png" alt="">
              </div>
              <div style="padding-left: 17px">
                课程资料
              </div>
            </div>
          </div>


        </el-header>
        <el-header style="background-color: #dae0e5;font-size: larger">目录</el-header>
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>第一章：软件架构设计概述</template>
            <el-menu-item-group>
              <!--            <template slot="title" >软件架构设计概述</template>-->
              <el-menu-item index="1-1">1.1 软件架构设计概述</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>第二章：GRASP设计原则</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">2.1 信息专家原则</el-menu-item>
              <el-menu-item index="2-2">2.2 创建者原则</el-menu-item>
              <el-menu-item index="2-2">2.3 低耦合原则</el-menu-item>
              <el-menu-item index="2-2">2.4 高内聚原则</el-menu-item>
              <el-menu-item index="2-2">2.5 控制器原则</el-menu-item>
              <el-menu-item index="2-2">2.6 多态原则</el-menu-item>
              <el-menu-item index="2-2">2.7 间接原则</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>第三章：面向对象设计原则</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">3.1 开闭原则</el-menu-item>
              <el-menu-item index="3-2">3.2 单一职责原则</el-menu-item>
              <el-menu-item index="3-2">3.3 依赖倒置原则</el-menu-item>
              <el-menu-item index="3-2">3.4 合成复用原则</el-menu-item>
              <el-menu-item index="3-2">3.5 接口隔离原则</el-menu-item>
              <el-menu-item index="3-2">3.6 迪米特原则</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>第四章：软件设计模式</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">4.1 抽象反射工厂模式</el-menu-item>
              <el-menu-item index="3-2">4.2 抽象组合反转模式</el-menu-item>
              <el-menu-item index="3-2">4.3 观察者模式</el-menu-item>
              <el-menu-item index="3-2">4.4 经典观察者模式</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="comment">
          <i class="el-icon-s-comment"></i>
        </div>
      </el-main>
    </el-container>


  </el-container>
</template>

<script>
export default {
  name: "outline",
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.comment {
  margin-top: 640px; width: auto; height: 40px;background-color: #80bdff;
}
</style>
