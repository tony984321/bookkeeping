<template>
  <div class="categoriesWrapper">
    <div v-if="categories.length === 0" class="noContent">
      还没有类别，请<router-link :to="categorySettingPath()">点击这里</router-link>添加
    </div>

    <ul>
      <li v-for="(c, index) in categories" :key="index" @click="chooseCategory(c)">
          <div :class="{iconBox: true, selected: c === selectedCategory}">
            <i :class="`iconfont icon-${c.icon}`"></i>
          </div>
          {{c.title}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category } from "@/interfaces/me";
  import {
    indexPath as categorySettingIndexPath
  } from "@/router/categorySetting/categorySettingRoutes";

  @Component
  export default class Categories extends Vue {
    @Prop() readonly categories!: Category[];
    @Prop() readonly selectedCategory!: Category;

    categorySettingPath: () => void = categorySettingIndexPath;

    chooseCategory(category: Category) {
      return this.$emit('chooseCategory', category);
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .categoriesWrapper {
    width: 100%;
    margin-top: 10px;

    a {
      color: $main_color;
    }

    ul {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-wrap: wrap;

      .noContent {
        width: 100%;
        margin-top: 10px;
        text-align: center;
        color: #b5b5b5;
      }

      li {
        width: 21%;
        margin-left: 2%;
        margin-right: 2%;
        text-align: center;
        margin-bottom: 20px;

        .iconBox {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          color: #b5b5b5;
          margin: 0 auto 5px;

          .iconfont {
            font-size: 20px;
          }
        }

        .selected {
          background: $main_color;
          color: #fff;
        }
      }
    }
  }

</style>
