<template>
  <div class="tags">
    <Icon class-prefix="tag" @click.native="onIconClick(tag)"
          v-for="tag in tags" :key="tag.id"
          :id="tag.number" :name="tag.name"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import AV from 'leancloud-storage';

  const {Query} = AV;

  interface TagsResponse extends Extendable {
    attributes?: { id: number; name: string };
  }


  @Component
  export default class Tags extends Vue {
    tags: Tag[] = []

    async created() {
      const tags = await this.getTags()
      this.getTagsResponse(tags)
    }

    getTags() {
      return new Query('Tags').find()
    }

    getTagsResponse(data: TagsResponse[]) {
      const tags: Tag[] = []
      data.forEach(tag => {
        const itemTag = {...tag.attributes}
        tags.push(itemTag as Tag)
      })
      this.tags = tags
      // this.$store.commit('createPrice',tags[0])
      this.$emit("update:tag", tags[0])
    }

    onIconClick(tag: Tag) {
      this.$emit("click:tag", tag)
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .tags {
    background-color: $white;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 px(10);

    .tag-icon {
      width: 16.66%;
      padding: px(10);

      > div:first-child {
        width: px(34);
        height: px(34);
        border-radius: 50%;
        background-color: red;
      }

      > div:last-child {
        text-align: center;
      }
    }
  }
</style>
