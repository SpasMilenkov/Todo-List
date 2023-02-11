<script>
import QuoteComponent from '../components/QuoteComponent.vue'
import TodoCreateComponent from '../components/TodoCreateComponent.vue'
import ForecastComponent from '../components/ForecastComponent.vue'
import TodoDisplayComponent from '../components/TodoDisplayComponent.vue'
import DoneDisplayComponent from '../components/DoneDisplayComponent.vue'
export default {
  data: function () {
    return {
      sunset: 0,
      sunrise: 0,
      clock: '',
      lat: 0.0,
      long: 0.0,
    }
  },
  methods: {
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
    this.syncTheme()
  },
  components: {
    QuoteComponent,
    TodoDisplayComponent,
    ForecastComponent,
    TodoCreateComponent,
    DoneDisplayComponent,
  },
}
</script>

<template>
  <main id="home-main">
    <div class="wrapper">
      <div id="theme-picture"></div>
      <QuoteComponent id="quote"></QuoteComponent>
      <TodoCreateComponent id="todo"></TodoCreateComponent>
      <ForecastComponent id="forecast"></ForecastComponent>
      <TodoDisplayComponent></TodoDisplayComponent>
      <DoneDisplayComponent></DoneDisplayComponent>
    </div>
  </main>
</template>
<style scoped>
#home-main {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  padding: 1rem;
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
</style>
