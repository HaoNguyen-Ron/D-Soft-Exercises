import { defineStore } from 'pinia'

const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    currentEditingTodo: null,
    isDone: false
  }),

  actions: {
    addTodo(newTodoName) {
      if (newTodoName.trim() === '') return

      const todo = {
        name: newTodoName,
        done: false,
        id: new Date().toISOString()
      }

      this.todos.push(todo)
    },

    toggleDoneTodo(id, done) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }

        return todo
      })
    },

    startEditTodo(id) {
      const findTodo = this.todos.find((todo) => todo.id === id)

      if (findTodo) {
        this.currentEditingTodo = findTodo
      }
    },

    updateTodo(newTodoName) {
      if (!this.currentEditingTodo) return null

      this.currentEditingTodo.name = newTodoName
    },

    finishEditTodo() {
      if (this.currentEditingTodo) {
        this.todos = this.todos.map((todo) => {
          if (todo.id === this.currentEditingTodo.id) {
            return { ...todo, name: this.currentEditingTodo.name }
          }
          return todo
        })

        this.currentEditingTodo = null
      }
    },

    handleDeleteTodo(id) {
      if (this.currentEditingTodo) {
        return (this.currentEditingTodo = null)
      }
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  },

  getters: {
    doneTodos() {
      return this.todos.filter((todo) => todo.done)
    },

    notDoneTodos() {
      return this.todos.filter((todo) => !todo.done)
    }
  }
})

export default useTodoStore
