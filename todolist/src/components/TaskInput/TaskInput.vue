<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  handleAddTodo: Function,
  updateTodo: Function,
  finishEditTodo: Function,
  currentEditingTodo: Object
})

const currentValue = ref('')

function handleSubmit(event) {
  event.preventDefault()

  if (props.currentEditingTodo) {
    props.finishEditTodo()
    if (currentValue.value) return (currentValue.value = '')
  } else {
    props.handleAddTodo(currentValue.value)
    currentValue.value = ''
  }
}

function handleChangeInput(event) {
  const { value } = event.target

  if (props.currentEditingTodo) {
    props.updateTodo(value)
  } else {
    currentValue.value = value
  }
}

const displayInputValue = computed(() => {
  return props.currentEditingTodo ? props.currentEditingTodo.name : currentValue.value
})

const checkisEditingTodo = computed(() => {
  return props.currentEditingTodo ? '✔' : '➕'
})
</script>

<template>
  <div :class="$style.taskInputContainer">
    <h1 :class="$style.taskInputTitle">Todolist</h1>

    <form :class="$style.taskInputForm" @submit.prevent="handleSubmit">
      <input
        :class="$style.taskInput"
        type="text"
        placeholder="Please fill your task"
        :value="displayInputValue"
        @change="handleChangeInput"
      />
      <button :class="$style.taskInputBtn" type="submit">
        {{ checkisEditingTodo }}
      </button>
    </form>
  </div>
</template>

<style lang="scss" module>
.taskInputTitle {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.taskInputForm {
  display: flex;
  align-items: center;
}

.taskInput {
  height: 4rem;
  flex-grow: 1;
  margin-right: 1rem;
  border-radius: 0.7rem;
  padding: 0 1rem;
  border-width: 1px;
}

.taskInputBtn {
  flex-shrink: 0;
  width: 5rem;
  height: 4rem;
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-width: 1px;

  &:hover {
    background-color: var(--color-hover-primary);
  }
}
</style>
