<template>
  <div class="holder">
    <TodoContainer v-slot="{ status, todos }">
      <div>
        <p>
          <i>Todos: {{ status }}</i>
        </p>
        <h3 v-if="!selectedTodo">Select todo!</h3>
        <template v-else>
          <span><b>userId:</b> {{ selectedTodo.userId }}</span>
          <br />
          <span><b>id:</b> {{ selectedTodo.id }}</span>
          <br />
          <span><b>title:</b> {{ selectedTodo.title }}</span>
          <br />
          <span><b>completed:</b> {{ selectedTodo.completed }}</span>
          <br />
          <br />
        </template>

        <select v-model="selectedTodo">
          <option v-for="(todo, index) in todos" :value="todo" :key="index">
            {{ todo.title }}
          </option>
        </select>
        <br />
        <br />
      </div>
    </TodoContainer>
  </div>
</template>

<script>
import TodoContainer from "../containers/todoContainer.js";

export default {
  name: "Todos",
  components: {
    TodoContainer,
  },
  data() {
    return {
      selectedTodo: null,
    };
  },
};
</script>

<style scoped>
.holder {
  text-align: center;
  border-style: solid;
}
</style>
