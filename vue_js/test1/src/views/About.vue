<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 숫자가 들어가면 타입에 맞지 않아 에러가뜸 -->
    <!-- <KossieCoder :title="title"/> -->
    <!-- 스트링 형이면 타일틀 형이 맞아 잘 뜸 -->
    <KossieCoder title="타이틀틀"/>
    <!-- 디폴트 타이틀 값을 정해줘서 안보내면 디폴트가 뜸 -->

    <!-- 슬롯!! -->
    <KossieCoder>
      <!-- 슬롯의 이름을 적어줌 -->
      <!-- 자식 컨퍼넌트의 값을 가져오기 -->
        <template v-slot:header="{kossi}">
        <h1>header11 {{kossi}}</h1>
        </template>
        <!-- #으로 줄여서 사용 가능 -->
        <template #default>
        <h1>default11</h1>
        </template>
        
    </KossieCoder>
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
