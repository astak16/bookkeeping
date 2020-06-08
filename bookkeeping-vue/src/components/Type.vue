<template>
  <ul class="type">
    <!--      <div>x</div>-->
    <li :class="{highlight: '+' === value}" @click="select('+')">收入</li>
    <li :class="{highlight: '-' === value}" @click="select('-')">支出</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Type extends Vue {
    @Prop(String)
    readonly value!: string

    select(item: string) {
      console.log(item)
      this.$emit("update:value", item)
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .type {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: px(26);
    color: $gray-600;
    background-color: $white;

    > li {
      padding: px(6);

      &.highlight {
        color: $golden;
      }
    }
  }
</style>
