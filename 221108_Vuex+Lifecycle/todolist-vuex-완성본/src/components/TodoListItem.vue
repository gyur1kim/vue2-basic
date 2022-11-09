<template>
  <div id="todoItem">
    <span 
      id="todoTitle"
      :class="{'is-completed': todo.isCompleted }"
    >{{ todo.title }}  </span>
    <button v-if="todo.isCompleted" @click="updateTodoStatus">✅</button>
    <button v-else @click="updateTodoStatus">⬜</button>
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
      this.$store.dispatch('deleteTodo', this.todo);
    },
    updateTodoStatus(){
      this.$store.dispatch('updateTodoStatus', this.todo);
    }
  }
}

</script>

<style>
button{
  border: 0;
  background: white;
  flex: 0.1;
  cursor: pointer;
}
#todoTitle{
  display: inline-block;
  flex: 0.8;
  text-align: left;
}
#todoItem{
  display: flex;
  border-bottom: 1px solid rgb(209, 209, 209);
  padding: 10px;
}
#todoItem:nth-last-child(2){
  border-bottom: 2px solid rgb(188, 188, 188);
}
.is-completed {
  text-decoration: line-through;
  color: rgb(175, 175, 175);
}
</style>