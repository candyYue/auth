<template>
    <div>
          <el-tabs v-model="activeTab">
                <el-tab-pane label="企业名片认证" name="auth"><AuthEdit/></el-tab-pane>
                <el-tab-pane label="设置" name="set">配置管理</el-tab-pane>
          </el-tabs>
    </div>
</template>

<script>
import AuthEdit from "@/components/authenticate/AuthEdit.vue";
export default {
  name: "company-authenticate",
  data() {
    return {
      activeTab: "auth"
    };
  },
  methods: {},
  components: {
    AuthEdit
  },
  beforeRouteLeave(to, from, next) {
    console.log(to)
    // next(false);
  }
};
</script>

<style scoped>

</style>