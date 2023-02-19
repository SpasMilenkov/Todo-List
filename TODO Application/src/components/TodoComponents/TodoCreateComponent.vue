<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  props: ['theme'],
  data: function () {
    return {
      creating: false,
      title: '',
      description: '',
      deadline: '',
      toDo: {},
    }
  },
  methods: {
    loadForm() {
      this.creating = true
    },
    closeForm() {
      this.creating = false
    },
    createToDo() {
      this.toDo = JSON.stringify({
        title: this.title,
        description: this.description,
        expire: this.deadline,
        completed: false,
      })
      localStorage.setItem(this.title, this.toDo)
      this.closeForm()
      this.title = ''
      this.description = ''
      this.deadline = ''
      this.emitter.emit('todo-added', this.toDo)
    },
  },
  components: { VueDatePicker },
}
</script>

<template>
  <div class="wrapper">
    <div id="create-container" v-if="!creating" @click="loadForm">
      <h1 class="main-title">What needs to be done?</h1>
    </div>
    <div v-if="creating" id="input-wrapper">
      <div class="flex-container">
        <input
          v-model="title"
          type="text"
          name="title"
          id="title-input"
          placeholder="Enter title"
        />
        <div class="date-container">
          <VueDatePicker
            v-model="deadline"
            type="datetime-local"
            name="time"
            id="time-input"
            dark
          />
        </div>
      </div>
      <textarea
        v-model="description"
        dark
        name="description"
        id="description-input"
        cols="30"
        rows="10"
        placeholder="Enter description..."
      ></textarea>
      <div class="button-wrapper">
        <button @click="createToDo" class="button">create</button>
        <button @click="closeForm" class="button">cancel</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
}
#create-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#input-wrapper {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  width: 95%;
  height: 90%;
  padding: 1rem;
}
.flex-container {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  box-sizing: border-box;
}
.date-container {
  width: 50%;
}
#title-input,
#description-input {
  width: 95%;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  box-sizing: border-box;
}
#title-input {
  width: 50%;
  font-size: 1rem;
  padding: 0.3rem;
}
#title-input:focus,
#description-input:focus,
#time-input:focus {
  outline: solid 3px var(--night-orange);
}
#title-input {
  font-size: 1.5rem;
}
#description-input {
  font-size: 1rem;
  resize: none;
  height: 20rem;
}
#time-input {
  font-size: 1.2rem;
}
.button-wrapper {
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  gap: 0.5rem;
  box-sizing: border-box;
}
.button {
  font-size: 1.5rem;
  font-family: var(--paragraph-font);
  font-weight: 600;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: var(--night-orange);
  color: white;
}
</style>
