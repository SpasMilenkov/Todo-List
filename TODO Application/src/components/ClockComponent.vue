<template>
  <div class="container">
    <h1 class="time">{{ displayedTime }}</h1>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      displayedTime: "",
    };
  },
  methods: {
    updateTime() {
      setTimeout(this.updateTime, 1000);
      let time = new Date();
      this.displayedTime = time.toLocaleTimeString();
    },
  },
  mounted() {
    this.updateTime();
  },
}
</script>

<style scoped>
.container {
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  background-color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
}
.time {
  color: whitesmoke;
  font-size: 4rem;
  font-family: "Robot", sans-serif;
}
</style>