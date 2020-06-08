<template>
  <div class="container">
    <Type :value.sync="record.type"/>
    <Output :tag="record.tag"/>
    <Tags @update:tag="updateTag" @click:tag="onClickTag"/>
    <NumberPad @click:price="onClickPrice"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from "@/components/Type.vue";
  import Output from "@/components/Output.vue";
  import Tags from "@/components/Tags.vue";
  import NumberPad from "@/components/NumberPad.vue";
  import AV from 'leancloud-storage';

  @Component({
    components: {Type, Output, Tags, NumberPad}
  })
  export default class Bill extends Vue {
    record: RecordItem = {
      tag: {id: 1, name: "用餐", number: 1},
      remark: '',
      type: '-',
      amount: ""
    }

    created() {
      this.initRecordItem()
    }

    updateTag(tag: Tag) {
      this.record.tag = tag
    }

    onClickTag(tag: Tag) {
      this.record.tag = tag
    }

    async onClickPrice(price: string) {
      const Todo = AV.Object.extend('Records')
      const todo = new Todo()
      todo.set("price", price)
      todo.set('remark', this.$store.state.remark)
      todo.set('tag', this.record.tag)
      todo.set("type", this.record.type)
      await todo.save()
      alert("添加成功")
      this.$router.go(-1)
    }

    deactivated() {
      this.initRecordItem()
    }

    initRecordItem() {
      this.$set(this.record, 'remark', "")
      this.$set(this.record, 'tag', {id: 1, name: "用餐", number: 1})
      this.$set(this.record, 'type', "-")
      this.$set(this.record, 'amount', "-")
    }
  }
</script>

<style scoped lang="scss">

  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

</style>
