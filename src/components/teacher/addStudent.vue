<!-- 添加学生 -->
<template>
  <div>
    <div class="contact-area">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="title">添加学生</h2>
        </div>
        <div class="row">
          <div class=" align-self-center">
            <form class="contact-form-inner mt-md-0">
              <div class="row custom-gutters-20">
                <div class="col-lg-4"  ref="form">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="姓名" v-model="form.studentName">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="性别" v-model="form.sex">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="学院" v-model="form.institute">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="专业" v-model="form.major">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="年级" v-model="form.grade">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="电话号码" v-model="form.tel">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="身份证号" v-model="form.cardId">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="邮箱" v-model="form.email">
                  </label>
                </div>
                <div class="col-lg-4">
                  <label class="single-input-inner style-bg-border">
                    <input type="text" placeholder="密码" v-model="form.pwd">
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
<!--  <section class="add">-->
<!--    <el-form ref="form" :model="form" label-width="80px">-->
<!--      <el-form-item label="姓名">-->
<!--        <el-input v-model="form.studentName"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="性别">-->
<!--        <el-input v-model="form.sex"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="学院">-->
<!--        <el-input v-model="form.institute"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="所属专业">-->
<!--        <el-input v-model="form.major"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="年级">-->
<!--        <el-input v-model="form.grade"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="班级">-->
<!--        <el-input v-model="form.clazz"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="电话号码">-->
<!--        <el-input v-model="form.tel"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="身份证号">-->
<!--        <el-input v-model="form.cardId"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="邮箱">-->
<!--        <el-input v-model="form.email"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码">-->
<!--        <el-input v-model="form.pwd"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSubmit()">立即创建</el-button>-->
<!--        <el-button type="text" @click="cancel()">取消</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </section>-->
</template>

<script>
export default {
  data() {
    return {
      form: { //表单数据初始化
        studentName: null,
        grade: null,
        major: null,
        clazz: null,
        institute: null,
        tel: null,
        email: null,
        pwd: null,
        cardId: null,
        sex: null,
        role: 2
      }
    };
  },
  methods: {
    onSubmit() { //数据提交
      this.$axios({
        url: '/api/student',
        method: 'post',
        data: {
          ...this.form
        }
      }).then(res => {
        if(res.data.code == 200) {
          this.$message({
            message: '数据添加成功',
            type: 'success'
          })
          this.$router.push({path: '/studentManage'})
        }
      })
    },
    cancel() { //取消按钮
      this.form = {}
    },

  }
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

