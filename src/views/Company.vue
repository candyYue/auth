<template>
    <div>
        <HeaderBar/>
        <div class="main">
            <SideBar/>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar.vue"
import SideBar from "@/components/common/SideBar.vue"

export default {
  name: "company",
  components: {
    HeaderBar,
    SideBar
  }
};
</script>

<style scoped lang="scss">
@import "../styles/core";

.main {
  position: relative;
  @extend %center-block;
  margin-top: 20px;
  padding: 20px;
  width: $main-width;
  background: #fff;
  padding-left: $sidebar-width;
}
</style>