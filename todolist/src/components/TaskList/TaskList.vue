<script setup>
import { useCssModule, computed, ref } from 'vue'

const emit = defineEmits(['handleDeleteTodo', 'startEditTodo', 'setDoneTodo'])

const { todos, isDone } = defineProps({
  todos: Object,
  isDone: Boolean
})

const modalOpen = ref(false)

const checkTaskCompletion = computed(() => {
  const $style = useCssModule('$style')

  return {
    title: isDone ? 'Completed' : 'Incomplete',
    background: isDone ? $style.taskCompleted : $style.taskIncomplete,
    textDecoration: isDone ? $style.taskListNameDone : '',
    borderColor: isDone ? $style.taskListBorderCompleted : $style.taskListBorderIncomplete
  }
})
</script>

<template>
  <div :class="$style.taskListContainer">
    <h2 :class="[$style.taskListTitle, checkTaskCompletion.background]">
      {{ checkTaskCompletion.title }}
    </h2>

    <div :class="$style.taskList">
      <div :class="$style.task" v-for="todo in todos" :key="todo.id">
        <input
          type="checkbox"
          :class="$style.taskListCheckbox"
          :checked="todo.done"
          @change="(e) => emit('setDoneTodo', todo.id, e.target.checked)"
        />

        <span :class="[checkTaskCompletion.textDecoration, $style.taskListName]" :title="todo.name">
          {{ todo.name }}
        </span>

        <div :class="$style.taskListActions">
          <button
            :class="[$style.taskListBtn, checkTaskCompletion.borderColor]"
            @click="emit('startEditTodo', todo.id)"
          >
            <i class="fa-regular fa-pen-to-square" :class="$style.taskListIcon"></i>
          </button>

          <button :class="[$style.taskListBtn, checkTaskCompletion.borderColor]" @click="modalOpen = !modalOpen">
            <i class="fa-regular fa-trash-can" :class="$style.taskListIcon"></i>
          </button>
        </div>

        <commonModal :modalOpen="modalOpen" @closeModal="modalOpen = false" />
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
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.taskIncomplete {
  color: var(--color-danger);
}

.task {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.taskListCheckbox {
  -webkit-appearance: none;
  flex: 0 0 3rem;
  height: 2rem;
  margin-top: 0.5rem;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.taskListCheckbox::after {
  content: '...';
  font-size: 2.5rem;
  position: absolute;
  top: -0.6rem;
  left: 3px;
  color: var(--color-danger);
}

.taskListCheckbox:active,
.taskListCheckbox:checked:active {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.taskListCheckbox:checked {
  background-color: #e9ecee;
  border: 1px solid #adb8c0;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
    inset 15px 10px -12px rgba(255, 255, 255, 0.1);
  color: #99a1a7;
}

.taskListCheckbox:checked:after {
  content: '\2714';
  font-size: 3rem;
  position: absolute;
  top: -1.5rem;
  left: 3px;
  color: var(--color-primary);
}

.taskListName {
  flex: 1 1 auto;
  color: #383f50;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.taskListNameDone {
    color: #b2b7bb;
    text-decoration: line-through;
  }
}

.taskListActions {
  flex: 0 0 auto;
  gap: 0.4rem;
  display: flex;
  justify-content: space-between;
}

.taskListBtn {
  flex: 0 0 7rem;
  max-width: 3.5rem;
  font-size: 1.8rem;
  border-radius: 8px;
  height: 3.5rem;

  &:hover {
    background-color: var(--color-hover-primary);
    color: #ffffff;
  }
}

.taskListIcon {
  color: #fefefefe;
}

.taskListBorderCompleted {
  background-color: var(--color-primary-light);
}

.taskListBorderIncomplete {
  background-color: var(--color-danger-light);
}

.taskListTitle {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.taskCompleted {
  color: var(--color-primary);
}
</style>
