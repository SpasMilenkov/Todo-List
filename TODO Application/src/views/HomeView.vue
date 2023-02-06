<script setup>
import ClockComponent from '../components/ClockComponent.vue'
import TodoDisplayComponent from '../components/TodoDisplayComponent.vue'
import axios from 'axios'
import { onMounted } from 'vue'

let sunset = 0
let sunrise = 0
async function getDayTime() {
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
      sunset = data.sunset.split(':')[0]
      sunrise = data.sunrise.split(':')[0]
    })
    .catch(() => console.log('bad'))
}
onMounted(() => {
  getDayTime()
})
</script>

<template>
  <main id="home-main">
    <ClockComponent :sunrise="sunrise" :sunset="sunset"></ClockComponent>
    <TodoDisplayComponent></TodoDisplayComponent>
  </main>
</template>
<style scoped>
#home-main {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  height: calc(100vh - 2rem);
  width: calc(100vw - 2rem);
  background-attachment: fixed;
}
</style>
