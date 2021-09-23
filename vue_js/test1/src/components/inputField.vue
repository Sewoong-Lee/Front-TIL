<template>
    <div>
    <label for="">이름</label>
      <input type="text" 
            :value="name" 
            style="padding: 30px; border:2px solid green;"
            @input="updatename"
            > <br>
            <!-- @input="$emit('update-name', $event)" 로 메소드 없이 가능(부모에서 타겟 설정) -->
    
    <!-- v-model로 넘겨 받을때 -->
    <!-- <input type="text" 
            :value="value" 
            style="padding: 30px; border:2px solid green;"
            @input="$emit('input', $event.target.value)"
            > <br> -->
    </div>
</template>

<script>
export default ({
    props: {
        name:{
            type: String,
            required: true
        },
        // value:{ //v-model로 자식에서 부모로 데이터 넘길때
        //     type: String,
        //     required: true
        // }
    },
    methods: {
        updatename(e){
            console.log(e.target.value);
            //emit 으로 부모 컨퍼넌트에 값을 넘겨줌
            this.$emit('update-name',e.target.value)
        }
    }
})
</script>
