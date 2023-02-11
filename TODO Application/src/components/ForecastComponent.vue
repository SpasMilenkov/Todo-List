<script>
import axios from 'axios'
import LineChart from './LineChartComponent.vue'
export default {
  data: function () {
    return {
      temperature: '--',
      precipitation: '',
      showers: '',
      windSpeed: 0.0,
      clouds: '',
      chartData: {},
      options: {},
      isDataFetched: false,
    }
  },
  methods: {
    getLocation() {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude.toFixed(4)
          const long = position.coords.longitude.toFixed(4)
          const result = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation,rain,showers,snowfall,cloudcover&current_weather=true&timezone=auto`
          )
          const time = new Date()
          const hour = time.getHours()
          this.temperature = result.data.current_weather.temperature
          this.windSpeed = result.data.current_weather.windspeed
          this.precipitation = result.data.hourly.precipitation[hour]
          const cloudPercent = result.data.hourly.cloudcover[hour]
          console.log(result)
          const temperatures = result.data.hourly.temperature_2m
          let hours = []
          let dailyTemperatures = []
          for (let i = 0; i <= 24; i += 2) {
            const temp = temperatures[i]
            dailyTemperatures.push(temp)
            hours.push(i)
          }
          console.log(dailyTemperatures)
          this.chartData = {
            labels: hours,
            datasets: [
              {
                label: 'temperature',
                backgroundColor: '',
                data: dailyTemperatures,
                borderColor: '#51A7B6',
                pointBackgroundColor: '#51A7B6',
                pointBorderColor: '#51A7B6',
              },
            ],
          }
          this.options = {
            responsive: true,
            maintainAspectRatio: true,
            tension: 0.1,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#1A1531',
                },
                grid: {
                  color: '#1A1531',
                },
              },
              x: {
                beginAtZero: true,
                ticks: {
                  color: '#1A1531',
                },
                grid: {
                  color: '#1A1531',
                },
              },
            },
          }
          this.isDataFetched = true
          if (cloudPercent <= 25) {
            this.clouds = 'sunny'
            return
          }
          if (cloudPercent <= 50) {
            this.clouds = 'partial'
            return
          }
          if (cloudPercent <= 75) {
            this.clouds = 'partial'
            return
          }
          this.clouds = 'cloudy'
          console.log(result)
        })
      } catch {
        console.log('something went wrong')
      }
    },
  },
  mounted() {
    this.getLocation()
  },
  components: {
    LineChart,
  },
}
</script>
<template>
  <div class="container" v-if="isDataFetched">
    <div id="precipitation-icon">
      <img src="/images/drop-icon.png" alt="Water drop" />
    </div>
    <div id="weather-icon">
      <img :src="'/images/' + clouds + '.png'" alt="weather icon" />
    </div>
    <div id="wind-speed-icon">
      <img src="/images/wind-icon.png" alt="Wind" />
    </div>
    <div class="wrapper" id="temperature">
      <h1>{{ temperature }} °C</h1>
    </div>
    <div class="wrapper" id="precipitation">
      <h2>{{ precipitation }}mm</h2>
    </div>
    <div class="wrapper" id="wind-speed">
      <h2>{{ windSpeed }}km/h</h2>
    </div>
    <LineChart
      :chartData="chartData"
      :chartOptions="options"
      id="chart"
    ></LineChart>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 15% 15% 70%;
}
#temperature,
#precipitation,
#wind-speed {
  color: white;
  font-family: var(--main-title);
}
#temperature {
  grid-row: 2;
  grid-column: 0;
  font-size: 1.2rem;
}
#precipitation {
  grid-row: 2;
  grid-column: 3;
  font-size: 1.2rem;
}
#wind-speed {
  grid-row: 2;
  grid-column: 4;
  font-size: 1.2rem;
}
#precipitation-icon,
#wind-speed-icon,
#weather-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
#chart {
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 4;
}
#precipitation-icon img,
#wind-speed-icon img {
  width: 3rem;
}
#weather-icon img {
  width: 4rem;
}
#precipitation-icon {
  grid-row: 1;
  grid-column: 3;
}
#wind-speed-icon {
  grid-row: 1;
  grid-column: 4;
}
#weather-icon {
  grid-row: 1;
  grid-column: 1;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
