<script>
export default {
  props: ['todo'],
  data: function () {
    return {
      degree: `linear-gradient(${Math.floor(
        Math.random() * 380
      )}deg, #b72479, #5f226f, rgba(26, 21, 49, 1))`,
    }
  },
}
</script>
<template>
  <div class="container">
    <h1 class="main-title">{{ todo.title }}</h1>
    <p class="description">{{ todo.description }}</p>
    <div class="wrapper">
      <h2 class="expiration">{{ todo.expire }}</h2>
      <button class="marker">Complete</button>
      <button class="marker"></button>
    </div>
  </div>
</template>
<style scoped>
.container {
  overflow: hidden;
  width: 95%;
  height: 15rem;
  padding: 0 1rem;
  flex-direction: column;
  gap: 0.5rem;
  background: v-bind(degree);
  flex-shrink: 0;
}
.container:before {
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.021);
}
.main-title {
  width: 100%;
  text-align: left;
  height: 25%;
  font-size: 2rem;
}
.description {
  color: white;
  font-family: var(--subtitle-font);
  width: 100%;
  height: 50%;
  font-size: 1.3rem;
}
.expiration {
  color: white;
  font-size: 1.5rem;
  font-family: var(--subtitle-font);
}
.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 25%;
  justify-content: space-between;
}
.marker {
  all: unset;
  background-color: #51a7b6;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
