<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data: function () {
    return {
      displayedTime: "",
      clock: "",
      offset: "linear-gradient(0deg, rgb(229, 172, 59) 50%, #3d4f5d 50%)",
    };
  },
  methods: {
    updateTime() {
      setTimeout(this.updateTime, 1000);
      let time = new Date();
      this.displayedTime = time.toLocaleTimeString();
      let hours = time.getHours();
      let offsetAmount = (time.getMinutes() + hours*60) / 5;
      let newOffset = `linear-gradient(${offsetAmount*0.625}deg, rgb(229, 172, 59) 50%, #3d4f5d 50%)`;

      if(newOffset !== this.offset)
        this.offset = newOffset

      if (hours < 12) {
        this.clock = 'url("/public/images/morning.png")';
        return;
      }

      if (hours < 16 && hours > 12) {
        this.clock = 'url("/public/images/noon.png")';
        return;
      }
      
      this.clock = 'url("/public/images/evening.png")';
    },
  },
  mounted() {
    this.updateTime();
  },
}
</script>
<template>
  <div class="container">
    <div class="mask">
      <div class="fill">
        <h1 class="time">{{ displayedTime }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  /* background-color: var(--gray); */
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .fill {
  width: 29rem;
  height: 29rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15rem;
  background-image: v-bind(clock);
  background-position: left;
  background-size: cover;
  background-color: rgba(20, 20, 20, 0.15);
  background-blend-mode: darken;
  background-repeat: no-repeat;
}
.container .mask {
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15rem;
  background: rgb(232, 255, 0);
  background: v-bind(offset);
}
.time {
  color: white;
  font-size: 4rem;
  font-family: "Robot", sans-serif;
}
</style>