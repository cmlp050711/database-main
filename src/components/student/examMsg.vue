// 点击试卷后的缩略信息
<template>
  <div class="wrapper">
    <examHead></examHead>
<!--    <div id="msg">-->
      <div>
        <ul class="top">
          <li class="example">{{examData.source}}</li>
          <li class="right">
            <div>
              <span class="count">总分</span>
              <span class="score">{{score[0]+score[1]+score[2]}}</span>
            </div>
          </li>
        </ul>

        <ul class="bottom">
          <li>考试时间：{{examData.examDate}}</li>
          <li>{{examData.institute}}</li>
          <li class="btn">{{examData.type}}</li>
          <li class="right"><el-button @click="toAnswer(examData.examCode)">开始答题</el-button></li>
        </ul>
        <ul class="info">
          <li @click="dialogVisible = true"><a href="javascript:"><i class="iconfont icon-info" style="color: #97b3d0; margin-left: 1vw"></i>考生须知</a></li>
        </ul>

      </div>
      <div class="content">
        <el-collapse v-model="activeName" >
          <el-collapse-item class="header" name="0">
            <template slot="title" class="stitle" >
              <div class="title">
<!--                <span>{{examData.source}}</span><i class="header-icon el-icon-info"></i>-->
                <span class="time">总分-{{examData.totalScore}}分 & 限时-{{examData.totalTime}}分钟</span>
                <el-button type="info" plain size="small">点击查看试题详情</el-button>
              </div>
            </template>
            <el-collapse class="inner">
              <el-collapse-item>
                <template slot="title">
                  <div class="titlei">选择题 (共{{topicCount[0]}}题 共计{{score[0]}}分)</div>
                </template>
              </el-collapse-item>
              <el-collapse-item>
                <template slot="title">
                  <div class="titlei">填空题 (共{{topicCount[1]}}题  共计{{score[1]}}分)</div>
                </template>
              </el-collapse-item>
              <el-collapse-item>
                <template slot="title">
                  <div class="titlei">判断题 (共{{topicCount[2]}}题 共计{{score[2]}}分)</div>
                </template>

              </el-collapse-item>

            </el-collapse>
          </el-collapse-item>

        </el-collapse>
      </div>

      <!--考生须知对话框-->
      <el-dialog
        title="考生须知"
        :visible.sync="dialogVisible"
        width="30%">
        <span>{{examData.tips}}</span>
        <span slot="footer" class="dialog-footer">
        <el-button style="background-color: #97b3d0" @click="dialogVisible = false">知道了</el-button>
      </span>
      </el-dialog>
    </div>
<!--  </div>-->

</template>

<script>
import examHead from "./examHead";
export default {
  components: {
    examHead
  },
  data() {
    return {
      dialogVisible: false, //对话框属性
      activeName: '0',  //默认打开序号
      topicCount: [],//每种类型题目的总数
      score: [],  //每种类型分数的总数
      examData: { //考试信息
        // source: null,
        // totalScore: null,
      },
      topic: {  //试卷信息

      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    //初始化页面数据
    init() {
      let examCode = this.$route.query.examCode //获取路由传递过来的试卷编号
      this.$axios(`/api/exam/${examCode}`).then(res => {  //通过examCode请求试卷详细信息
        res.data.data.examDate = res.data.data.examDate.substr(0,10)
        this.examData = { ...res.data.data}
        let paperId = this.examData.paperId
        this.$axios(`/api/paper/${paperId}`).then(res => {  //通过paperId获取试题题目信息
          this.topic = {...res.data}
          let keys = Object.keys(this.topic) //对象转数组
          keys.forEach(e => {
            let data = this.topic[e]
            this.topicCount.push(data.length)
            let currentScore = 0
            for(let i = 0; i< data.length; i++) { //循环每种题型,计算出总分
              currentScore += data[i].score
            }
            this.score.push(currentScore) //把每种题型总分存入score
          })
        })
      })
    },
    toAnswer(id) {
      this.$router.push({path:"/answer",query:{examCode: id}})
    },
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  .right{
    .el-button{
      margin-right: 2vw;
      color: white;
      border-color: #c6e2ff;
      background-color: #409EFF;;
    }
  }
}

.wrapper {
  padding: 2vm;
  background-image: url("../../../static/image/31.png");
}
.right {
  margin-left: auto;
}
.inner .contenti .question {
  margin-left: 40px;
  color: #9a9a9a;
  font-size: 14px;
}
.content .inner .titlei {
  color: #97b3d0;
  margin-left: 20px;
  font-size: 16px;
  //color: #88949b;
  font-weight: bold;
}
.content .title .time {
  color: #005cbf;
  font-size: 15px;
  font-weight: bold;
  margin-left:550px;

  //color: #999;
}
.content .stitle {
  background-color: #0195ff;
}
.content .title span {
  margin-right: 10px;
}
.content .title {
  font-size: 20px;
  margin: 0;
  display: flex;
  align-items: center;
}
.content {
  margin-top: 20px;
  background-image: url("../../../static/image/31.png");
}
.content .header {
  padding: 10px 30px;
}

.wrapper .info {
  margin: 20px 0 0 20px;
  border-top: 1px solid #eee;
  padding: 20px 0 10px 0;
}
.wrapper .info a {
  color: #88949b;
  font-size: 14px;
}
.wrapper .info a:hover {
  color: #0195ff;
}
.wrapper .bottom .btn {
  background-color: #97b3d0;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  border: #88949b;
  border-radius: 4px;
}
.wrapper .bottom {
  display: flex;
  margin-left: 35px;
  color: #999;
  font-size: 14px;
  align-items: center;
}

.wrapper .bottom li {
  margin-right: 14px;
}

.wrapper .top {
  display: flex;
  margin: 20px;
  padding: 2vh;
  align-items: center;
}
.wrapper .top .right {
  margin-left: auto;
}
.wrapper .top .example {
  color: #333;
  font-size: 22px;
  font-weight: 700;
}
.wrapper .top li i {
  margin-left: 20px;
  color: #88949b;
}
.wrapper .right .count {
  margin-right: 1250px;
  color: #fff;
  padding: 4px 10px;
  background-color: #88949b;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #88949b;
}
.wrapper .right .score {
  position: absolute;
  left: 53px;
  top: -5px;
  padding: 1px 12px;
  font-size: 20px;
  color: #88949b;
  border: 1px dashed #88949b;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: bold;
}
.wrapper .right div {
  position: relative;
}
</style>
