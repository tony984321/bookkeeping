<template>
   <div class="headerWrapper">
     <div class="back" @click="onBack" v-if="!removeBackArrow">
       <i class="fas fa-chevron-left"></i>
     </div>
     {{title}}
     <slot />
   </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";

  @Component
  export default class Header extends Vue {
    @Prop() readonly title!: string;
    @Prop() readonly removeBackArrow!: boolean;

    onBack() {
      this.$router.go(-1);
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color";

  .headerWrapper {
    width: 100%;
    height: 49px;
    background: $main_color;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 49px;
    font-size: 18px;
    color: #fff;
    z-index: 100000;

    .back {
      position: absolute;
      color: #fff;
      left: 20px;
    }
  }
</style>
