<template>
  <div class="banner">
    <Router-link :to="`/bill`">
      <Icon type="type" name="add" class-prefix="add"/>
    </Router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Banner extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .banner {
    height: px(200);
    background: url(../../public/img/banner.jpg) center center;
    position: relative;
    background-size: cover;

    ::v-deep {
      .add-icons {
        position: absolute;
        left: 50%;
        bottom: px(-108 / 2);
        transform: translateX(-50%);
        width: px(108);
        height: px(108);

        &-img {
          background-color: white;
        }
      }
    }
  }
</style>
