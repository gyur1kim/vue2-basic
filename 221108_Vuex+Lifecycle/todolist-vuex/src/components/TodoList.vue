<template>
  <div id="todoList">
    <TodoListItem 
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  data() {
    return {
      todos: this.$store.state.todos,
    }
  }
}
</script>

<style>
</style>