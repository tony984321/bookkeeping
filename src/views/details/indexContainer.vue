<template>
  <div>
    <Header title="账目明细" :removeBackArrow="true" />
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
  import Header from "@/components/Commons/Header/index.vue";

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

    created() {
      this.$store.commit('categories/fetchCategories');
      this.$store.commit('details/fetchDetails');
    }
  }
</script>

