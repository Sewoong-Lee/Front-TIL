<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 숫자가 들어가면 타입에 맞지 않아 에러가뜸 -->
    <!-- <KossieCoder :title="title"/> -->
    <!-- 스트링 형이면 타일틀 형이 맞아 잘 뜸 -->
    <KossieCoder title="타이틀틀"/>
    <!-- 디폴트 타이틀 값을 정해줘서 안보내면 디폴트가 뜸 -->
    <KossieCoder/>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components:{
    KossieCoder
  },
  data() { //숫자 넣을때
    return{
      title: 5
    }
  }

}
</script>
