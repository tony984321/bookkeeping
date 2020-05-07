<template>
  <div class="monthlyBillWrapper">
    <div class="top">
      <div>{{currentMonth}}月账单</div>
      <div class="arrow">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="bill">
      <ul
        v-for="(p, index) in PRESETS"
        :key="index"
      >
        <li>{{p[0]}}</li>
        <li
          :class="{
            amount: true, green: p[1] === 'profit' && a, red: p[1] === 'profit' && !a
          }"
        >
          {{formatCurrency(monthlyBill[p[1]])}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Bill, Details } from "@/interfaces/details";
  import { Component, Prop } from "vue-property-decorator";
  import { getMonth } from "date-fns";
  import { getMonthlyBill } from "@/utils/details"
  import { format } from "@/utils/number"

  @Component

  export default class MonthlyBill extends Vue {
    @Prop() readonly details!: Details[];

    monthlyDetails: Details[] = this.details.length ?
      this.details.filter(d => getMonth(
        new Date(d.createdAt)) === getMonth(new Date())
      ) : [];

    currentMonth = getMonth(new Date()) + 1;

    monthlyBill: Bill = getMonthlyBill(this.monthlyDetails);

    PRESETS = [
      ['收入', 'totalIncome'],
      ['支出', 'totalExpenditure'],
      ['结余', 'profit']
    ];

    a: boolean = this.monthlyBill.profit >= 0;

    formatCurrency(amount: number) {
      return format(amount, 'currency')
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .monthlyBillWrapper {
    width: 100%;
    padding: 10px 20px;
    background: #fff;
    margin-top: 10px;

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .arrow {
        color: #b5b5b5;
      }
    }

    .bill {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    .amount {
      font-weight: 600;
    }

    .red {
      color: $danger;
    }

    .green {
      color: $success;
    }
  }
</style>
