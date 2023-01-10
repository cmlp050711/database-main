<template>
  <div class="contact-area">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="title">发布实验</h2>
      </div>
      <div class="row">
        <div class=" align-self-center">
          <form class="contact-form-inner mt-md-0">
            <div class="row custom-gutters-20">
              <div class="col-lg-6">
                <label class="single-input-inner style-bg-border">
                  <input type="text" placeholder="实验名称">
                </label>
              </div>
              <div class="col-lg-6">
                <label class="single-input-inner style-bg-border">
                  <input type="text" placeholder="实验截至时间">
                </label>
              </div>
              <div class="col-12">
                <label class="single-input-inner style-bg-border">
                  <input type="text" placeholder="实验提交地点">
                </label>
              </div>
              <div class="col-12">
                <label class="single-input-inner style-bg-border">
                  <textarea placeholder="实验内容"></textarea>
                </label>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <el-button type="primary" style="border-radius: 5px" @click="onSubmit()">发布</el-button>
                <el-button type="danger" style="border-radius: 5px" @click="cancel()">取消</el-button>
<!--                <button class="publishButton">发布</button>-->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "labPublish"
}
</script>

<style scoped>
@import '../../../static/css/css.css';
@import '../../../static/css/responsive.css';
@import '../../../static/css/style.css';
@import '../../../static/css/vendor.css';

.title{
  font-weight: bold;
  color: #04468b;
}

.publishButton{
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #9fcdff;
}
</style>
