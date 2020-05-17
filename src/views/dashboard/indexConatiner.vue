<template>
  <div>
    <Header title="数据统计" :removeBackArrow="false" />
    <Dashboard
      :categories.sync="categories"
      :details.sync="details"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import Header from "@/components/Common/Header/index.vue";
  import Dashboard from "@/components/Dashboard/index.vue";

  @Component({
    components: { Header, Dashboard }
  })

  export default class DashboardContainer extends Vue {
    get categories() {
      return this.$store.state.categories.categories;
    }

    get details() {
      return this.$store.state.details.details;
    }

    created() {
      this.$store.commit('categories/fetchCategories');
      this.$store.commit('details/fetchDetails');
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/color";
</style>
