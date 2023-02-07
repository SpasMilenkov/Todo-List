<script>
import QuoteComponent from '../components/QuoteComponent.vue'
import TodoDisplayComponent from '../components/TodoDisplayComponent.vue'
import axios from 'axios'
export default {
  data: function () {
    return {
      sunset: 0,
      sunrise: 0,
      clock: '',
    }
  },
  methods: {
    async getDayTime() {
      let lat = 0.0
      let long = 0.0
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude.toFixed(4)
        long = position.coords.longitude.toFixed(4)
      })
      await axios
        .get(`https://api.sunrise-sunset.org/json?lat=${lat}lng=${long}`)
        .then((result) => result.data.results)
        .then((data) => {
          this.sunset = data.sunset.split(':')[0]
          this.sunrise = data.sunrise.split(':')[0]
        })
        .catch(() => console.log('bad'))
    },

    syncTheme() {
      const time = new Date()
      const hours = time.getHours()

      if (hours <= 12) {
        this.clock = 'url("/images/morning.png")'
        setTimeout(this.syncTheme, 60000)

        return
      }
      if (hours < 16 && hours > 12) {
        this.clock = 'url("/images/noon.png")'
        setTimeout(this.syncTheme, 60000)

        return
      }
      if (hours >= 16 && hours < 20) {
        this.clock = 'url("/images/evening.png")'
        setTimeout(this.syncTheme, 60000)

        return
      }
      this.clock = 'url("/images/night.png")'
      setTimeout(this.syncTheme, 60000)
    },
  },
  mounted() {
    this.getDayTime()
    this.syncTheme()
  },
  components: {
    QuoteComponent,
    TodoDisplayComponent,
  },
}
</script>

<template>
  <main id="home-main">
    <div class="wrapper">
      <div id="theme-picture"></div>
      <QuoteComponent id="quote"></QuoteComponent>
      <TodoDisplayComponent id="todo"></TodoDisplayComponent>
    </div>
  </main>
</template>
<style scoped>
#home-main {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  height: calc(100vh - 7rem);
  width: calc(100vw - 4rem);
  background-attachment: fixed;
}
#theme-picture {
  background-image: v-bind(clock);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  grid-column: 1;
  grid-row: 1;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}
#quote {
  grid-column: 1;
  grid-row: 2;
}
#todo {
  grid-column: 2;
  grid-row: 1;
}
</style>
