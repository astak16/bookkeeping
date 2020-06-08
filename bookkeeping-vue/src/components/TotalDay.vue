<template>
  <div class="total-day">
    <span>16日</span>
    <span>74.60</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TotalDay extends Vue {

  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .total-day {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: px(14);
    color: #aaa;
    font-weight: 500;
    position: relative;
    margin-top: px(18);
    padding-left: px(16);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      height: px(70);
      transform: translate(-50%, -50%);
      width: 2px;
      background-color: #ddd;
      z-index: -1;
    }

    > span:first-child {
      margin-right: px(10);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 100% + 23;
        top: 50%;
        transform: translateY(-50%);
        width: px(6);
        height: px(6);
        border-radius: 50%;
        background-color: #ccc;
      }
    }

    > span:last-child {
      margin-left: px(20)
    }
  }
</style>
