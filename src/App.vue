<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import '@core'
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./styles/core/reset.scss";
@import "./styles/core";
a,.link{
  color: $theme;
}
</style>
