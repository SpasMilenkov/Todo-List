<script>
import Error from '../GenericComponents/ErrorComponent.vue'
import theme from '../../Sync'
import { dateStringConstructor } from '../../utilities'
export default {
  props: ['todo'],
  data: function () {
    return {
      degree: theme.cardBackground,
      dataFetched: false,
      content: this.todo,
      deadline: '',
    }
  },

  methods: {
    markDone() {
      this.emitter.emit('taskDone', this.content.title)
      this.content.completed = true
      const updated = JSON.stringify(this.content)
      console.log(updated)
      localStorage.setItem(this.content.title, updated)
    },
    markRemoved() {
      this.emitter.emit('deleteTask', this.todo.title)
      localStorage.removeItem(this.content.title)
    },
    calculateTime() {
      const deadline = new Date(this.content.expire)
      const now = new Date()
      const difference = Math.abs(now - deadline)
      const diffHours = Math.ceil(difference / (1000 * 60 * 60))
      const diffMinutes = Math.ceil(difference / (1000 * 60 * 60)) % 60
      console.log(diffMinutes)
      this.deadline = dateStringConstructor(diffHours, diffMinutes)
    },
  },
  watch: {
    todo: function () {
      this.content = this.todo
    },
  },
  mounted() {
    if (this.todo.length !== 0) {
      this.dataFetched = true
    }
    this.emitter.on('updateCard', (background) => {
      this.degree = background
    })
    this.calculateTime()
  },
  components: {
    Error,
  },
}
</script>
<template>
  <div class="container" v-if="dataFetched">
    <h1 class="main-title">{{ content.title }}</h1>
    <p class="description">{{ content.description }}</p>
    <div class="wrapper">
      <h2 class="expiration">{{ deadline }}</h2>
      <button class="marker" @click="markDone()">
        <span class="material-icons icon"> done </span>
      </button>
      <button class="marker" @click="markRemoved()" id="remove">
        <span class="material-icons icon"> delete_outline </span>
      </button>
    </div>
  </div>
  <Error class="container" v-if="!dataFetched"></Error>
</template>
<style scoped>
.container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 15rem;
  max-height: 20rem;
  padding: 1rem 1rem;
  flex-direction: column;
  gap: 0.5rem;
  background: v-bind(degree);
  flex-shrink: 0;
  box-sizing: border-box;
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
  justify-content: flex-end;
  width: 100%;
  height: 25%;
  gap: 1rem;
}
.marker {
  all: unset;
  background-color: #51a7b6;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--subtitle-font);
  font-weight: 800;
  width: 4rem;
}
#remove {
  background-color: #ff0033;
}
</style>
