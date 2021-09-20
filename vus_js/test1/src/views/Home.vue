<!-- html코드 -->
<template> 
  <div>
    <h1>This is Home page</h1>
    <p>{{name}}</p>
    <KossieCoder title="home title" name1="하하"/>
  </div>
</template>

<!-- 데이터, 메소드, 와치 등등 -->
<script>
import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components: {
    KossieCoder
  },
  data(){
    return{
      name : '이름이다'
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