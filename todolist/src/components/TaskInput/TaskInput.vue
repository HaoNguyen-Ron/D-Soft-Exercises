<script setup>
const emit = defineEmits('updateAddTodo')

const currentValue = ref('')

function handleSubmit() {
  emit('updateAddTodo', currentValue.value)
  currentValue.value = ''
}
</script>

<template>
  <div :class="$style.taskInputContainer">
    <h1 :class="$style.taskInputTitle">Todolist</h1>

    <form :class="$style.taskInputForm" @submit.prevent="handleSubmit">
      <input :class="$style.taskInput" type="text" placeholder="Please fill your task" v-model="currentValue" />
      <!-- <button type="submit">{currentTodo ? '✔' : '➕'}</button> -->
      <button :class="$style.taskInputBtn" type="submit">➕</button>
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
