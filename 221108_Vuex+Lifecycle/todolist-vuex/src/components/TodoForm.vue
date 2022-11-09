<template>
  <div id="todoForm">
    <input 
      type="text"
      v-model="inputData"
      @keyup.enter="createTodo"
    >
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    createTodo(){
      this.$store.commit('CREATE_TODO', this.inputData);
      this.inputData = null;
    }
  }
}
</script>

<style>
</style>