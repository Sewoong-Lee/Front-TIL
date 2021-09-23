<template>
    <div>
        Completed Todo: {{numberOfCompletedTodo}}
        {{todos}}
    </div>
</template>

<script>
export default {
    
    computed: {
        //인덱스js의 투두스를 가져옴
        todos(){
            return this.$store.state.todos;
        },
        numberOfCompletedTodo(){
            return this.todos.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style scoped>

</style>