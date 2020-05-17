import echarts from "echarts";
import { format } from "date-fns";
import { LineChartSeries } from "@/interfaces/chart";

const FORMAT = 'M-dd';
const COLOR = '#8a6af5';
const LINEAR_GRADIENT = ['#B4DDF5', '#8a6af5'];

export const yAxisLabelFormater = (value: number) => {
  if(value >= 500) {
    return `${value / 1000} k`
  }

  return value
};

export const buildLineChartData = (series: LineChartSeries[]) => ({
  series: {
    type: 'line',
    data: series,
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: LINEAR_GRADIENT[0],
        }, {
          offset: 1,
          color: LINEAR_GRADIENT[1],
        }]),
      }
    },
    smooth: true,
    color: COLOR,
    lineStyle: {
      width: 0.8
    }
  },

  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(41, 44, 52, 0.9)',
    extraCssText: 'border-radius: 0',
    fontSize: 12,
  },

  legend: {
    x: 'right',
    y: 'top',
    itemGap: 10,
  },

  xAxis: {
    type: 'time',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: '#e5e5e5',
      }
    },
    axisLabel: {
      interval: 'auto',
      formatter: (tick: string) => format(new Date(tick), FORMAT),
      textStyle: {
        color: '#292c34',
        fontSize: '12',
      },
      rotate:60
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        type: 'solid',
        color: '#e5e5e5',
      }
    },
    axisLabel: {
      textStyle: {
        color: '#292c34',
      },
      show: true,
      interval: 'auto',
      formatter:(value: number) => yAxisLabelFormater(value)
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#e5e5e5',
        width: 1,
        type: 'dashed'
      }
    },
    show: true
  },
  grid: {
    left: '1%',
    right: '2%',
    top: '10%',
    bottom: '2%',
    containLabel: true
  }
})
