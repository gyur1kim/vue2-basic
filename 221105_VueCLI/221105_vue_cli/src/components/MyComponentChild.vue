<template>
  <div id="myComponentChild">
    <h3>이것은 MyComponent의 자식입니다</h3>
    <p>정적 데이터 : {{ parentStaticData }}</p>
    <p>동적 데이터 : {{ parentDynamicData }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponentChild',
  props: {
    parentStaticData: String,
    parentDynamicData: String,
  }
}
</script>

<style>
#myComponentChild {
  border: 1px dotted red;
  color: red;
}
</style>