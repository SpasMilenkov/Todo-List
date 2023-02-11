<script>
export default {
  props: ['todo'],
  data: function () {
    return {}
  },
}
</script>
<template>
  <div class="container">
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.description }}</p>
    <h2>{{ todo.deadline }}</h2>
    <div class="marker"></div>
  </div>
</template>
<style scoped>
.container {
  width: 95%;
  height: 33%;
  padding: 0 1rem;
}
</style>
