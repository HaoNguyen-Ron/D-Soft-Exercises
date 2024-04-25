<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['handleAddTodo', 'updateTodo', 'finishEditTodo'])

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
    emit('finishEditTodo')
    if (currentValue.value) return (currentValue.value = '')
  } else {
    emit('handleAddTodo', currentValue.value)
    currentValue.value = ''
  }
}

function handleChangeInput(event) {
  const { value } = event.target

  if (props.currentEditingTodo) {
    emit('updateTodo', value)
  } else {
    currentValue.value = value
  }
}

const checkIsEditingTodo = computed(() => {
  return {
    button: props.currentEditingTodo
      ? '<i class="fa-regular fa-pen-to-square" style="color: var(color-danger);"></i>'
      : '<i class="fa-solid fa-circle-plus" <i class="fa-regular fa-pen-to-square" style="color: var(color-primary);"></i>',
    inputValue: props.currentEditingTodo ? props.currentEditingTodo.name : currentValue.value,
    borderColor: props.currentEditingTodo ? 'var(--color-danger)' : 'var(--color-primary)'
  }
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
        :value="checkIsEditingTodo.inputValue"
        @change="handleChangeInput"
      />

      <button :class="$style.taskInputBtn" type="submit">
        <span
          v-html="checkIsEditingTodo.button"
          :class="$style.taskInputICon"
          :style="{ color: checkIsEditingTodo.borderColor }"
        ></span>
      </button>
    </form>
  </div>
</template>

<style lang="scss" module>
.taskInputTitle {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 600;
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

  &:focus {
    outline: 1px solid var(--color-primary);
    background-color: var(--color-background-primary);
  }
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

.taskInputICon {
  font-size: 3rem;
}
</style>
