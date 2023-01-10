<!-- 添加课程类型 -->
<template>
  <div>
    <div class="contact-area">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="title" style="margin-top: 20px">添加课程类型</h2>
        </div>
        <div class="row">
          <div class=" align-self-center">
            <form class="contact-form-inner mt-md-0">
              <div class="row custom-gutters-20">
                <div class="col-lg-6"  ref="form">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="分类名称" v-model="form.source">
                  </label>
                </div>
                <div class="col-lg-6">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="先修课程" v-model="form.description">
                  </label>
                </div>
                <div class="col-12 d-flex justify-content-center">
                  <el-button type="primary" style="border-radius: 5px" @click="onSubmit()">发布</el-button>
                  <el-button type="danger" style="border-radius: 5px" @click="cancel()">取消</el-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      form: { //表单数据初始化
        source: null,
        description: null,
        institute: null,
        major: null,
        grade: null,
        examDate: null,
        totalTime: null,
        totalScore: null,
        type: null,
        tips: null,
        paperId: null,
      }
    };
  },
  methods: {
    formatTime(date) { //日期格式化
      console.log(date)
      return date;
    },
    onSubmit() {
      let examDate = this.formatTime(this.form.examDate)
      this.form.examDate = examDate.substr(0,10)
      this.$axios(`/api/examManagePaperId`).then(res => {
        this.form.paperId = res.data.data.paperId + 1 //实现paperId自增1
        this.$axios({
          url: '/api/exam',
          method: 'post',
          data: {
            ...this.form
          }
        }).then(res => {
          if(res.data.code === 200) {
            this.$message({
              message: '数据添加成功',
              type: 'success'
            })
            this.$router.push({path: '/selectcourse'})
          }
        })
      })
    },
    cancel() { //取消按钮
      this.form = {}
    },

  },

};
</script>

<style lang="scss" scoped>
@import '../../../static/css/css.css';
@import '../../../static/css/responsive.css';
@import '../../../static/css/style.css';
@import '../../../static/css/vendor.css';

.title{
  font-weight: bold;
  color: #04468b;
}
.add {
  padding: 0 40px;
  width: 400px;
}
</style>

