<template>
    <div>
        <h1>{{title}}</h1>
        <p>header</p>
        <!-- slot : 부모 컨퍼넌스에서 해당 컨포넌트 안에html 코드를 입력시 여기 들어감 -->
        <slot name = "header" :kossi="kossi"></slot>
        <p>{{name1}}</p>
        <p>{{name}}</p>
        <p>body</p>
        <slot></slot>
        <p>footer</p>
        <button @click="updated">클릭</button>
    </div>    
</template>

<script>
export default {
    //props: ['title'],
    props: {
        title: {
            //타입을 정할 수 있다.
            type: String, 
            default: '디폴트 타이틀',
            required: false //true면 무조건 보내줘야한다 (안보내면 에러) (false면 보내도되고 안보내도)
        },
        name1 : {
            // 프롭스 안에서 받는 변수명을 다른곳에서 쓰면 안댐
            //프롭스는 직접적으로 바꾸면 워링이뜸
            type: String,
            default: '디폴트 네임'
        }
        
    },
    data(){
        return{
            kossi : 'coder',
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