<template>
  <div>
    <h3>
      선택 시간 : 
      <span 
        v-for="(time, idx) in selectedTimes" 
        :key="idx"
      >{{ time }}  </span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'SelectedTime',
  props: {
    selectedTimes: Array,
  },
}
</script>

<style>

</style>