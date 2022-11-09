<template>
  <div id="todoItem">
    <div :class="{ 'is-completed': todo.isCompleted }">{{ todo.title }}</div>
    <div class="btn">
      <button @click="updateIsCompleted">✅</button>
      <button @click="deleteTodo">❎</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo(){
      this.$store.commit('DELETE_TODO', this.todo)
    },
    updateIsCompleted(){
      this.$store.commit('UPDATE_IS_COMPLETED', this.todo)
    }
  }
}
</script>

<style>
.is-completed{
  text-decoration: line-through;
  color: gray;
}
</style>