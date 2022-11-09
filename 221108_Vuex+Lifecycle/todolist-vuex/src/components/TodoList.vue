<template>
  <div id="todoList">
    <TodoListItem 
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
    <div id="todos-count-container">
      <div id="total">전체 : {{ todosCountAll }}</div>
      <div id="todos-count">
        <div id="todos-done">완료 : {{ todosCountDone }}</div>
        <div id="todos-yet">미완료 : {{ todosCountYet }}</div>
      </div>
    </div>
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
  },
  computed: {
    todosCountAll(){
      return this.$store.getters.todosCountAll;
    },
    todosCountDone(){
      return this.$store.getters.todosCountDone;
    },
    todosCountYet(){
      return this.$store.getters.todosCountYet;
    }
  }
}
</script>

<style>
</style>