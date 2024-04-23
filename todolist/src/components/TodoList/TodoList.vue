<script setup>
const todos = ref([])
const isDone = ref(false)

function handleAddTodo(newTodo) {
  const todo = {
    newTodo,
    done: false,
    id: new Date().toISOString()
  }

  if (newTodo.trim() === '') return

  todos.value.push(todo)
}

const doneTodos = computed(() => {
   return todos.value.filter((todo) => todo.done)
})

const notDoneTodos = computed(() => {
   return todos.value.filter((todo) => !todo.done)
})
</script>

<template>
  <div :class="$style.todoList">
    <div :class="$style.todoListContainer">
      <TaskInput @update-add-todo="handleAddTodo" />

      <TaskList :todos="notDoneTodos" :isDone="isDone"/>

      <TaskList  :todos="doneTodos" :isDone="!isDone"/>
    </div>
  </div>
</template>

<style lang="scss" module>
.todoList {
  padding: 3rem;
}

.todoListContainer {
  background-color: white;
  max-width: 40rem;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
