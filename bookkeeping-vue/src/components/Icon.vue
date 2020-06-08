<template>
  <div class="icon" :class="{[`${this.classPrefix}-icon`]: this.classPrefix}">
    <div class="icon-img" :class="{[`${this.classPrefix}-icon-img`]: this.classPrefix,[placement]:true}"
         v-if="imgIcon">
      <img class="icons-img"
           :src="imgSrc" alt="图标">
      <div class="text">{{name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import handleImg from "@/utils/handleImg";

  const context = require.context('../../public/img/icons', false, /\.png$/)
  const img = handleImg(context)

  @Component
  export default class Icon extends Vue {
    @Prop({type: String, default: "type"})
    type!: string

    @Prop({type: String})
    name!: string

    @Prop({type: Number, required: true})
    id!: ImgKey

    @Prop(String)
    classPrefix!: string

    @Prop({type: String, default: "bottom"})
    placement!: string   // 文本显示位置

    get imgSrc() {
      return img[this.id]
    }

    get imgIcon() {
      return this.type === 'type'
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  $textMargin: px(6);

  .icon {
    &-img {
      display: flex;
      align-items: center;

      > img {
        width: px(40);
        display: inline-block;
        border-radius: 50%;
      }

      > .text {
        text-align: center;
        white-space: nowrap;
        color: $gray-800;
      }
    }

    &-img.bottom {
      flex-direction: column;

      > .text {
        margin-top: $textMargin
      }
    }

    &-img.right {
      flex-direction: row;

      > .text {
        margin-left: $textMargin
      }
    }

    &-img.left {
      flex-direction: row-reverse;

      > .text {
        margin-right: $textMargin
      }
    }
  }
</style>
