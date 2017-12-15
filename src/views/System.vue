<template>
    <div>
        <HeaderBar/>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar.vue";
export default {
  name: "System",
  components: {
    HeaderBar
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
}
</style>