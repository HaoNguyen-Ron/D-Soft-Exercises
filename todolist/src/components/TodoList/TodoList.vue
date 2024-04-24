<script setup>
import { ref, computed } from 'vue'

const todos = ref([])
const isDone = ref(false)
const currentEditingTodo = ref(null)

function handleAddTodo(newTodo) {
  const todo = {
    name: newTodo,
    done: false,
    id: new Date().toISOString()
  }

  if (newTodo.trim() === '') return

  todos.value.push(todo)
}

function setDoneTodo(id, done) {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done }
    }
    return todo
  })
}

const startEditTodo = (id) => {
  const findTodo = todos.value.find((todo) => todo.id === id)
  if (findTodo) {
    currentEditingTodo.value = findTodo
  }
}

const updateTodo = (value) => {
  if (!currentEditingTodo.value) return null
  currentEditingTodo.value.name = value
}

const finishEditTodo = () => {
  if (currentEditingTodo.value) {
    todos.value = todos.value.map((todo) => {
      if (todo.id === currentEditingTodo.value.id) {
        return { ...todo, name: currentEditingTodo.value.name }
      }
      return todo
    })
    currentEditingTodo.value = null
  }
}

const handleDeleteTodo = (id) => {
  if (currentEditingTodo.value) {
    return (currentEditingTodo.value = null)
  }
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

const doneTodos = computed(() => {
  return todos.value.filter((todo) => todo.done) || []
})

const notDoneTodos = computed(() => {
  return todos.value.filter((todo) => !todo.done) || []
})
</script>

<template>
  <div :class="$style.todoList">
    <div :class="$style.todoListContainer">
      <TaskInput
        :handleAddTodo="handleAddTodo"
        :currentEditingTodo="currentEditingTodo"
        :updateTodo="updateTodo"
        :finishEditTodo="finishEditTodo"
      />

      <TaskList
        :todos="notDoneTodos"
        :isDone="isDone"
        :setDoneTodo="setDoneTodo"
        :startEditTodo="startEditTodo"
        :handleDeleteTodo="handleDeleteTodo"
      />

      <TaskList
        :todos="doneTodos"
        :isDone="!isDone"
        :setDoneTodo="setDoneTodo"
        :startEditTodo="startEditTodo"
        :handleDeleteTodo="handleDeleteTodo"
      />
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
