import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: []
  },
  getters: {
    todosCountAll(state){
      return state.todos.length;
    },
    todosCountDone(state){
      const doneTodos = state.todos.filter((todo)=>todo.isCompleted)
      return doneTodos.length;
    },
    todosCountYet(state, getter){
      return getter.todosCountAll - getter.todosCountDone;
    }
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
