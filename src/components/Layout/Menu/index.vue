<template>
  <div class="container">
    <div
      v-for="(m, index) in menu"
      :key="index"
      class="wrapper"
      :data-icon="m.icon"
      :data-is_selected="term.includes(m.term)"
    >
      <router-link :to="m.path()">
        <i :class="`iconfont icon-${m.icon}`"></i>
        {{m.title}}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { indexPath as detailsIndexPath } from "@/router/details/detailsRoutes";
  import { indexPath as bookDownIndexPath } from "@/router/bookDown/bookDownRoutes";
  import { indexPath as meIndexPath } from "@/router/me/meRoutes";

  export default {
    name: "awesome_menu",
    data() {
      return {
        menu: [
          {title: '明细', icon: 'mingxi', path: detailsIndexPath, term: "details"},
          {title: '记账', icon: 'plus', path: bookDownIndexPath, term: "book_down"},
          {title: '我的', icon: 'user', path: meIndexPath, term: "me"}
        ],

        term: this.$route.path
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .container {
    width: 100%;
    height: 60px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    border-top: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .wrapper {
    text-align: center;

    &[data-is_selected = true] {
      color: $main_color;
    }

    i {
      display: block;
      font-size: 14px;
    }

    &[data-icon = "plus"] {
      i {
        font-size: 40px;
        color: $main_color;
        margin-top: -10px;
        margin-bottom: 10px;
      }
    }
  }
</style>
