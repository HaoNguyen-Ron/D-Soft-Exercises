<script setup>
import { useCssModule, computed } from 'vue'

const emit = defineEmits(['handleDeleteTodo', 'startEditTodo', 'setDoneTodo'])

const props = defineProps({
  todos: Object,
  isDone: Boolean,
  setDoneTodo: Function,
  startEditTodo: Function,
  handleDeleteTodo: Function
})

const checkTaskCompletion = computed(() => {
  const $style = useCssModule('$style')

  const anyDone = props.todos.some((todo) => todo.done)

  return {
    title: props.isDone ? 'Completed' : 'Incomplete',
    background: props.isDone ? $style.completed : $style.incomplete,
    textDecoration: anyDone ? $style.taskListNameDone : '',
    backgroundColor: props.isDone ? 'var(--color-primary-light)' : 'var(--color-danger-light)'
  }
})
</script>

<template>
  <div :class="$style.taskListContainer">
    <h2 :class="[$style.taskListTitle, checkTaskCompletion.background]">
      {{ checkTaskCompletion.title }}
    </h2>

    <div :class="$style.taskList">
      <div :class="$style.task" v-for="todo in props.todos" :key="todo.id">
        <input
          type="checkbox"
          :class="$style.taskListCheckbox"
          :checked="todo.done"
          @change="(e) => emit('setDoneTodo', todo.id, e.target.checked)"
        />

        <span :class="[checkTaskCompletion.textDecoration, $style.taskListName]"> {{ todo.name }} </span>

        <div :class="$style.taskListActions">
          <button :class="$style.taskListBtn" @click="emit('startEditTodo', todo.id)">
            <i class="fa-regular fa-pen-to-square"></i>
          </button>

          <button :class="$style.taskListBtn" @click="emit('handleDeleteTodo', todo.id)">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.taskListContainer {
  margin-top: 2rem;
}

.taskList {
  padding: 0 1rem;
}

.taskListTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.completed {
  color: var(--color-primary);
}

.incomplete {
  color: var(--color-danger);
}

.task {
  display: flex;
  align-items: center;
}

.taskListCheckbox {
  flex: 0 0 10%;
  max-width: 10%;
  height: 2rem;
  margin-top: 0.5rem;
}

.taskListName {
  flex: 0 0 70%;
  max-width: 70%;
  color: #383f50;

  &.taskListNameDone {
    color: #b2b7bb;
    text-decoration: line-through;
  }
}

.taskListActions {
  flex: 0 0 20%;
  max-width: 20%;
  gap: 0.4rem;
  display: flex;
  justify-content: space-between;
}

.taskListBtn {
  flex: 0 0 3.5rem;
  max-width: 3.5rem;
  font-size: 1.8rem;
  border-radius: 8px;

  &:hover {
    background-color: var(--color-hover-primary);
  }
}
</style>
