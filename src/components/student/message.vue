// 给我留言页面
<template>
  <div>
    <examHead></examHead>
    <div id="message">
      <div class="title"></div>
      <div class="wrapper">
        <div class="title1">
          <el-input
            placeholder="请输入帖子标题"
            v-model="title"
            clearable>
          </el-input>
        </div>
        <div class="content">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入帖子内容"
            v-model="content"
            clearable>
          </el-input>
        </div>
        <div class="btn">
          <el-button type="primary" @click="submit()">提交</el-button>
        </div>
        <div class="all">
          <ul class="msglist">
            <li class="list"
                @mouseenter="enter(index)"
                @mouseleave="leave(index)"
                v-for="(data,index) in msg" :key="index"
            >
              <p class="title"> <i class="iconfont icon-untitled33"></i>{{data.title}}</p>
              <p class="content">{{data.content}}</p>
              <p class="date"><i class="iconfont icon-date"></i>{{data.time}}</p>
              <div v-for="(replayData,index2) in data.replays" :key="index2">
                <p class="comment"><i class="iconfont icon-huifuxiaoxi"></i>{{replayData.replay}}</p>
              </div>
              <span class="replay" @click="replay(data.id)" v-if="flag && index === current">回复</span>
            </li>
          </ul>
        </div>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.current"
            :page-sizes="[5,10,20,50]"
            :page-size="pagination.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import examHead from "./examHead";
export default {
  components: {examHead},
  // name: 'message'
  data() {
    return {
      flag: false,
      current: 0,
      title: "",
      content: "",
      pagination: { //分页后的留言列表
        current: 1, //当前页
        total: null, //记录条数
        size: 4 //每页条数
      },
      msg: []
    }
  },
  created() {
    this.getMsg()
  },
  // watch: {

  // },
  methods: {
    getMsg() {
      this.$axios(`/api/messages/${this.pagination.current}/${this.pagination.size}`).then(res => {
        let status = res.data.code
        if(status === 200) {
          this.msg = res.data.data.records
          this.pagination = res.data.data
        }
      })
    },
    //改变当前记录条数
    handleSizeChange(val) {
      this.pagination.size = val
      this.getMsg()
    },
    //改变当前页码，重新发送请求
    handleCurrentChange(val) {
      this.pagination.current = val
      this.getMsg()
    },
    // formatTime(date) { //日期格式化
    //   let year = date.getFullYear()
    //   let month= date.getMonth()+ 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    //   let day=date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    //   let hours=date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //   let minutes=date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //   let seconds=date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //   // 拼接
    //   return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
    // },
    submit() {
      let date = new Date()
      if(this.title.length === 0 || this.content.length === 0) { //非空判断
        this.$message({
          type: 'error',
          message: '帖子标题或内容不能为空',
        })
       } else {
      this.$axios({
        url: "/api/message",
        method: "post",
        data: {
          title: this.title,
          content: this.content,
          time: date
        }
      }).then(res => {
        let code = res.data.code
        if(code === 200) {
          this.$message({
            type: "success",
            message: "发帖成功"
          })
        }
        this.getMsg()
      })
    }
      this.title = ""
      this.content = ""
      this.getMsg()
    },
    replay(messageId) { //回复留言功能
      this.$prompt('回复帖子', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
        inputErrorMessage: '回复不能为空'
      }).then(({ value }) => {
        let date = new Date()
        console.log(messageId)
        this.$axios({
          url: '/api/replay',
          method: 'post',
          data: {
            replay: value,
            replayTime: date,
            messageId: messageId
          }
        }).then(res => {
          this.getMsg()
        })
        this.$message({
          type: 'success',
          message: '回复成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    enter(index) {
      this.flag = true
      this.current = index
    },
    leave(index) {
      this.flag = false;
      this.current = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
}
#message {
  width: 1080px;
  margin: 0 auto;
}
.title {
  margin: 60px;
}
.content {
  padding: 50px 0;
}
#message  {
  .btn {
   padding-bottom: 20px;
  }
  .all {
    .date {
      color: rgb(80, 157, 202);
      line-height: 45px;
      font-size: 13px;
    }
    .list {
      background-color: #cce5ff;
      //opacity: 0.3;
      padding:10px;
      border-radius: 4px;
      margin: 10px 0;
      position: relative;
      transition: all .3s ease;
      .title {
        color: #5f5f5f;
        margin: 0;
        font-size: 13px;
        line-height: 30px;
      }
      .content {
        padding: 0;
      }
      .icon-untitled33 {
        font-size: 13px;
        margin-right: 4px;
      }
      .icon-date {
        font-size: 13px;
        margin-right: 4px;
        color: rgb(80, 157, 202);
      }
      .replay {
        position: absolute;
        font-weight: bold;
        right: 30px;
        bottom: 15px;
        color: #005cbf;
        cursor: pointer;
        transition: all .3s ease;
      }
      .comment {
        margin:-7px 0px;
        padding-bottom: 12px;
        font-size: 13px;
        color: #28b2b4;
        i {
          margin-right: 4px;
        }
      }
    }
  }
}
#message .wrapper {
  background-image: url("../../../static/image/3.png");
  padding: 30px;
  border-radius: 10px;

}
</style>
