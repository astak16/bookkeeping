<template>
  <div class="numberPad">
    <div class="edit-bar">
      <div class="date">
        <div class="year">{{year}}</div>
        <div class="day">{{month}}月{{day}}日</div>
        <el-date-picker
            class="tiantian"
            v-model="value1"
            type="date"
            size="small"
            :editable="false"
            :clearable="false"
            @change="selectDate"
        >
        </el-date-picker>
      </div>
      <Router-link to="/Edit">
        <div class="edit"><img src="../../public/img/edit.png" alt="编辑"></div>
      </Router-link>
    </div>
    <div class="buttons clearfix">
      <div class="button" @click="buttonContent">1</div>
      <div class="button" @click="buttonContent">2</div>
      <div class="button" @click="buttonContent">3</div>
      <!--      <div class="button" @click="deletePrice">删除</div>-->
      <div class="button clear" @click="removePrice">清零</div>
      <div class="button" @click="buttonContent">4</div>
      <div class="button" @click="buttonContent">5</div>
      <div class="button" @click="buttonContent">6</div>
      <!--      <div class="button clear" @click="removePrice">清零</div>-->
      <div class="button ok" @click="submitPrice">OK</div>
      <div class="button" @click="buttonContent">7</div>
      <div class="button" @click="buttonContent">8</div>
      <div class="button" @click="buttonContent">9</div>
      <!--      <div class="button ok" @click="submitPrice">OK</div>-->
      <div class="button zero" @click="buttonContent">0</div>
      <div class="button" @click="buttonContent">.</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    value1 = '2020-5-19'
    text = '0'
    price = '0.00'
    year = '0'
    month = '0'
    day = '0'

    @Watch('text')
    updatePrice(price: string) {
      const text = this.zeroPrice(price) as string
      this.price = text
      this.$store.commit('createPrice', text)
    }

    created() {
      const date = new Date()
      this.year = (date.getFullYear()).toString()
      this.month = (date.getMonth() + 1).toString()
      this.day = (date.getDate()).toString()
      console.log(333333)
    }

    selectDate(date: Date) {
      const timestamp = date.getTime()
      this.year = (date.getFullYear()).toString()
      this.month = (date.getMonth() + 1).toString()
      this.day = (date.getDate()).toString()
    }


    buttonContent(e: MouseEvent) {
      const button = e.target as HTMLButtonElement
      const text = button.textContent as string
      if (this.text.length === 16) return;
      // 如果第一次点击为 0 时，第一位不能显示 0
      if (this.text === '0') {
        if ('1234567890'.indexOf(text) > -1) {
          this.text = text
        } else {
          this.text += text
        }
        return
      }

      if (this.text.indexOf('.') > -1 && text === '.') return
      if (this.text.indexOf('.') > -1 && !/^[0-9]+.[0-9]?$/.test(this.text)) return
      this.text += text
    }

    // TODO 暂时不做删除
    // deletePrice() {
    //   if (this.text.length === 1) return this.text = '0'
    //   if(this.text)
    //   const index = this.text.indexOf('.')
    //   if (index === this.text.length - 1)
    //     return this.text = this.text.slice(0, this.text.length - 2)
    //   this.text = this.text.slice(0, this.text.length - 1)
    // }

    removePrice() {
      this.text = '0'
    }

    submitPrice() {
      this.$emit('click:price', this.price)
    }

    zeroPrice(price: string) {
      let item = price
      if (price.indexOf('.') > -1) {
        const split = price.split('.')[1]
        if (split.length === 0) {
          item = price + '00'
        } else if (split.length === 1) {
          item = price + '0'
        }
      } else {
        item = price + '.00'
      }
      return item
    }

  }
</script>
<style lang="scss">
  .el-picker-panel {
    top: unset !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: unset !important;
    margin: 0 !important;

    .el-picker-panel__content {
      width: unset !important;
    }

    .popper__arrow {
      display: none !important;
    }
  }
</style>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  ::v-deep {
    .el-date-editor.el-input.tiantian {
      width: px(20);
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .edit-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: px(6) px(30);

    .date {
      position: relative;
    }

    .year {
      font-size: px(12);
      text-align: center;
      color: $gray-500;
    }

    .day {
      font-size: px(14);
      text-align: center;
      color: $gray-500;
    }

    .edit {
      height: px(24);

      img {
        height: 100%;
      }
    }
  }

  .buttons {
    @extend %clearfix;
    $bg: rgb(221, 226, 229);
    background-color: $bg;

    > .button {
      font-size: px(30);
      width: 25%;
      height: px(64);
      color: darken($bg, 14%);
      float: left;
      background-color: transparent;
      font-family: Consolas, monospace;
      border-bottom: 1px solid darken($bg, 5%);
      border-right: 1px solid darken($bg, 5%);
      display: flex;
      align-items: center;
      justify-content: center;

      &.clear,
      &.ok {
        float: right;
        height: px(64*2);
      }

      &.zero {
        width: 50%;
      }
    }
  }
</style>
