<template>
  <div id="todoForm">
    <input 
      type="text"
      v-model.trim="todoTitle"
      @keyup.enter="createTodo"
      placeholder="오늘의 할 일!"
    >
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data(){
    return{
      todoTitle: null,
    }
  },
  methods: {
    createTodo(){
      if(this.todoTitle){
        this.$store.dispatch('createTodo', this.todoTitle);
      }
      this.todoTitle = null;
    }
  }
}
</script>

<style>
input{
  margin: 20px 0;
  height: 26px;
  width: 100%;
  box-sizing: border-box;
}
#todoForm{
  width: 50%
}
</style>