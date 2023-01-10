<template>
  <div>
    <div class="contact-area">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="title">添加课程</h2>
        </div>
        <div class="row">
          <div class=" align-self-center">
            <form class="contact-form-inner mt-md-0">
              <div class="row custom-gutters-20">
                <div class="col-lg-6"  ref="form">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="课程名称" v-model="form.name">
                  </label>
                </div>
                <div class="col-lg-6">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="课程分类" v-model="form.categoryId">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="教师姓名" v-model="form.teacherName">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="所属机构" v-model="form.organ">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="教学目标" v-model="form.target">
                  </label>
                </div>
                <div class="col-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="设计原则" v-model="form.principle" >

                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <textarea placeholder="教师介绍" v-model="form.teacherIntroduce"></textarea>
                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="课程摘要" v-model="form.summary">
                  </label>
                </div>
                <div class="col-12">
                  <label class="single-input-inner style-bg-border">
                    <textarea placeholder="课程背景" v-model="form.background"></textarea>
                  </label>
                </div>
                <div class="col-12 d-flex justify-content-center">
                  <el-button type="primary" style="border-radius: 5px" @click="onSubmit()">添加</el-button>
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
        name:null,
        organ:null,
        teacherId:null,
        background:null,
        target:null,
        principle:null,
        teacherName:null,
        teacherIntroduce:null,
        summary:null,
        categoryId:null,
        createTime:null
      }
    };
  },
  methods: {
    formatTime(date) { //日期格式化
      console.log(date)
      return date;
    },
    onSubmit() {
      alert("课程添加成功")
      // this.form.createTime = "2023-1-1"
      // this.$axios({
      //     url: 'http://localhost:8080/course/save',
      //     method: 'post',
      //     data: {
      //       ...this.form
      //     }
      //   }
      // ).then(res => {
      //     if(res.data.code === 200) {
      //       this.$message({
      //         message: '数据添加成功',
      //         type: 'success'
      //       })
      //       alert("数据添加成功")
      //       this.$router.push({path: '/selectExam'})
      //     }
      //   })
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

