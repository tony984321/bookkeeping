<template>
  <div ref='chart' class="lineChartWrapper"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {  Component, Prop, Watch } from "vue-property-decorator";
  import { LineChartSeries } from "@/interfaces/chart";
  import { buildLineChartData } from "@/helpers/chartHelpers";
  import echarts from 'echarts';

  @Component

  export default class LineChart extends Vue {
    @Prop() readonly lineChartSeries!: LineChartSeries[];

    get series() {
      return this.lineChartSeries
    }

    created(): void {
      this.$nextTick(() => {
        this.renderLineChart();
      });
    }

    renderLineChart() {
      const ec = echarts as any;
      const myChart = ec.init(this.$refs.chart as HTMLCanvasElement);
      myChart.setOption(buildLineChartData(this.series), true);
    }

    @Watch('series', { deep: true }) onSeriesChanged() {
      this.$nextTick(() => {
        this.renderLineChart();
      });
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/color";

  .lineChartWrapper {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    padding: 0 5px;
    height: 250px;
  }
</style>

