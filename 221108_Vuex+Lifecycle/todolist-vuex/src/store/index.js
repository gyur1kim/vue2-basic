import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: '할 일 1',
        isCompleted: false,
      },
      {
        title: '할 일 2',
        isCompleted: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoTitle){
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem){
      const idx = state.todos.indexOf(todoItem)
      state.todos.splice(idx, 1);
    },
    UPDATE_IS_COMPLETED(state, todoItem){
      const idx = state.todos.indexOf(todoItem)
      state.todos[idx].isCompleted = !state.todos[idx].isCompleted;
    }
  },
  actions: {
  },
  modules: {
  }
})
