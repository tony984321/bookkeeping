<template>
  <div>
    <Header title="类别设置" />
    <CategoryList />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import Header from "@/components/Common/Header/index.vue";
  import CategoryList from "@/components/CategoryList/index.vue";

  @Component({
    components: { Header, CategoryList }
  })

  export default class ProfileContainer extends Vue {
    created() {
      this.$store.commit('categories/fetchCategories');
    }
  }
</script>

