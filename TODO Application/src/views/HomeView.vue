<script setup>
import ClockComponent from '../components/ClockComponent.vue'
import TodoDisplayComponent from '../components/TodoDisplayComponent.vue'
</script>

<template>
  <main id="home-main">
    <ClockComponent></ClockComponent>
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
