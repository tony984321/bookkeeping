<template>
  <div class="menuContainer">
    <div class="menu">
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
      <div class="circle"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Menu } from "@/interfaces/menu";
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

  .menuContainer {

    .circle {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #fff;
      left: 50%;
      bottom: 28px;
      margin-left: -30px;
      border: 1px solid #e5e5e5;
    }

    .box {
      position: absolute;
      width: 60px;
      height: 40px;
      left: 50%;
      margin-left: -30px;
      top: 0;
      background: #fff;
    }

    .menu {
      width: 100%;
      height: 60px;
      background: #fff;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 100;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid #e5e5e5;

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
            margin-left: 1px;
            margin-bottom: 18px;
          }
        }
      }

      .active {
        color: $main_color;
      }
    }

  }
</style>
