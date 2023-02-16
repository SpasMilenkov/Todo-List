<script>
import QuoteComponent from '../components/QuoteComponent.vue'
import TodoCreateComponent from '../components/TodoCreateComponent.vue'
import ForecastComponent from '../components/ForecastComponent.vue'
import TodoDisplayComponent from '../components/TodoDisplayComponent.vue'
export default {
  data: function () {
    return {
      sunset: 0,
      sunrise: 0,
      clock: '',
      lat: 0.0,
      long: 0.0,
      brightness: 'inset 0 0 2000px rgba(255, 255, 255, 0.5)',
      background:
        'linear-gradient(45deg, #444558, #b35c9e, rgba(230,196,156,1))',
    }
  },
  methods: {
    syncTheme() {
      const time = new Date()
      const hours = time.getHours()
      
      if (hours <= 12) {
        this.clock = 'url("/images/morning.png")'
        this.background =
          'linear-gradient(45deg, #444558, #b35c9e, rgba(230,196,156,1))'
        setTimeout(this.syncTheme, 60000)

        return
      }
      if (hours < 16 && hours > 12) {
        this.clock = 'url("/images/noon.png")'
        this.background = 'linear-gradient(330deg, #e5ac3b, #c87225, #964424)'
        setTimeout(this.syncTheme, 60000)

        return
      }
      if (hours >= 16 && hours < 20) {
        this.clock = 'url("/images/evening.png")'
        this.brightness = `inset 0 0 2000px rgba(255, 255, 255, 0.3)`
        this.background =
          'linear-gradient(330deg, #aa5c46, #6d2e61, rgba(26,21,49,1))'
        setTimeout(this.syncTheme, 60000)

        return
      }
      this.clock = 'url("/images/night.png")'
      this.brightness = `inset 0 0 2000px rgba(255, 255, 255, 0.3)`
      this.background =
        'linear-gradient(120deg, #271d32, #3d3275, rgba(60,82,195,1))'
      setTimeout(this.syncTheme, 60000)
    },
  },
  mounted() {
    this.syncTheme()
  },
  components: {
    QuoteComponent,
    TodoDisplayComponent,
    ForecastComponent,
    TodoCreateComponent,
  },
}
</script>

<template>
  <main id="home-main">
    <div class="main-wrapper">
      <div id="theme-picture"></div>
      <QuoteComponent id="quote" class="container"></QuoteComponent>
      <TodoCreateComponent id="todo" class="container"></TodoCreateComponent>
      <ForecastComponent id="forecast" class="container"></ForecastComponent>
      <TodoDisplayComponent id="list" class="container"></TodoDisplayComponent>
    </div>
  </main>
</template>
<style scoped>
.container:before {
  box-shadow: v-bind(brightness);
}
#home-main {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  padding: 1rem;
  background: v-bind(background);
  background-attachment: fixed;
  box-sizing: border-box;
  height: 95%;
  box-sizing: border-box;
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
.main-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  height: 100%;
}
#quote {
  grid-column: 1;
  grid-row: 2;
}
#todo {
  grid-column: 2;
  grid-row: 1;
}
#forecast {
  grid-column: 2;
  grid-row: 2;
}
#list {
  grid-row-start: 1;
  grid-row-end: 2 span;
  grid-column: 3;
}
</style>
