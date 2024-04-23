<script setup>
const props = defineProps({
  todos: Object,
  isDone: Boolean
})

const checked = ref(false)

const doneTaskList = computed(() => {
  return `${props.todos.done ? (classes.taskNameDone) : ''}`
})

const taskTitle = computed(() => {
  return props.isDone ? 'Hoàn thành' : 'Chưa hoàn thành'
})
</script>

<template>
  <div :class="classes.taskListContainer">
    <h2 :class="classes.taskListTitle">
      {{ taskTitle }}
    </h2>

    <div :class="classes.taskList">
      <div :class="classes.task" v-for="todo in props.todos" :key="todo.id">
        <input type="checkbox" :class="$style.taskCheckbox" v-model="checked" />
      </div>

      <span :class="`${classes.taskName} `"> {todo.name} </span>
      <!-- {todos.map((todo) => (
          <div :class={styles.task} key={todo.id}>
            <input
              type='checkbox'
              :class={styles.taskCheckbox}
              checked={todo.done}
              onChange={(e) => handleDoneTodo(todo.id, e.target.checked)}
            />
            <span :class={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div :class={styles.taskAction}>
              <button :class={styles.taskbtn} onClick={() => startEditTodo(todo.id)}>
                ✒
              </button>

              <button :class={styles.taskbtn} onClick={() => deleteTodo(todo.id)}>
                🗑
              </button>
            </div>
          </div>
        ))} -->
    </div>
  </div>
</template>

<style lang="scss" module="classes">
.taskListContainer {
  margin-top: 2rem;
}
.taskListTitle {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.task {
  display: flex;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}

.taskCheckbox {
  flex: 0 0 10%;
  max-width: 10%;
  height: 2rem;
  margin-top: 0.5rem;
}

.taskName {
  flex: 0 0 70%;
  max-width: 70%;
  padding: 0 0 0.5rem;
  color: #383f50;

  &.taskNameDone {
    color: #b2b7bb;
    text-decoration: line-through;
  }
}

.taskAction {
  flex: 0 0 20%;
  max-width: 20%;
  display: flex;
  justify-content: space-between;
}

.taskbtn {
  flex: 0 0 3.5rem;
  max-width: 3.5rem;
  font-size: 1.8rem;
}
</style>
