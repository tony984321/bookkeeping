<template>
  <div class="detailWrapper">
    <div class="top d-flex justify-content-between">
      <div>{{date}}</div>
      <div>
        <span v-if="detail.totalIncome > 0">
          收入：{{formatAmount(detail.totalIncome)}}
        </span>
        <span v-if="detail.totalExpenditure > 0">
          支出：{{formatAmount(detail.totalExpenditure)}}
        </span>
      </div>
    </div>

    <div class="mt-1">
      <div
        class="itemWrapper d-flex justify-content-between align-items-center"
        v-for="(d, index) in detail.items"
        :key="index"
      >
        <div class="d-flex align-items-center">
          <div class="iconBox">
            <i :class="`iconfont icon-${getCategory(d.categoryId).icon}`"></i>
          </div>
          {{getCategory(d.categoryId).title}}
        </div>
        <div class="amount" :data-type="d.type">
         {{d.type === 'income' ? '' : '-'}} {{formatAmount(d.amount)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from "vue-property-decorator";
  import { format } from "date-fns";
  import { format as formatNumber } from "@/utils/number";
  import { zhCN } from 'date-fns/locale';
  import { Category } from "@/interfaces/me";
  import { FormattedDetail } from "@/interfaces/details";

  @Component

  export default class Detail extends Vue {
    @Prop() readonly categories!: Category[];
    @Prop() readonly detail!: FormattedDetail;

    date: string = format(new Date(this.detail.date), 'MMM do EEEE', { locale: zhCN });

    formatAmount(amount: number) {
      return formatNumber(amount, 'currency');
    }

    getCategory(id: string) {
      return this.categories.find((c: Category) => c.id === id)
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color.scss";

  .detailWrapper {
    width: 100%;
    padding: 10px 20px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;

    .top {
      font-size: 12px;
      color: #b5b5b5;

      .income {
        color: $success;
      }

      .expenditure {
        color: $danger;
      }
    }

    .itemWrapper {
      width: 100%;
      border-bottom: 1px dashed #e5e5e5;
      padding: 10px 0;

      &:last-child {
        border-bottom: none;
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
    }

    .amount {
      font-weight: bold;
      color: $success;

      &[data-type = 'expenditure'] {
        color: $danger;
      }
    }
  }
</style>
