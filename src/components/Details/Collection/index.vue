<template>
  <div class="detailsWrapper">
    <div v-if="monthlyDetails.length === 0" class="noContent">
      本月还没有账单哦，快去记账吧
    </div>
    <div v-else v-for="(d, index) in monthlyDetails" :key="index">
      <Item
        :detail.sync="d"
        :categories.sync="categories"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category } from "@/interfaces/me";
  import { Detail } from "@/interfaces/details";
  import Item from "../Item/index.vue";

  @Component({
    components: { Item }
  })

  export default class DetailsCollection extends Vue {
    @Prop() readonly categories!: Category[];
    @Prop() readonly monthlyDetails!: Detail[];
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .detailsWrapper {
    width: 100%;
    margin-top: 10px;
  }
</style>
