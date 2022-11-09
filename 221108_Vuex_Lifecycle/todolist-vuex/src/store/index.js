import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodosCount(state){
      return state.todos.length;
    },
    completedTodosCount(state){
      return state.todos.filter((todo)=> todo.isCompleted).length;
    },
    notCompletedTodosCount(state, getters){
      return getters.allTodosCount - getters.completedTodosCount;
    }
  },
  mutations: {
    CREATE_TODO (state, todoItem){
      state.todos.push(todoItem);
    },
    DELETE_TODO (state, todoItem){
      const index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    UPDATE_TODO_STATUS (state, todoItem){
      const index = state.todos.indexOf(todoItem);
      state.todos[index].isCompleted = !state.todos[index].isCompleted;
    }
  },
  actions: {
    createTodo(context, todoTitle){
      //객체 만들기
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      context.commit('CREATE_TODO', todoItem);
    },
  },
  modules: {
  }
})
