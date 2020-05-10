<template>
  <div>
    <slot/>
    <div  v-if="disPlayKeys.includes(path)">
      <AwesomeMenu />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Watch } from "vue-property-decorator";
  import { Route } from "vue-router";

  @Component

  export default class Layout extends Vue {
    disPlayKeys: string[] =  ["me", "details", "book_down"];
    path: string | null | undefined = undefined;

    @Watch('$route', { immediate: true }) onRouteChanged(route: Route) {
      this.path  = route.name;
    }
  }
</script>

