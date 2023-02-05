<script>
export default {
  data: function () {
    return {
      displayedTime: "",
      clock: "",
      offset: "linear-gradient(0deg, rgb(229, 172, 59) 50%, #3d4f5d 50%)",
      quote: "",
      author: "",
    };
  },
  methods: {
    updateTime() {
      setTimeout(this.updateTime, 1000);
      let time = new Date();
      this.displayedTime = time.toLocaleTimeString();
      let hours = time.getHours();
      let offsetAmount = (time.getMinutes() + hours * 60) / 5;
      let newOffset = `linear-gradient(${
        offsetAmount * 0.625
      }deg, rgb(229, 172, 59) 50%, #3d4f5d 50%)`;

      if (newOffset !== this.offset) this.offset = newOffset;

      if (hours < 12) {
        this.clock = 'url("/public/images/morning.png")';
        return;
      }

      if (hours < 16 && hours > 12) {
        this.clock = 'url("/public/images/morning.png")';
        return;
      }

      this.clock = 'url("/public/images/night.png")';
    },
    async generateQuote() {
      const rnd = Math.floor(Math.random() * 1642);
      await fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((data) => {
          this.quote = `"${data[rnd].text}"`;
          this.author = data[rnd].author == null ? "Unknown" : data[rnd].author;
        });
      console.log(this.quote);
    },
  },
  mounted() {
    this.updateTime();
    this.generateQuote();
  },
};
</script>
<template>
  <div class="container">
    <div class="mask">
      <div class="fill">
        <h1 class="time">{{ displayedTime }}</h1>
      </div>
    </div>
    <h1 id="quote">
      {{ quote }} <br />
      <br />
      {{ author }}
    </h1>
  </div>
</template>
<style scoped>
.container {
  width: 30rem;
  height: 50rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  border-radius: 10px;
}
.container:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  filter: blur(25px);
  margin: -20px;
}
.container .fill {
  width: 29rem;
  height: 29rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15rem;
  background-image: v-bind(clock);
  background-position: center;
  background-size: cover;
  /* background-color: rgba(20, 20, 20, 0.15); */
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
#quote {
  font-family: var(--main-title);
  font-size: 1.5rem;
  color: white;
  text-align: center;
}
</style>
