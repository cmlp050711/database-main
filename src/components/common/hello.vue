<template>
  <section class="index">
    <div class="hello">
      <span>亲爱的{{user.userName}}老师，欢迎来到python实验教学管理系统</span><i class="iconfont icon-xihuan"></i>
    </div>
    <div class="msg">
      <img src="static/img/welcome.png" alt="" style="padding-left: 300px; margin-top: 50px">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: { //用户信息
        userName: null,
        userId: null
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() { //获取用户信息
      let userName = this.$cookies.get("cname")
      let userId = this.$cookies.get("cid")
      this.user.userName = userName
      this.user.userId = userId
    },
    // openMsg() {
    //   this.$alert('留言功能已开通，请管理员认真查看用户对本系统的留言','留言功能已开通',{
    //     confirmButtonText: '确定'
    //   })
    // },
    // openMsg2() {
    //   this.$alert('试题难度下降','试题难度下降',{
    //     confirmButtonText: '确定'
    //   })
    // },
    // openMsg3() {
    //   this.$alert('测试','测试',{
    //     confirmButtonText: '确定'
    //   })
    // },
  }
}
</script>


<style lang="scss" scoped>
.index {
  margin-left: 70px;
  .hello {
    font-size: 26px;
    color: darkslategrey;
    padding-left: 300px;
    padding-top: 60px;
    .icon-xihuan {
      font-size: 30px;
      color: #dd6572;
    }
  }
  .msg {
    .title {
      font-size: 16px;
      color: #000;
      margin-top: 50px;
      margin-left: 100px;
    }
    ul {
      display: flex;
      flex-direction: column;
      width: 200px;
      overflow: hidden;
    }
    li {
      margin-top: 10px;
      font-size: 14px;
      color: lightcoral;
      cursor: pointer;
      display: inline-block;
    }
  }
}
</style>

