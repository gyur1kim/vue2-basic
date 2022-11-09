<template>
  <div id="todoList">
    <TodoListItem 
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />

    <div id="todoItem">
      <span id="total">전체 : {{ allTodosCount }}</span>
      <span id="count-completed">
        <span id="done">완료 : {{ completedTodosCount }}</span>
        <span id="notYet">미완료 : {{ notCompletedTodosCount }}</span>
      </span>
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
  computed: {
    todos(){
      return this.$store.state.todos
    },
    allTodosCount(){
      return this.$store.getters.allTodosCount;
    },
    completedTodosCount(){
      return this.$store.getters.completedTodosCount;
    },
    notCompletedTodosCount(){
      return this.$store.getters.notCompletedTodosCount;
    }
  }
}
</script>

<style>
#todoList{
  width: 50%
}
#total{
  font-weight: bold;
}
#completed-count{
  width: 100px;
  font-size: 0.8rem;
}
#todoItem:last-child{
  justify-content: space-between;
}
#done, #notYet{
  display: inline-block;
  width: 80px;
  text-align: right;
  font-size: 0.8rem;
}

</style>