<template>
  <div class="monthlyBillWrapper">
    <div class="top">
      <div class="date" @click="!disableMonthSelector && calendarToggle()">
        {{year}}年{{month}}月账单
        <i class="fas fa-chevron-down" v-if="!disableMonthSelector"></i>
      </div>
      <div class="arrow" v-if="disableMonthSelector">
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
    <Calendar
      :calendarShow.sync="calendarShow"
      :defaultDate="date"
      @onContext="onContext"
      @calendarClose="calendarClose"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Bill, Detail } from "@/interfaces/details";
  import { Component, Prop } from "vue-property-decorator";
  import { getMonth, getYear } from "date-fns";
  import { getMonthlyBill, getMonthlyDetails } from "@/utils/details";
  import { format } from "@/utils/number";
  import Calendar from "../Calendar/index.vue";

  @Component({
    components: { Calendar }
  })

  export default class MonthlyBill extends Vue {
    @Prop() readonly details!: Detail[];
    @Prop() readonly defaultDate!: Date;
    @Prop() readonly disableMonthSelector!: boolean;

    date: Date = this.defaultDate;
    calendarShow = false;

    get month() {
      return getMonth(new Date(this.date)) + 1;
    }

    get year() {
      return getYear(new Date(this.date));
    }

    get monthlyDetails() {
      return getMonthlyDetails(this.details, this.month, this.year)
    }

    get monthlyBill() {
      return getMonthlyBill(this.monthlyDetails) as Bill;
    }

    PRESETS = [
      ['收入', 'totalIncome'],
      ['支出', 'totalExpenditure'],
      ['结余', 'profit']
    ];

    a: boolean = this.monthlyBill.profit >= 0;

    formatCurrency(amount: number) {
      return format(amount, 'currency')
    }

    calendarToggle() {
      this.calendarShow = !this.calendarShow;
    }

    calendarClose() {
      this.calendarShow = false;
    }

    onContext(ctx: any) {
      this.$emit('setDate', ctx.selectedDate || new Date());
      this.date = ctx.selectedDate || new Date();
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color";

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

    .date {
      svg {
        font-size: 10px;
      }
    }
  }
</style>
