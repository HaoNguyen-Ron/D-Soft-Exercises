<script setup>
import useTodoStore from '@/stores/store.js'

const todoStore = useTodoStore()

const handleAddTodo = (newTodoName) => todoStore.addTodo(newTodoName)

const setDoneTodo = (id, done) => {
  todoStore.toggleDoneTodo(id, done)
}

const startEditTodo = (id) => {
  todoStore.startEditTodo(id)
}

const updateTodo = (newTodoName) => {
  todoStore.updateTodo(newTodoName)
}

const finishEditTodo = () => {
  todoStore.finishEditTodo()
}

const handleDeleteTodo = (id) => {
  todoStore.handleDeleteTodo(id)
}
</script>

<template>
  <div :class="$style.todoList">
    <div :class="$style.todoListContainer">
      <TaskInput
        @handleAddTodo="handleAddTodo"
        :currentEditingTodo="todoStore.currentEditingTodo"
        @updateTodo="updateTodo"
        @finishEditTodo="finishEditTodo"
      />

      <TaskList
        :todos="todoStore.notDoneTodos"
        :isDone="(todoStore.isDone = false)"
        @setDoneTodo="setDoneTodo"
        @startEditTodo="startEditTodo"
        @handleDeleteTodo="handleDeleteTodo"
      />

      <TaskList
        :todos="todoStore.doneTodos"
        :isDone="(todoStore.isDone = true)"
        @setDoneTodo="setDoneTodo"
        @startEditTodo="startEditTodo"
        @handleDeleteTodo="handleDeleteTodo"
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
