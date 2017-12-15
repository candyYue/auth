<template>
    <div>
        <el-radio v-model="radio" label="1">邮件通知</el-radio>
        <p>邮件通知：每当有新的审核消息时，我们将对下方的邮箱发送邮件通知</p>
        <div v-if="msg1==='保存'"><el-input v-model="input1" placeholder="" :maxlength="20" ></el-input>@emicnet.com</div>
        <p v-else>{{input1}}</p>
        <el-button type="text" @click='changeEmail()'>{{msg1}}</el-button>
        
        <br>
        <br>
        
        <el-radio v-model="radio" label="2">短信通知</el-radio>
        <p>短信通知：每当有新的审核消息时，我们将对下方的手机号发送短信通知</p>
        <el-input v-if="msg2==='保存'" v-model="input2" placeholder="请输入手机号"></el-input>
        <p v-else>{{input2}}</p>
        <el-button type="text" @click='changeTel()'>{{msg2}}</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      input1: "",
      input2: "",
      msg1: "保存",
      msg2: "编辑"
    };
  },
  methods: {
    changeTel() {
      this.msg2 === "保存" ? this.msg2 = "编辑" : this.msg2 = "保存";
    },
    changeEmail() {
      this.msg1 === "保存" ? this.msg1 = "编辑" : this.msg1 = "保存";
    }
  }
};
</script>

<style scoped>

</style>