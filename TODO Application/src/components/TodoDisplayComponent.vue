<template>
  <div v-if="!creating" class="container" @click="loadForm">
    <h1 class="main-title">What needs to be done?</h1>
  </div>
  <div v-if="creating" id="input-wrapper" class="container">
    <input
      v-model="title"
      type="text"
      name="title"
      id="title-input"
      placeholder="Enter title"
    />
    <textarea
      v-model="description"
      name="description"
      id="description-input"
      cols="30"
      rows="10"
      placeholder="Enter description..."
    ></textarea>
    <input
      v-model="deadline"
      type="datetime-local"
      name="time"
      id="time-input"
    />
    <div class="button-wrapper">
      <button @click="createToDo" class="button">create</button>
      <button @click="closeForm" class="button">cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['theme'],
  data: function () {
    return {
      creating: false,
      title: '',
      description: '',
      deadline: '',
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
      const toDo = JSON.stringify({
        title: this.title,
        description: this.description,
        expire: this.deadline,
        completed: false,
      })
      localStorage.setItem(this.title, toDo)
      this.closeForm()
      this.title = ''
      this.description = ''
      this.deadline = ''
    },
  },
}
</script>

<style scoped>
.main-title {
  font-family: var(--main-title);
  font-size: 1.4rem;
  color: white;
  text-align: center;
}
#input-wrapper {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 1rem;
}
#title-input,
#description-input,
#time-input {
  width: 90%;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
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
  height: 10rem;
}
#time-input {
  font-size: 1.2rem;
}
.button-wrapper {
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: center; */
  gap: 0.5rem;
  padding-left: 1rem;
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
