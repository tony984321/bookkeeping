<template>
  <div id="app">
    <router-view />
    <Layout />
  </div>
</template>

<script lang="ts">
  import Layout from '@/components/Layout/index.vue';

  export default {
    name: "layout",
    components: { Layout }
  }
</script>
