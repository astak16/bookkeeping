<template>
  <div class="output" :class="{[`output-background-${background}`]: true}">
    <Icon :id="tag.id" :name="tag.name" :value="tag.number" class-prefix="tag" placement="right"/>
    <div class="price">￥{{price}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Output extends Vue {
    @Prop({type: Object, required: true})
    tag!: Tag

    background!: string

    @Watch('tag')
    changeBackground(tag: Tag) {
      this.background = `${tag.number}`
      console.log("tag",tag)
    }

    get price(){
      return this.$store.state.price
    }

    created() {
      this.background = `${this.tag.number}`
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .output {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px(10);

    .price {
      color: $white;
      font-size: px(20);
    }

    ::v-deep {
      .tag-icon-img {
        .text {
          color: $white
        }
      }
    }


    @for $i from 1 through length($colorArr) {
      $item: nth($colorArr, $i);

      &-background-#{$i} {
        background-color: map-get($item, background-color);
      }
    }

  }
</style>
