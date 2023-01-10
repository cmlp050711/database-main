//查询所有课程信息
<template>
  <div class="exam">
    <el-table :data="course" style="width: 100%" height=75vh  :cell-style="cellStyle" :header-cell-style="rowClass" >
      <el-table-column fixed="left" prop="name" label="课程名称" width="180"></el-table-column>
      <el-table-column prop="target" label="课程目标" width="200"></el-table-column>
      <el-table-column prop="teacherName" label="教师姓名" width="120"></el-table-column>
      <el-table-column prop="summary" label="课程摘要" width="200"></el-table-column>
<!--      <el-table-column prop="grade" label="年级" width="100"></el-table-column>-->
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="primary" size="small">编辑</el-button>
          <el-button @click="deleteRecord(scope.row.id)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.current"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pagination.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total" class="page">
    </el-pagination>
    <!-- 编辑对话框-->
    <el-dialog
      title="编辑课程信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <section class="update">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="课程编号">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="课程名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="课程目标">
            <el-input v-model="form.target"></el-input>
          </el-form-item>
          <el-form-item label="教师姓名">
            <el-input v-model="form.teacherName"></el-input>
          </el-form-item>
          <el-form-item label="课程摘要">
            <el-input v-model="form.summary"></el-input>
          </el-form-item>
        </el-form>
      </section>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}, //保存点击以后当前试卷的信息
      pagination: { //分页后的考试信息
        current: 0, //当前页
        total: null, //记录条数
        size: 10//每页条数
      },
      course:[],
      dialogVisible: false
    }
  },
  created() {
    this.getExamInfo()
  },
  methods: {
    cellStyle({row,column,rowIndex,columnIndex}){
      return "text-align:center";
    },
    rowClass({row,rowIndex}){
      return "text-align:center";
    },
    edit(id) { //编辑试卷
      this.dialogVisible = true
      this.$axios("http://localhost:8080/course/findById?id="+id).then(res => { //根据试卷id请求后台
        if(res.data.code == 200) {
          this.form = res.data.message.content
        }
      })
    },
    handleClose(done) { //关闭提醒
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        }).catch(_ => {});
    },
    submit() { //提交修改后的试卷信息
      this.dialogVisible = false
      this.$axios({
        url: "http://localhost:8080/course/update",
        method: 'post',
        data: {
          ...this.form
        }
      }).then(res => {
        if(res.data.code == 200) {
          this.$message({ //成功修改提示
            message: '更新成功',
            type: 'success'
          })
        }
        this.getExamInfo()
      })
    },
    deleteRecord(id) {
      this.$confirm("确定删除该记录吗,该操作不可逆！！！","删除提示",{
        confirmButtonText: '确定删除',
        cancelButtonText: '算了,留着',
        type: 'danger'
      }).then(()=> { //确认删除
        console.log(id)
        this.$axios({
          url: "http://localhost:8080/course/delete?id="+id,
          method: 'get',
        }).then(res => {
          // console.log(res.data)
          this.getExamInfo()
        })
      }).catch(() => {

      })
    },


    getExamInfo() { //分页查询所有试卷信息
      console.log(this.pagination.current)
      console.log(this.pagination.size)
      this.$axios("http://localhost:8080/course/findAll?page="+this.pagination.current+"&size="+this.pagination.size).then(res => {
        console.log(res.data)
        this.course = res.data.message.content
        this.pagination.size = res.data.message.pageable.pageSize
        this.pagination.current = res.data.message.pageable.pageNumber
        console.log("1")
      }).catch(error => {
      })
    },


    //改变当前记录条数
    handleSizeChange(val) {
      this.pagination.size = val
      this.getExamInfo()
    },
    //改变当前页码，重新发送请求
    handleCurrentChange(val) {
      this.pagination.current = val
      this.getExamInfo()
    },
  },
};
</script>
<style lang="scss" scoped>
.exam {
  padding: 0px 40px;
  .page {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edit{
    margin-left: 20px;
  }
}
</style>
