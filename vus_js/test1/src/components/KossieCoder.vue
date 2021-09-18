<template>
    <div>
        <p>{{name}}</p>
        <button @click="updated">클릭</button>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            name : '코지코더 유튜브',
        }
    },
    methods: {
        updated(){
            this.name = '구독과 조아요~';
        }
    }
}
</script>

<style scoped>

</style>