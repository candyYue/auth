<template>
    <div>
        <h3>来电显示信息</h3>
        <hr>
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="企业名称：">
                <span>易米云通</span>
            </el-form-item>
            <el-form-item label="总机号：">
                <span>025-66699808</span>
            </el-form-item>
            <el-form-item label="直线号码：">
                <span>025-66687666</span>
            </el-form-item>
            <el-form-item label="企业宣传语：">
                <span>让企业沟通更轻松，让企业沟通更轻松，轻松</span>
            </el-form-item>
        </el-form>

        <h3>资质信息</h3>
        <hr>
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="企业名称：">
                <span>易米云通</span>
            </el-form-item>
            <el-form-item label="企业证件：">
                <span>025-66699808</span>
            </el-form-item>
            <el-form-item label="企业证件号码：">
                <span>025-66687666</span>
            </el-form-item>
            <el-form-item label="企业负责人：">
                <span>让企业沟通更轻松让企业沟通更轻松轻松</span>
            </el-form-item>
            <el-form-item label="负责人证件：">
                <span>让企业沟通更轻松让企业沟通更轻松轻松</span>
            </el-form-item>
            <el-form-item label="负责人证件号码：">
                <span>让企业沟通更轻松让企业沟通更轻松轻松</span>
            </el-form-item>
            <el-form-item label="负责人姓名：">
                <span>让企业沟通更轻松让企业沟通更轻松轻松</span>
            </el-form-item>
            <el-form-item label="其他资质：">
                <span>让企业沟通更轻松让企业沟通更轻松轻松</span>
            </el-form-item>
            <el-form-item label="联系方式：">
                <span>让企业沟通更轻松让企业沟通更轻松轻松</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">审核通过</el-button>
              <el-button type="danger" @click="Unqualified = true">不合格</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="CancellAuth = true">取消认证</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">审核通过</el-button>
            </el-form-item>
        </el-form>

        <!-- 不合格弹窗 -->
        <el-dialog
            title="不合格原因"
            :visible.sync="Unqualified"
            width="30%"
            :before-close="handleClose"
            :close-on-press-escape="false" 
            :close-on-click-modal="false">
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入不合格原因，3个字以上，比如：包含敏感词等"
                v-model="textarea">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="Unqualified = false" :disabled="textarea==''?true:false">确 定</el-button>
                <el-button @click="Unqualified = false">取 消</el-button>
            </span>
        </el-dialog>

        <!-- 取消认证弹窗 -->
        <el-dialog
            title="取消认证"
            :visible.sync="CancellAuth"
            width="30%"
            :before-close="handleClose"
            :close-on-press-escape="false" 
            :close-on-click-modal="false">
            <p>取消认证后，该企业的信息将无法在被叫用户手机上展示。</p>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="CancellAuth = false">确 定</el-button>
                <el-button @click="CancellAuth = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: []
      },
      Unqualified: false,
      CancellAuth: false,
      textarea: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>

</style>