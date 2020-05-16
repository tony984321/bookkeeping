<template>
  <div>
    <TypeTab
      :types.sync="types"
      :type.sync="categoryType"
      @onClickIncome="onClickIncome"
      @onClickExpenditure="onClickExpenditure"
    />
    <Categories
      :categories.sync="categoriesByType"
      @chooseCategory="chooseCategory"
      :selectedCategory="category"
    />
    <div v-if="showKeyBoard">
      <KeyBoard
        @closeKeyboard="closeKeyboard"
        @createDetail="createDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category, CategoryType } from "@/interfaces/me";
  import TypeTab from "@/components/Commons/TypeTab/index.vue";
  import Categories from "./Categories/index.vue";
  import KeyBoard from "./KeyBoard/index.vue";
  import { Detail } from "@/interfaces/details";

  @Component({
    components: { TypeTab, Categories, KeyBoard }
  })

  export default class BookDown extends Vue {
    @Prop() readonly categories!: Category[];

    categoryType = CategoryType.INCOME;
    showKeyBoard = false;
    category: Category | null = null;
    types = [
      [CategoryType.INCOME, '收入'],
      [CategoryType.EXPENDITURE, '支出']
    ];

    get categoriesByType() {
      return this.$store.state.categories.categories.filter(
        (c: Category) => c.type === this.categoryType
      ) as Category[];
    }

    onClickIncome() {
      this.categoryType = CategoryType.INCOME;
    }

    onClickExpenditure() {
      this.categoryType = CategoryType.EXPENDITURE;
    }

    chooseCategory(category: Category) {
      this.category = category;
      this.showKeyBoard = true;
    }

    closeKeyboard() {
      this.showKeyBoard = false;
      this.category = null;
    }

    createDetail(amount: number, date: Date) {
      if(this.category !== null) {
        const detail: Detail = {
          createdAt: date,
          amount: amount,
          categoryId: this.category.id,
          type: this.categoryType
        };

        this.$store.dispatch('details/createDetail', detail);
      }else {
        alert("请选择类别");
      }
    }
  }
</script>

