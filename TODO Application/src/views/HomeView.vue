<script>
import QuoteComponent from '../components/GenericComponents/QuoteComponent.vue'
import TodoCreateComponent from '../components/TodoComponents/TodoCreateComponent.vue'
import TodoCard from '../components/TodoComponents/TodoCardComponent.vue'
import TodoDisplayComponent from '../components/TodoComponents/TodoDisplayComponent.vue'
import theme from '../Sync'
export default {
  data: function () {
    return {
      image: '',
      brightness: 'inset 0 0 2000px rgba(255, 255, 255, 0.5)',
      background:
        'linear-gradient(45deg, #444558, #b35c9e, rgba(230,196,156,1))',
      items: [],
      closest: {},
      datePick: 'white',
    }
  },
  methods: {
    syncTheme() {
      this.image = theme.image
      this.brightness = theme.brightness
      this.datePick = theme.datePick
      this.background = theme.bodyBackground
      console.log(theme)
      setTimeout(this.syncTheme, 300000)
    },
    getAllItems() {
      let values = [],
        keys = Object.keys(localStorage),
        i = keys.length

      while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])))
      }
      this.items = values
    },
    getClosest() {
      this.items.sort((a, b) => {
        new Date(a.expire).getTime() - new Date(b.expire).getTime()
      })
      console.log(this.items[0])
      console.log(this.items)
      this.closest = this.items[0]
    },
  },
  mounted() {
    this.syncTheme()
    this.getAllItems()
    this.getClosest()
    this.emitter.on('todo-added', (todo) => {
      this.items.push(JSON.parse(todo))
    })
    this.emitter.on('taskDelete', (task) => {
      const index = this.items
        .map(function (x) {
          return x.title
        })
        .indexOf(task)
      if (index !== -1) this.items.splice(index, 1)
      this.getClosest()
    })
  },
  components: {
    QuoteComponent,
    TodoDisplayComponent,
    TodoCard,
    TodoCreateComponent,
  },
}
</script>

<template>
  <main id="home-main">
    <div class="main-wrapper">
      <div id="theme-picture"></div>
      <QuoteComponent id="quote" class="container"></QuoteComponent>
      <TodoCreateComponent id="todo" class="container"></TodoCreateComponent>
      <section id="next-up" class="container">
        <h1 class="main-title">Next up:</h1>
        <TodoCard :todo="closest"></TodoCard>
      </section>
      <TodoDisplayComponent
        id="list"
        class="container"
        :items="items"
      ></TodoDisplayComponent>
    </div>
  </main>
</template>
<style scoped>
.container:before {
  box-shadow: v-bind(brightness);
}
.container {
  flex-direction: column;
  gap: 1rem;
}
.main-title {
  padding-left: 0.5rem;
  font-size: 1.5rem;
}
#home-main {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  padding: 1rem;
  background: v-bind(background);
  background-attachment: fixed;
  box-sizing: border-box;
  height: 95%;
  box-sizing: border-box;
}
#theme-picture {
  background-image: v-bind(image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  grid-column: 1;
  grid-row: 1;
}
.main-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  height: 100%;
}
#quote {
  grid-column: 1;
  grid-row: 2;
}
#todo {
  grid-column: 2;
  grid-row: 1;
}
#next-up {
  grid-column: 2;
  grid-row: 2;
  align-items: flex-start;
}
#list {
  grid-row-start: 1;
  grid-row-end: 2 span;
  grid-column: 3;
}
</style>
