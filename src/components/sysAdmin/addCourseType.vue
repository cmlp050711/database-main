<!-- 添加课程类型 -->
<template>
  <div>
    <div class="contact-area">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="title" style="margin-top: 20px">添加课程类型</h2>
        </div>
        <div class="col">
          <div class=" align-self-center">
            <form class="contact-form-inner mt-md-0">
              <div class="row custom-gutters-20 pb-5">
                <div class="col-lg-6"  ref="form">
                    <el-input type="text" placeholder="分类名称" v-model="form.categoryName">
                    </el-input>
                </div>
                    <div class="box">
                      <div class="selectBox">
                        <el-select v-model="form.pid" filterable placeholder="所属类别" @change="choiceOn">
                          <el-option-group>
                            <el-option value="理科">理科</el-option>
                            <el-option value="工科">工科</el-option>
                            <el-option value="艺术">艺术</el-option>
                            <el-option value="文科">文科</el-option>
                          </el-option-group>
                        </el-select>
                      </div>
                    </div>
                    <div class="box">
                      <div class="selectBox">
                        <el-select v-model="dzbhModel" filterable placeholder="选择子类别" @change="choiceOn">
                          <el-option-group>
                            <el-option value="建筑">建筑</el-option>
                            <el-option value="计算机系">计算机系</el-option>
                            <el-option value="自动化">自动化</el-option>
                          </el-option-group>
                        </el-select>
                      </div>
                    </div>
                <div class="col-12 d-flex justify-content-center pt-5">
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
        createTime: null,
        updateTime: null,
        deletedTime: null,
        isDeleted: 0,
        categoryName: null,
        pid: null
      },
      dzbhModel: "", //下拉框绑定的model
      options:[],
      course:[
        {
          name: "C语言程序设计",
          dzbh: "专业必修",
          latitude: "142.84",
          longitude: "23.745",
          jgds: "178575.32",
        },
        {
          name: "C++程序设计",
          dzbh: "专业选修",
          latitude: "142.84",
          longitude: "23.745",
          jgds: "178575.32",
        },
        {
          name: "ps",
          dzbh: "素选",
          latitude: "142.84",
          longitude: "23.745",
          jgds: "178575.32",
        },
      ],
    };
  },
  methods: {
    onSubmit(){
      alert("课程类型添加成功")
    },
    mounted() {
      this.portData(); //模拟调用接口
    },
    portData() {
      //循环取下拉框的数据
      this.options = this.course.map((item) => {
        return {value: item.dzbh, label: item.dzbh};
      })},
    loadType(){
      this.$axios({
        url:'http://localhost:8080/category/findAll',
        method:'get',
      }).then(res =>{
        this.option = res.data
        console.log(res.data)
      })
    },
    choiceOn(value) {
      // if(typeof value !== 'string'){
      //   value = value.toString().split( ',');
      // }
      // let idx = "";
      // this.course.map((item, index) => {
      //   if (item.dzbh == value) {
      //     idx = index;
      //   }
      // });
      // this.particularsDAta = this.course[idx];
      this.$axios(`/api/exams/${this.pagination.current}/${this.pagination.size}`).then(res => {
        this.pagination = res.data.data
      }).catch(error => {
      })
    },


    // onSubmit() {
    //   this.form.deletedTime = new date();
    //   this.$axios({
    //     url:'http://localhost:8080/category/save',
    //     method:'post',
    //     data:{
    //       ...this.form
    //     }
    //   }).then(res => {
    //     if(res.data.code === 200) {
    //       this.$message({
    //         message: '数据添加成功',
    //         type: 'success'
    //       })
    //       this.$router.push({path: '/selectcourse'})
    //     }
    //   })
    // },
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
.box{
  padding-right: 30px;
}
</style>

