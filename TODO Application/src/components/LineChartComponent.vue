<template>
  <Line :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  props: ['title', 'labels', 'dataset'],
  components: {
    Line,
  },
  data() {
    return chartConfig
  },
  mounted() {
    chartConfig.data.datasets = {
      label: this.title,
      backgroundColor: '#f87979',
      data: this.dataset,
    }
    chartConfig.data.labels = this.labels
    chartConfig.data.labels = this.data
  },
}
</script>
