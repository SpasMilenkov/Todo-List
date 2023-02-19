<script>
export default {
  data: function () {
    return {
      displayedTime: '',
      clock: '',
    }
  },
  methods: {
    updateTime() {
      setTimeout(this.updateTime, 1000)
      let time = new Date()
      this.displayedTime = time.toLocaleTimeString()
    },
  },
  mounted() {
    this.updateTime()
  },
}
</script>
<template>
  <h1 class="time">{{ displayedTime }}</h1>
</template>
<style scoped>
.time {
  color: white;
  font-size: 2rem;
  font-family: 'Robot', sans-serif;
}
</style>
