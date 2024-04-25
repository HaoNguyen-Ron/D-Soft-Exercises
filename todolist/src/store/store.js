import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    currentEditingTodo: null,
    isDone: false
  },

  mutations: {
    handleAddTodos(state, payload) {
      state.todos.push(payload)
    },

    setDoneTodo(state, id, done) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    },

    startEditTodo(state, id) {
      const findTodo = state.todos.find((todo) => todo.id === id)
      if (findTodo) {
        state.currentEditingTodo = findTodo
      }
    },

    updateTodo(state, updatingTodo) {
      if (!state.currentEditingTodo) return null
      state.currentEditingTodo.name = updatingTodo
    },

    finishEditTodo(state) {
      if (state.currentEditingTodo) {
        state.todos = state.todos.map((todo) => {
          if (todo.id === state.currentEditingTodo.id) {
            return { ...todo, name: state.currentEditingTodo.name }
          }
          return todo
        })
        state.currentEditingTodo = null
      }
    },

    handleDeleteTodo(state, id) {
      if (state.currentEditingTodo) {
        return (state.currentEditingTodo = null)
      }
      state.todos = state.todos.filter((todo) => todo.id !== id)
    }
  }
})

export default store
