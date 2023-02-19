<script>
import TodoCard from './TodoCardComponent.vue'
export default {
  props: ['items', 'cardBackground'],
  data: function () {
    return {
      tasks: [],
    }
  },
  components: {
    TodoCard,
  },
  methods: {},
  watch: {
    items: function () {
      this.tasks = this.items
    },
  },
  mounted() {
    this.emitter.on('todo-added', (todo) => {
      this.tasks.push(JSON.parse(todo))
    })
    this.emitter.on('deleteTask', (task) => {
      const index = this.tasks
        .map(function (x) {
          return x.title
        })
        .indexOf(task)
      if (index !== -1) this.tasks.splice(index, 1)
    })
    this.emitter.on('taskDone', (task) => {
      const index = this.tasks
        .map(function (x) {
          return x.title
        })
        .indexOf(task)
      if (index !== -1) this.tasks.splice(index, 1)
    })
  },
}
</script>
<template>
  <div id="todo-list">
    <h1 class="main-title">TODO:</h1>
    <div class="wrapper">
      <TodoCard v-for="task in tasks" :todo="task" :key="task.id" />
    </div>
  </div>
</template>

<style scoped>
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
