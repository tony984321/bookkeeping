<template>
  <div class="menu">
    <div class="semiCircle"></div>
    <div
      v-for="(m, index) in menu"
      :key="index"
      class="wrapper"
      :data-icon="m.icon"
    >
      <router-link :to="m.path()" active-class="active">
        <i :class="`iconfont icon-${m.icon}`"></i>
        {{m.title}}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Menu } from "../../interfaces/menu";
  import { indexPath as detailsIndexPath } from "../../router/details/detailsRoutes";
  import { indexPath as bookDownIndexPath } from "../../router/bookDown/bookDownRoutes";
  import { indexPath as meIndexPath } from "../../router/me/meRoutes";

  export default class AwesomeMenu extends Vue {
    menu: Menu[] = [
      {title: '明细', icon: 'mingxi', path: detailsIndexPath},
      {title: '记账', icon: 'plus', path: bookDownIndexPath},
      {title: '我的', icon: 'user', path: meIndexPath}
    ];
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/color";

  .menu {
    width: 100%;
    height: 60px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .wrapper {
      text-align: center;
      position: relative;
      z-index: 1;

      i {
        display: block;
        font-size: 14px;
      }

      &[data-icon = "plus"] {
        i {
          font-size: 50px;
          color: $main_color;
          margin-top: -18px;
          margin-left: 2px;
          margin-bottom: 18px;
        }
      }
    }

    .active {
      color: $main_color;
    }

    .semiCircle {
      width: 60px;
      height: 30px;
      position: absolute;
      border-radius: 30px 30px 0 0;
      background: #fff;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
      left: 50%;
      top: 0;
      margin-left: -30px;
      margin-top: -30px;
    }
  }
</style>
