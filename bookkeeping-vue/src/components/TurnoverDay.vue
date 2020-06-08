<template>
  <div class="turnover-day">
    <Icon type="type" name="mark" class-prefix="mark"/>
    <div class="right">
      <div>
        <span class="title">用餐</span>
        <span class="price">6.80</span>
      </div>
      <div class="desc">早饭</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TurnoverDay extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .turnover-day {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    font-weight: 500;
    font-size: px(16);
    position: relative;
    margin-top: px(24);
    padding-left: px(82);

    &::before, &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: px(50);
      width: 2px;
      background-color: #ddd;
      z-index: -1;
    }

    &::before {
      top: -100%
    }

    &::after {
      bottom: -100%;
    }

    &:last-child::after {
      height: 0;
      width: 0;
    }

    .right {
      margin-left: px(10);
    }

    .title {
      margin-right: px(10);
    }

    .desc {
      color: #aaa;
      font-weight: 500;
      font-size: px(14);
    }
  }
</style>
