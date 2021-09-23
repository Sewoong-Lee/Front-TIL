<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <!-- <Todo v-for="todo in todos" :key="todo.id"
    :todo="todo"
    @toggle-checkbox = "toggleCheckbox"
    @click-delete="deleteTodo"/> -->

    <TodoList />
    <UserList/>
    {{todos}}
  </div>

</template>

<script>
// import Todo from '@/components/Todo.vue';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
import UserList from '@/components/UserList.vue';

export default {
  components:{
    // Todo
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  // data() {
  //   return{
  //     todoText: '',
      // todos: [
      //   {id:1, text: 'buy a car', checked: false},
      //   {id:2, text: 'play game', checked: false},
      // ]
  //   }
  // },
  // methods:{
    //데이터의 todos 에 추가 
    // addTodo(value){
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     chcked: false
    //   });
      //추가 후 초기화
      //this.todoText = '';
      //console.log(e.target.value);
    //},
    //자식에서 보낸걸 받음
    //구조분해로 바로 받음
    // toggleCheckbox({id, checked}){
    //   console.log(id, checked)
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
    //삭제 메소드
    // deleteTodo(id){
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos.splice(index, 1);

      //2번쨰 방법
      //this.todos = this.todos.filter(todo => todo.id !== id);
    //}
  // }
}
</script>

<style>

</style>
