<script setup>
import { useCssModule, computed } from 'vue'

const props = defineProps({
  todos: Object,
  isDone: Boolean,
  setDoneTodo: Function,
  startEditTodo: Function,
  handleDeleteTodo: Function
})

const checkDoneTaskList = computed(() => {
  const $style = useCssModule('$style')

  const anyDone = props.todos.some((todo) => todo.done)

  return `${anyDone ? $style.taskListNameDone : ''}`
})

const checkTaskTitle = computed(() => {
  return props.isDone ? 'Hoàn thành' : 'Chưa hoàn thành'
})
</script>

<template>
  <div :class="$style.taskListContainer">
    <h2 :class="$style.taskListTitle">
      {{ checkTaskTitle }}
    </h2>

    <div :class="$style.taskList">
      <div :class="$style.task" v-for="todo in props.todos" :key="todo.id">
        <input
          type="checkbox"
          :class="$style.taskListCheckbox"
          :checked="todo.done"
          @change="(e) => setDoneTodo(todo.id, e.target.checked)"
        />

        <span :class="[checkDoneTaskList, $style.taskListName]"> {{ todo.name }} </span>

        <div :class="$style.taskListActions">
          <button :class="$style.taskListBtn" @click="startEditTodo(todo.id)">✒</button>

          <button :class="$style.taskListBtn" @click="handleDeleteTodo(todo.id)">🗑</button>
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
  font-size: 3rem;
  margin-bottom: 2rem;
}

.task {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
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
