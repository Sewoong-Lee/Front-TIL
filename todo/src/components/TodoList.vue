<template>
    <div>
        <Todo v-for="todo in todos" :key="todo.id"
        :todo="todo"
        @toggle-checkbox = "toggleCheckbox"
        @click-delete="deleteTodo"/>
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
    components:{
        Todo
    },
    computed:{
        //인덱스js의 투두스를 가져옴
        todos() {
            return this.$store.state.todos;
        }
    },
    methods:{
        toggleCheckbox(value){
            this.$emit('toggle-checkbox',value);
            
        },
        deleteTodo(todoId){
            this.$emit('click-delete', todoId);
        }
    }
}
</script>

<style scoped>

</style>