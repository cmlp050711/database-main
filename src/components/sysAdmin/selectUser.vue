//查询所有考试
<template>
  <div class="exam">
    <el-table :data="pagination.records" style="width: 100%" height=75vh  :cell-style="cellStyle" :header-cell-style="rowClass" >
      <el-table-column fixed="left" prop="source" label="用户名" width="180"></el-table-column>
      <el-table-column prop="description" label="真实姓名" width="200"></el-table-column>
      <el-table-column prop="institute" label="所属学院" width="120"></el-table-column>
      <el-table-column prop="major" label="电话号码" width="200"></el-table-column>
      <el-table-column prop="grade" label="用户状态" width="100"></el-table-column>
      <el-table-column  label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.examCode)" type="primary" size="small">冻结</el-button>
          <el-button @click="deleteRecord(scope.row.examCode)" type="danger" size="small">解冻</el-button>
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
      title="编辑试卷信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <section class="update">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="课程名称">
            <el-input v-model="form.source"></el-input>
          </el-form-item>
          <el-form-item label="介绍">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="所属学院">
            <el-input v-model="form.institute"></el-input>
          </el-form-item>
          <el-form-item label="所属专业">
            <el-input v-model="form.major"></el-input>
          </el-form-item>
          <el-form-item label="考生提示">
            <el-input type="textarea" v-model="form.tips"></el-input>
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
        current: 1, //当前页
        total: null, //记录条数
        size: 10//每页条数
      },
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
    //冻结
    edit(examCode) { //编辑试卷
      this.$confirm('确认冻结？')
        .then(_ => {
          done();
        }).catch(_ => {});
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
        url: '/api/exam',
        method: 'put',
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
    //解冻
    deleteRecord(examCode) {
      this.$confirm("确定解冻吗？","删除提示",{
        confirmButtonText: '确定解冻',
        cancelButtonText: '继续冻结',
        type: 'danger'
      }).then(_ => {
        done();
      }).catch(_ => {});
      //   .then(()=> { //确认删除
      //   this.$axios({
      //     url: `/api/exam/${examCode}`,
      //     method: 'delete',
      //   }).then(res => {
      //     this.getExamInfo()
      //   })
      // }).catch(() => {
      //
      // })
    },
    getExamInfo() { //分页查询所有试卷信息
      this.$axios(`/api/exams/${this.pagination.current}/${this.pagination.size}`).then(res => {
        this.pagination = res.data.data
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
