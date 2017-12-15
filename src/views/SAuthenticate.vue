<template>
    <div>

        <el-tabs type="border-card">
          <el-tab-pane label="待审核">
            <Tabtable :data="pendinglist"></Tabtable>
          </el-tab-pane>
          <el-tab-pane label="已认证">
            <Tabtable :data="authenticatedlist"></Tabtable>
          </el-tab-pane>
          <el-tab-pane label="不合格">
            <Tabtable :data="rejectedlist"></Tabtable>  
          </el-tab-pane>
          <el-tab-pane label="设置">
            <AuthSetting></AuthSetting>  
          </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import Tabtable from "@/components/authenticate/AuthTable.vue";
import AuthSetting from "@/components/authenticate/AuthSetting.vue";
import { mapGetters } from "vuex";

export default {
  name: "system-authenticate",
  components: {
    Tabtable,
    AuthSetting
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    ...mapGetters(["pendinglist", "authenticatedlist", "rejectedlist"])
  }
};
</script>

<style scoped lang="scss">

</style>