<template>
  <div>
    <TypeTab
      :types.sync="types"
      :type.sync="categoryType"
      @onClickIncome="onClickIncome"
      @onClickExpenditure="onClickExpenditure"
    />

    <DateRangeSelector
      :start.sync='start'
      :end.sync = 'end'
      @setStart="setStart"
      @setEnd="setEnd"
    />

    <LineChart
      :lineChartSeries.sync="lineChartSeries"
    />

    <RankingList
      :barChartSeries.sync="barChartSeries"
      :categoryType.sync="categoryType"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from "vue-property-decorator";
  import {Category, CategoryType} from "@/interfaces/me";
  import TypeTab from "@/components/Common/TypeTab/index.vue";
  import DateRangeSelector from "@/components/Common/DateRangeSelector/index.vue";
  import LineChart from "@/components/Common/LineChart/index.vue";
  import RankingList from "@/components/RankingList/index.vue";
  import { Detail } from "@/interfaces/details";
  import { getDiffDates } from "@/utils/date";
  import { format,  startOfMonth } from "date-fns";
  import { getDetailsByCategory } from "@/utils/details";

  const FORMAT ='yyyy-MM-dd';

  @Component({
    components: { TypeTab, DateRangeSelector, LineChart, RankingList }
  })

  export default class Dashboard extends Vue {
    @Prop() readonly categories!: Category[];
    @Prop() readonly details!: Detail[];

    start: Date =  startOfMonth(new Date());
    end: Date = new Date();
    categoryType = CategoryType.INCOME;
    types = [
      [CategoryType.INCOME, '收入'],
      [CategoryType.EXPENDITURE, '支出']
    ];

    get detailsByType() {
      return this.details.filter(
        (d: Detail) => d.type === this.categoryType
      ) as Detail[];
    }

    get lineChartSeries() {
      const dates: string[] = getDiffDates(this.start, this.end);
      return dates.map(date => {
        return [
          format(new Date(date), FORMAT),
          this.detailsByType.find(
            d => format(new Date(d.createdAt), FORMAT) === format(new Date(date), FORMAT)
          )?.amount || 0
        ]
      })
    }

    get barChartSeries() {
      return getDetailsByCategory(this.detailsByType, this.categories);
    }

    onClickIncome() {
      this.categoryType = CategoryType.INCOME;
    }

    onClickExpenditure() {
      this.categoryType = CategoryType.EXPENDITURE;
    }

    setStart(date: Date) {
      this.start = date;
    }

    setEnd(date: Date) {
      this.end = date;
    }
  }
</script>

