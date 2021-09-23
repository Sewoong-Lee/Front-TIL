import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { //데이터
        todos: [
            {id:1, text: 'buy a car', checked: false},
            {id:2, text: 'play game', checked: false},
          ],
          users: []
    },
    mutations: { //데이터를 업데이트
        SET_USERS(state,users){
            state.users = users;
        },
        ADD_TODO(state, value){
            state.todos.push({
                id: Math.random(),
                text: value,
                chcked: false
            });
        },

        TOGGLE_TODO(state, {id, checked}){
            console.log(id, checked)
            const index = state.todos.findIndex(todo => {
            return todo.id === id;
            });
            state.todos[index].checked = checked;
        },

        DELETE_TODO(state, todoid){
            const index = state.todos.findIndex(todo => {
                return todo.id === todoid;
              });
              state.todos.splice(index, 1);
        }
    },
    actions: { //함수
        getUsers({commit}){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
                commit('SET_USERS', res.data);
            });
        },
        addTodo({commit}, value){
            //console.log(value);
            setTimeout(function () {
                commit('ADD_TODO', value);
            }, 500); //2초 후 작동
        },

        toggleTodo({commit},paylode){
            setTimeout(function () {
                commit('TOGGLE_TODO', paylode);
            }, 500); //2초 후 작동
        },

        deleteTodo({commit}, todoid){
            setTimeout(function () {
                commit('DELETE_TODO', todoid);
            }, 500); //2초 후 작동
        }
    },
    getters: { //컨퓨티드와 비슷

    }
});