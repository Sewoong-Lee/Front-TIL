<template>
    <input 
    v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"  
    >
</template>

<script>
export default {
    data() {
        return{
            todoText: '',
        }
    },
    methods:{
        addTodo(e){
            //뮤테이션만
            //this.$store.commit('ADD_TODO', e.target.value);
            //엑션 사용
            this.$store.dispatch('addTodo', e.target.value);
            //this.$emit('add-todo',e.target.value);
            this.todoText= '';
        }
    }
}
</script>