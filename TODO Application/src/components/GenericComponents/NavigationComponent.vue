<script>
import Clock from './ClockComponent.vue'
export default {
  components: {
    Clock,
  },
}
</script>
<template>
  <nav id="navigation" class="flex-container">
    <div class="wrapper">
      <Clock></Clock>
    </div>
    <ul id="navigation-container">
      <li><router-link :to="'/forecast'">Forecast</router-link></li>
      <li><a href="">Dummy 2</a></li>
    </ul>
  </nav>
</template>
<style scoped>
#navigation {
  height: 5%;
  border-radius: 0px;
  box-sizing: border-box;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
}
#home {
  height: 95%;
}
#navigation-container {
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
.wrapper {
  width: 20vw;
  min-width: 15rem;
}
</style>
