<script>
export default {
  data: function () {
    return {
      author: '',
      quote: '',
      loaded: false,
    }
  },
  methods: {
    async generateQuote() {
      const rnd = Math.floor(Math.random() * 1642)
      await fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((data) => {
          this.quote = `"${data[rnd].text}"`
          this.author = [rnd].author === null ? 'Unknown' : data[rnd].author
          this.loaded = true
        })
    },
  },
  mounted() {
    this.generateQuote()
  },
}
</script>
<template>
  <div v-if="loaded">
    <h1 id="quote">
      {{ quote }} <br />
      <br />
      {{ author }}
    </h1>
  </div>
</template>
<style scoped>
#quote {
  font-family: var(--main-title);
  font-size: 1.4rem;
  color: white;
  text-align: center;
}
</style>
