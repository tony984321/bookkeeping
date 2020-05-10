<template>
  <div class="categoryWrapper">
    <div class="leftSide">
      <div class="iconBox">
        <i :class="`iconfont icon-${category.icon}`"></i>
      </div>
      <div>{{category.title}}</div>
    </div>
    <div class="rightSide">
      <b-button class="mr-2" v-b-modal="`modal-updateCategory-${category.id}`">
        <i class="fas fa-pencil-alt"></i>
      </b-button>
      <div class="deleteIcon" @click="onDelete()">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
    <EditModal :categoryType.sync="categoryType" :category.sync="category" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { Category, CategoryType } from "@/interfaces/me";
  import EditModal from "../EditModal/index.vue";

  @Component({
    components: { EditModal }
  })

  export default class CategoryItem extends Vue {
    @Prop() readonly category!: Category;
    @Prop() readonly categoryType!: CategoryType;

    onDelete() {
      if (confirm('确认删除吗？') ) {
        this.$store.dispatch('categories/deleteCategory', this.category.id);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/color.scss";

  .categoryWrapper {
    width: 100%;
    margin: 10px auto 0;
    background: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftSide {
      width: 30%;
      display: flex;
      align-items: center;

      .iconBox {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #f5f5f5;
        color: $main_color;
        margin-right: 10px;
      }
    }

    .rightSide {
      width: 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .btn {
        background: none;
        color: #303031;
      }
    }

    .deleteIcon {
      color: $danger;
    }
  }
</style>
