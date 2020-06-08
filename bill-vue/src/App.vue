<template>
  <div id="app">
    <keep-alive include="Bill">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: px(16);
    font-family: $font-hei;
  }
</style>
