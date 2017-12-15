<template>
    <div class="sidebar">
        <router-link :to="{name:'CAuthenticate'}">设置</router-link>
    </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style scoped lang="scss">
@import "../../styles/core";
.sidebar {
  position: absolute;
  left: 0;
  top:0;
  width: $sidebar-width;
}
.active{
  display: block;
  color: $theme;
}
</style>