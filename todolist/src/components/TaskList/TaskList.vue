<script setup></script>

<template>
  <div :class="$style.taskListContainer">
    <h2 :class="$style.taskListTitle">{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
    <div :class="$style.taskList">
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

<style lang="scss" module>
.taskListTitle {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.taskList {
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
