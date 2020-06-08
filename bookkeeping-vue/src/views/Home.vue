<template>
  <div class="home">
    <Banner/>
    <div class="content">
      <TotalDay/>
      <TurnoverDAy/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import {Component} from 'vue-property-decorator';
  import Banner from "@/components/Banner";
  import TotalDay from "@/components/TotalDay"
  import TurnoverDay from "@/components/TurnoverDay";

  @Component({
    components: {TurnoverDAy: TurnoverDay, Banner, TotalDay}
  })
  export default class Home extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .home {
    font-size: px(16);

    .content {
      margin-top: px(54);
    }
  }

  ::v-deep {
    .mark-icons {
      width: px(30);
    }
  }


</style>
