<template>
    <div>
        <h1>{{result}}</h1>
        (정답) : {{this.answer.join('')}}
        <!-- <form v-on:submit = "onSubmitForm"> -->
        <form @submit.prevent = "onSubmitForm">
            <input type="text" ref="answer" v-model="value" maxlength="4" minlength="4">
            <button type="submit">입력</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">
                {{t.try}}
                {{t.result}}
            </li>
        </ul>
    </div>
    
</template>

<script>
    const getNumbers = () => { //화면이랑 크게 관련이 없어 메소드에 만들지 않음
        const candidates = [1,2,3,4,5,6,7,8,9];
        const array = [];
        for (let i = 0; i<4; i += 1){
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
        }
        return array;
    };
    
export default { //아래 객체를 메인js가 불러감
    data(){
        return{
            answer: getNumbers(), // ex) [1,2,3,4]
            tries: [], //시도수
            value: '', //입력
            result: '',  //결과

        }
    },
    methods: {
        onSubmitForm(){
            if(this.value === this.answer.join('')){// 정답 맞췄으면
                //위에 @프리이벤트로 이벤트 제거 안해도댐
                this.tries.push({
                    try: this.value,
                    result: '홈런',
                });
                this.result = '홈런';
                alert('게임을 다시 시작 합니다.');
                this.value = '';
                this.answer = getNumbers();
                this.tries = [];
                this.$refs.answer.focus();
            }else{ //정답 틀렸을때 실패! 답은 ${this.answer.join(',')} 였습니다.
                if(this.tries.length >= 9){
                    this.result = `10번 초과 실패! 답은 ${this.answer.join(',')} 였습니다.`;
                    alert('게임을 다시 시작합니다.');
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();
                } 
                let strike = 0;
                let ball = 0;
                const answerArray = this.value.split('').map(v => parseInt(v)); //문자열을 숫자 배열로 변경
                for(let i = 0; i<4; i+= 1){
                    if(answerArray[i]=== this.answer[i]){//숫자 자릿수 모두 정답
                        strike ++;
                    }else if(this.answer.includes(answerArray[i])){//숫자만 정답
                        ball ++
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼 입니다.`,
                });
                this.value = '';
                this.$refs.answer.focus();
            }
            
            
           
        }
    }
}
</script>

<style scoped>

</style>