<script setup>
import HomeView from './views/HomeView.vue'
import ClockComponent from './components/ClockComponent.vue'
</script>

<template>
  <nav id="navigation" class="container">
    <div class="wrapper">
      <ClockComponent></ClockComponent>
    </div>
    <ul id="navigation-container">
      <li><a href="">Dummy 1</a></li>
      <li><a href="">Dummy 2</a></li>
    </ul>
  </nav>
  <HomeView></HomeView> 
</template>

<style scoped>
#navigation {
  height: 5%;
  border-radius: 0px;
  box-sizing: border-box;
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
