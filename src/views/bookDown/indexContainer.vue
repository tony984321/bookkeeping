<template>
  <div>
    <Header title="记账" :removeBackArrow="true" />
    <BookDown :categories.sync="categories" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import BookDown from "@/components/BookDown/index.vue";
  import Header from "@/components/Commons/Header/index.vue";

  @Component({
    components: { BookDown, Header }
  })

  export default class BookDownContainer extends Vue {
    get categories() {
      return this.$store.state.categories.categories;
    }

    get details() {
      return this.$store.state.details.details;
    }

    created() {
      this.$store.commit('categories/fetchCategories');
    }
  }
</script>

