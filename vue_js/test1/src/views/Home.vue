<!-- html코드 -->
<template> 
  <div>
    <h1>This is Home page</h1>
    <p>{{name}}</p>
    <KossieCoder title="home title" name1="하하"/>

    <form action="">
      <InputField :name="name" @update-name="updatename" />
      <!-- 메소드 없이 받을떄 -->
      <!-- <InputField :name="name" @update-name="name = $event.target.value" /> -->
      
      <!-- v-model로 넘겨 받을때 -->
      <!-- <InputField v-model="name" /> -->
      <button>서브밋</button>
    </form>
    {{name}}

    <button @click="updateName">서브밋</button>
  </div>
</template>

<!-- 데이터, 메소드, 와치 등등 -->
<script>
import InputField from '@/components/inputField.vue';
import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components: {
    KossieCoder,
    InputField
  },
  data(){
    return{
      name : 'Kossie coder'
    }
  },

  //인스턴스의 생명 주기
  beforeCreate(){ //아직 data에 접근 불가
    console.log('beforeCreate', this.name)
  },

  created(){ //data에 접근 가능 (제일 많이 사용)
    console.log('created', this.name)
  },

  beforeMount(){
    //alert('beforeMount')

  },

  mounted(){ //화면에 돔이 접근 가능
    //alert('mounted')
  },

  beforeUpdate(){
    alert('beforeUpdate')
  },

  updated(){ //여길 지나서 업데이트가 실행
    alert('updated')
  },

  beforeDestroy(){ //어바웃을 누르면 실행
    alert('beforeDestroy')
  },

  destroyed(){
    alert('destroyed')
  },

  methods: {
    updatename(name) {
      this.name = name;
    },
    updateName() {
      this.name = 'hello';
    }
  }
}
</script>

<style scoped>
/* scoped: 이 파일에만 스타일이 적용되게 제한 */
h1 {
  color: red;
}
</style>