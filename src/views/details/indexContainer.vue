<template>
  <div>
    <Header title="账目明细" :removeBackArrow="true" >
      <div class="dashboardIcon">
        <router-link :to="dashboardPath()">
          <i class="fas fa-chart-line"></i>
        </router-link>
      </div>
    </Header>
    <Details
      :categories.sync="categories"
      :details.sync="details"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import Details from "@/components/Details/index.vue";
  import Header from "@/components/Common/Header/index.vue";
  import { indexPath as dashboardPath } from "@/router/dashboard/dashboardRouter";

  @Component({
    components: { Details, Header }
  })

  export default class DetailsContainer extends Vue {
    get categories() {
      return this.$store.state.categories.categories;
    }

    get details() {
      return this.$store.state.details.details;
    }

    dashboardPath: () => void  = dashboardPath;

    created() {
      this.$store.commit('categories/fetchCategories');
      this.$store.commit('details/fetchDetails');
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/color";

  .dashboardIcon {
    position: absolute;
    right: 20px;
    top: 0;
    color: #fff;
  }
</style>
