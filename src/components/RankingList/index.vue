<template>
  <div class="RankingListWrapper">
    <div class="header">
      <div>{{categoryType === 'income' ? '收入' : '支出'}}排行榜</div>
      <div class="total">总{{categoryType === 'income' ? '收入' : '支出'}}: {{formatCurrency(totalAmount)}}</div>
    </div>

    <div class="mt-3 w-100">
      <div v-for="(data, index) in series" :key="index" class="mb-3 w-100">
        <div class="d-flex align-items-center justify-content-between">
          <div class="iconBox">
            <i :class="`iconfont icon-${data.category.icon}`"></i>
          </div>
          <div class="barWrapper">
            <div class="label">
              {{data.category.title}} {{formatPercent(data.totalAmount / totalAmount)}}
            </div>
            <div class="bottomBar">
              <div class="topBar" :style="{width: formatPercent(data.totalAmount / totalAmount)}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {  Component, Prop } from "vue-property-decorator";
  import { CategoryAmount } from "@/interfaces/details";
  import { CategoryType } from "@/interfaces/me";
  import { sumBy } from 'lodash';
  import { format } from "@/utils/number";

  @Component

  export default class LineChart extends Vue {
    @Prop() readonly barChartSeries!: CategoryAmount[];
    @Prop() readonly categoryType!: CategoryType[];

    get totalAmount() {
      return sumBy(this.barChartSeries, 'totalAmount');
    }

    get series() {
      return this.barChartSeries;
    }

    formatCurrency(amount: number) {
      return format(amount, 'currency')
    }

    formatPercent(amount: number) {
      return format(amount, 'percent')
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/color";

  .RankingListWrapper {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    padding: 20px;

    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 5px;

      .total {
        font-size: 12px;
        color: #b5b5b5;
      }
    }

    .iconBox {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #f5f5f5;
      color: $main_color;
      margin-right: 10px;
    }

    .barWrapper {
      width: calc(100% - 50px);

      .label {
        font-size: 12px;
        color: #b5b5b5;
      }

      .bottomBar {
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #f5f5f5;
      }

      .topBar {
        height: 10px;
        border-radius: 5px;
        background: $main_color;
        -webkit-animation: animate-positive 2s;
        animation: animate-positive 2s;
      }
    }

    @-webkit-keyframes animate-positive{
      0% { width: 0; }
    }

    @keyframes animate-positive{
      0% { width: 0; }
    }
  }
</style>

