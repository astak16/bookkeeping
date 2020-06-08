<template>
  <div class="container">
    <div class="top-status-bar">
      <div class="remark">备注</div>
      <div class="cancel" @click="onCancelClick">取消</div>
    </div>
    <div class="textarea-wrap">
      <div class="date">2020年5月26日</div>
      <textarea placeholder="记录花销更记录生活..." maxlength="100" v-model="message"></textarea>
    </div>
    <div class="bottom-status-bar">
      <div class="count">（{{message.length}}/100）</div>
      <div class="finished" @click="onFinishedClick">写好了</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Edit extends Vue {
    message?: string = ''

    onCancelClick() {
      this.$router.back()
    }

    onFinishedClick() {
      this.$store.commit("createRemark", this.message)
      // this.$store.commit("createRemark", this.message)
      this.onCancelClick()
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .container {
    height: 100vh;
    background-color: $gray-100;

    .textarea-wrap {
      .date {
        padding: px(8) px(8) px(4);
        font-size: px(14);
        color: $gray-500;
        line-height: 1;
      }

      textarea {
        background-color: inherit;
        width: 100%;
        min-height: px(200);
        resize: none;
        font-size: px(16);
        padding: px(4) px(10) px(16);
        caret-color: $golden;
      }
    }

    .top-status-bar {
      border-bottom: 1px solid $gray-200;
      color: $gray-500;
      position: relative;

      .remark {
        padding: px(10) px(20);
        text-align: center;
        color: $gray-800
      }

      .cancel {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: px(10) px(20);
      }
    }

    .bottom-status-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: px(10) px(20);
      background-color: $white;
      color: $gray-500;

      .finished {
        border: 1px solid $gray-400;
        border-radius: px(4);
        padding: px(4) px(12);
        font-size: px(14);
        margin-left: auto;
      }

      .count {
        position: absolute;
        bottom: 110%;
      }
    }
  }
</style>
