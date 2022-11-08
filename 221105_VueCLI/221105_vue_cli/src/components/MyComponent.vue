<template>
  <!-- 템플릿에 요소 추가 -->
  <div id="myComponent">
    <h1>이것은 MyComponent입니다.</h1>
    <MyComponentChild 
      parent-static-data="부모->자식 정적데이터" 
      :parent-dynamic-data="parentDynamicData"

      @child-to-parent-static="parentGetStaticData"
      @child-to-parent-dynamic="parentGetDynamicData"
    />
  </div>
</template>

<script>
import MyComponentChild from '@/components/MyComponentChild';

export default {
  // script에 이름 등록
  name: 'MyComponent',
  components: {
    MyComponentChild,
  },
  data(){
    return{
      parentDynamicData: "부모->자식 동적데이터"
    }
  },
  methods: {
    parentGetStaticData(data){
      const staticData = document.createElement('div');
      staticData.innerText = data;
      document.querySelector('#myComponent').appendChild(staticData);
    },
    parentGetDynamicData(data){
      const dynamicData = document.createElement('div');
      dynamicData.innerText = data;
      document.querySelector('#myComponent').appendChild(dynamicData);
    }
  }
}
</script>

<style>
#myComponent {
  border: 2px solid black;
}
</style>