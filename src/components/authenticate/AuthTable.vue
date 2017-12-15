<template>
    <div>
    <!-- 表格 -->
    <el-table
      :data="data">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="总机号"
        width="180">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <el-button
          type="primary"
          size="mini">
          未认证
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="time"
        label="认证时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
          @click.native.prevent="showinfo(scope.$index, data)"
          type="text"
          size="small">
          查看认证详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
    background
    layout="prev, pager, next"
    prev-text="上一页"
    next-text="下一页"
    :total="1000">
    </el-pagination>
    </div>
</template>

<script>
export default {
  name: "Tabtable",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    showinfo(index, rows) {
      console.log(index);
      console.log(rows);
      this.$router.push({ name: "authinfo", params: { userId: index } });
    }
  }
};
</script>

<style scoped>

</style>