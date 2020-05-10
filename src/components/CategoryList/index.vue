<template>
  <div class="categoryListWrapper">
    <div class="type">
      <div
        v-for="(t, index) in types"
        :key="index"
        :class="{box: true,active: categoryType === t[0]}"
        @click="t[0] === 'income' ? onClickIncome() : onClickExpenditure()"
      >
        {{t[1]}}
      </div>
    </div>
    <div v-if="categoriesByType.length === 0" class="noContent">
      还没有类别，请添加
    </div>
    <div v-else v-for="(c, index) in categoriesByType" :key="index">
      <CategoryItem :category.sync="c" :categoryType.sync="categoryType" />
    </div>
    <b-button
      v-b-modal="'modal-createCategory'"
      class="addCategory"
    >
      添加类别
    </b-button>
    <NewModal :categoryType.sync="categoryType"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import { Category, CategoryType } from "@/interfaces/me";
  import NewModal from "./NewModal/index.vue";
  import CategoryItem from "./Item/index.vue";

  @Component({
    components: { NewModal, CategoryItem }
  })

  export default class CategoryList extends Vue {
    categoryType = CategoryType.INCOME;

    get categoriesByType() {
      return this.$store.state.categories.categories.filter(
        (c: Category) => c.type === this.categoryType
      ) as Category[];
    }

    types = [
      [CategoryType.INCOME, '收入'],
      [CategoryType.EXPENDITURE, '支出']
    ];

    onClickIncome() {
      this.categoryType = CategoryType.INCOME;
    }

    onClickExpenditure() {
      this.categoryType = CategoryType.EXPENDITURE;
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/color.scss";

  .categoryListWrapper {
    width: 100%;

    .addCategory {
      width: 100%;
      height: 50px;
      background: $main_color;
      position: fixed;
      left: 0;
      bottom: 0;
      color: #fff;
      text-align: center;
      line-height: 50px;
    }

    .type {
      width: 100%;
      padding: 10px 40px;
      display: flex;
      justify-content: center;
      background: $main_color;
    }

    .box {
      width: 50%;
      border: 1px solid #fff;
      padding: 5px 0;
      text-align: center;
      color: #fff;
      margin-top: 50px;
    }

    .active {
      background: #fff;
      color: $main_color;
    }
  }
</style>
