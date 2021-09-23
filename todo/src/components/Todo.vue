<template>
    <div class="mb-2 d-flex">
        <div>
        {{todo.checked}}
        <input type="checkbox" :checked="todo.chcked" 
        @change="toggleCheckbox">
        </div>
        
      <!-- 체크되면 바꾸기 효과 -->
      <span 
        class="ml-3 flex-grow-1"
        :class="todo.checked ? 'text-muted' : '' "
        :style="todo.checked ? 'text-decoration:line-through' : ''"
      >
          {{todo.text}}
        </span>
        <button 
            class="btn btn-danger btn-sm"
            @click="clickDelete"
        >삭제</button>
    </div>
</template>

<script>

export default ({
    props: {
        todo: {
            type : Object,
            required: true
        }
    },
    methods: {
        //아이디랑 현제 체크값을 부모에 보냄
        toggleCheckbox(e){
            this.$store.dispatch('toggleTodo', {
                id: this.todo.id,
                checked: e.target.checked
            });

            //this.$store.commit('TOGGLE_TODO',{id: this.todo.id, checked: e.target.checked} )
            
            // this.$emit('toggle-checkbox',{
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
            
        },
        clickDelete(){
            this.$store.dispatch('deleteTodo', this.todo.id);
            //this.$store.commit('DELETE_TODO', this.todo.id )
            //this.$emit('click-delete', this.todo.id);
        }
    }
})
</script>

<style scoped>

</style>