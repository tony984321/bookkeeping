<template>
  <div class="settingItem">
    <div class="title">
      <div class="icon">
        <i :class="`iconfont icon-${icon}`"></i>
      </div>
      <div>
        {{title}}
      </div>
    </div>
    <div class="icon">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";

  @Component

  export default class Me extends Vue {
    @Prop() readonly icon!: string;
    @Prop() readonly title!: string;
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .settingItem {
    width: 100%;
    display: flex;
    margin-top: 10px;
    height: 50px;
    padding: 0 20px;
    background: #fff;
    justify-content: space-between;
    align-items: center;

    .title {
      display: flex;
      align-items: center;
      align-content: flex-start;

      .icon {
        color: $main_color;
        margin-right: 10px;
      }
    }

    .icon {
      color: #b5b5b5;
    }
  }
</style>
