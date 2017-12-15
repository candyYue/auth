<template>
    <header>
        云总机管理后台
    </header>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped lang="scss">
@import "../../styles/core";
header{
    @include text-vertical-center($header-height);
    background: $theme;
    color: #fff;
}
</style>