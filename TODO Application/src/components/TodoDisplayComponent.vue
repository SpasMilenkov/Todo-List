<script>
import TodoCard from './TodoCardComponent.vue'
export default {
  data: function () {
    return {
      items: [],
    }
  },
  components: {
    TodoCard,
  },
  methods: {
    getAllItems() {
      let values = [],
        keys = Object.keys(localStorage),
        i = keys.length

      while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])))
      }
      this.items = values
    },
  },
  mounted() {
    this.getAllItems()
    this.emitter.on('todo-added', (todo) => {
      this.items.push(JSON.parse(todo))
    })
  },
}
</script>
<template>
  <div id="todo-list">
    <h1 class="main-title">TODO:</h1>
    <div class="wrapper">
      <TodoCard v-for="item in items" :todo="item" :key="item.id" />
    </div>
  </div>
</template>

<style scoped>
.container {
  flex-direction: column;
  padding: 1rem;
}
#todo-list {
  overflow-y: auto;
  overflow-x: hidden;
}
.main-title {
  text-align: left;
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
}
.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  gap: 1rem;
  padding: 0.5rem;
  overflow-y: auto;
  overflow-x: hidden;

}
</style>
