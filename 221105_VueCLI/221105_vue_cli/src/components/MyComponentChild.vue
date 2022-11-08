<template>
  <div id="myComponentChild">
    <h3>이것은 MyComponent의 자식입니다</h3>
    <p>정적 데이터 : {{ parentStaticData }}</p>
    <p>동적 데이터 : {{ parentDynamicData }}</p>
    <br>
    <button @click="childToParentStatic">부모에게 정적 이벤트 발생시키기</button>
    <button @click="childToParentDynamic">부모에게 동적 이벤트 발생시키기</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponentChild',
  data(){
    return{
      num: 0,
      // dynamicData: '자식->부모 동적 데이터',
    }
  },
  props: {
    parentStaticData: String,
    parentDynamicData: String,
  },
  methods: {
    childToParentStatic(){
      this.$emit('child-to-parent-static', '자식->부모 정적 데이터');
    },
    childToParentDynamic(){
      this.$emit('child-to-parent-dynamic', this.num);
      this.num++;
    }
  }
}
</script>

<style>
#myComponentChild {
  border: 1px dotted red;
  color: red;
}
</style>