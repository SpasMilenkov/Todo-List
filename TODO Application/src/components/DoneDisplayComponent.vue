<script>
import TodoCard from './TodoCardComponent.vue'
export default {
  data: function () {
    return {}
  },
  components: {
    TodoCard,
  },
}
</script>
<template>
  <div class="container">
    <h1 class="main-title">DONE:</h1>
    <div class="wrapper">
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  </div>
</template>

<style scoped>
.container {
  flex-direction: column;
  padding: 1rem;
}
.main-title {
  text-align: left;
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  gap: 1rem;
  padding: 0.5rem;
}
</style>
