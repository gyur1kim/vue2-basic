<template>
  <div id="app">
    <h1>오늘의 할 일</h1>
    <TodoList />
    <TodoForm />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;

  /* customize */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
