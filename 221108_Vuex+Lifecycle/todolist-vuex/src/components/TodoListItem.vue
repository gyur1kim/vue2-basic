<template>
  <div id="todoItem">
    <span>{{ todo.title }}</span>
    <button @click="updateIsCompleted">✅</button>
    <button @click="deleteTodo">❎</button>
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
</style>