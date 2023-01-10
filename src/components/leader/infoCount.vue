<template>
  <div>
  <div class="top" >
    <span class="title">&nbsp;&nbsp;课程信息统计</span>
  </div>
    <div class="outerBox">
      <el-card class="box-card">
        <div class="selectBox">
          <div>选择类型：</div>
            <el-select v-model="dzbhModel" filterable placeholder="请选择" @change="choiceOn">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
          <el-table :data="pagination.records" style="width: 100%" height=75vh  >
            <el-table-column fixed="left" prop="source" label="课程名称" width="180"></el-table-column>
            <el-table-column prop="description" label="教师姓名" width="200"></el-table-column>
            <el-table-column prop="institute" label="所属机构" width="120"></el-table-column>
            <el-table-column prop="major" label="课程类型" width="200"></el-table-column>
          </el-table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagination: { //分页后的考试信息
        current: 1, //当前页
        total: null, //记录条数
        size: 10//每页条数
      },
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
      // 模拟数据
      dzbhModel: "", //下拉框绑定的model
      particularsDAta: {}, //展示的数据
    };
  },
  mounted() {
    this.portData(); //模拟调用接口
  },
  methods: {
    cellStyle({row,column,rowIndex,columnIndex}){
      return "text-align:center";
    },
    rowClass({row,rowIndex}){
      return "text-align:center";
    },
    //change事件匹配对应数据
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

    //模拟接口
    portData() {
      //循环取下拉框的数据
      this.options = this.course.map((item) => {
        return {value: item.dzbh, label: item.dzbh};
      });
      // 默认展示数据和下拉框中的默认赋值
      // this.particularsDAta = this.course[0];
      // this.dzbhModel = this.course[0].dzbh;

    }},
};
</script>


<style scoped>
.outerBox {
  width: 100%;
}
.selectBox {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.selectBox div:first-child {
  font-weight: bold;
}
::v-deep .el-descriptions--medium.is-bordered .el-descriptions-item__cell {
  width: 50%;
  text-align: center;
}
.title {
  background: linear-gradient(to right, rgb(119,0,255) 10%,#9000ff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-top: 20px;

}
.top {
  font-size: 30px;
  color: #0d91f0;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
</style>
