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
  width: calc(100vw - 2rem);
  height: 3rem;
  border-radius: 0px;
}
#navigation-container {
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
.wrapper{
  widows: 20vw;
  min-width: 15rem;
}
</style>
